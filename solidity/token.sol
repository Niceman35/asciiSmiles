// ASCII Smiles Token. 
// Utility token of the https://smiles.cards project.
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";


contract ASCIISmilesToken is ERC20, ERC20Permit {
    
    uint256 private constant startTime = 1638316800;
    uint256 public constant maxSupply = 5_000_000 ether;
    address private constant ASCIINFT = 0x0A5c1108d016b2486433cD838450c9ef932e03d5;
    address public constant CommunityFund = 0xBfDA4Ee93f99612f282F8bC4C234331406dbD4a0;
    address private constant Owner = 0xb1482dBD6D592F7ec31d587533384693F1E13A3A;
    address public Bridge;

    mapping(uint256 => uint256) private _ASCIIClaimed;
    
    event bridgeMint(uint256 value, uint256 fromNetwork);
    event bridgeBurn(uint256 value, uint256 toNetwork);

    constructor()
        ERC20("ASCII Smiles token", "ACS")
        ERC20Permit("ASCII Smiles token")
    {
    }

    function everySecond(string memory rarity) internal pure returns (uint256) {
        uint128 _rarity;
        assembly {
            _rarity := mload(add(rarity, 0x10))
        }               
        if(_rarity == 0x436F6D6D6F6E00000000000000000000) // Common
            return 1157407407407; // 0.1 daily
        if(_rarity == 0x556E636F6D6D6F6E0000000000000000) // Uncommon
            return 9259259259259; // 0.8 daily
        if(_rarity == 0x52617265000000000000000000000000)  // Rare
            return 17361111111111; // 1.5 daily
        if(_rarity == 0x45706963000000000000000000000000) // Epic
            return 34722222222222; // 3 daily
        if(_rarity == 0x4C6567656E6461727900000000000000)  // Legendary
            return 115740740740741; // 10 daily
        if(_rarity == 0x46756E64000000000000000000000000) // Fund
            return 6944444444444444; // 600 daily
        return 0;
    }

    function payNick(address from, uint256 amount) external {
        require( _msgSender() == ASCIINFT, "Restricted" );
        _burn(from, amount);
    }

    function claimFund() external {
        require(maxSupply > totalSupply() , "Max supply reached");
        uint256 amountToClaim = (block.timestamp - startTime) * everySecond("Fund") - _ASCIIClaimed[10000];
        _ASCIIClaimed[10000] += amountToClaim;
        mintWithCap(CommunityFund, amountToClaim);
    }

    function claimByIds(uint256[] calldata asciiIds) external {
        require(maxSupply > totalSupply(), "Max supply reached");
        ASCIISmilesNFT Smiles = ASCIISmilesNFT(ASCIINFT);
        uint256 amountToClaim;
        uint256 tokensClaim;
        string memory TokenRarity;
        for (uint256  i = 0; i < asciiIds.length; i++) {
            require(Smiles.ownerOf(asciiIds[i]) == msg.sender, "Not owner of ID");
            TokenRarity = Smiles.getRarity(asciiIds[i])[2];
            tokensClaim = (block.timestamp - startTime) * everySecond(TokenRarity) - _ASCIIClaimed[asciiIds[i]];
            _ASCIIClaimed[asciiIds[i]] += tokensClaim;
            amountToClaim += tokensClaim;
        }
        mintWithCap(msg.sender, amountToClaim);
    }

    function mintWithCap(address account, uint256 amount) private {
        if(totalSupply() + amount > maxSupply) {
            amount = maxSupply - totalSupply();
        }
        require(amount > 0, "Zero claimed");
        _mint(account, amount);
    }

    function setBridge(address _bridge) public {
        require(_msgSender() == Owner, "Restricted");
        Bridge = _bridge;
    }

    function burnBridge(address fromAddr, uint128 value, uint256 toNetwork) external {
        require(_msgSender() == Bridge, "Restricted");
        _burn(fromAddr, value);
        emit bridgeBurn(value, toNetwork);
    }

    function mintBridge(address toAddr, uint128 value, uint256 fromNetwork) external {
        require(_msgSender() == Bridge, "Restricted");
        _mint(toAddr, value);
        emit bridgeMint(value, fromNetwork);
    }

    function getClaimed(uint256 tokenID) public view returns (uint256) {
        return _ASCIIClaimed[tokenID];
    }
    
    function withdraw() public {
        uint256 _balance = address(this).balance ;
        payable(CommunityFund).transfer(_balance);
    }

    function reclaimERC20(IERC20 erc20Token) public {
        erc20Token.transfer(CommunityFund, erc20Token.balanceOf(address(this)));
    }

}

contract ASCIISmilesNFT {
    function ownerOf(uint256 tokenId) public view returns (address) {}
    function getRarity(uint256 tokenID) public view returns(string[3] memory) {}
} 