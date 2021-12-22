/**
 * @preserve
 * JS Implementation of incremental MurmurHash3 (r150) (as of May 10, 2013)
 *
 * @author <a href="mailto:jensyt@gmail.com">Jens Taylor</a>
 * @see http://github.com/homebrewing/brauhaus-diff
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 */
!function(){function t(h,r){var s=this instanceof t?this:e;return s.reset(r),"string"==typeof h&&h.length>0&&s.hash(h),s!==this?s:void 0}var e;t.prototype.hash=function(t){var e,h,r,s,i;switch(i=t.length,this.len+=i,h=this.k1,r=0,this.rem){case 0:h^=i>r?65535&t.charCodeAt(r++):0;case 1:h^=i>r?(65535&t.charCodeAt(r++))<<8:0;case 2:h^=i>r?(65535&t.charCodeAt(r++))<<16:0;case 3:h^=i>r?(255&t.charCodeAt(r))<<24:0,h^=i>r?(65280&t.charCodeAt(r++))>>8:0}if(this.rem=3&i+this.rem,i-=this.rem,i>0){for(e=this.h1;;){if(h=4294967295&11601*h+3432906752*(65535&h),h=h<<15|h>>>17,h=4294967295&13715*h+461832192*(65535&h),e^=h,e=e<<13|e>>>19,e=4294967295&5*e+3864292196,r>=i)break;h=65535&t.charCodeAt(r++)^(65535&t.charCodeAt(r++))<<8^(65535&t.charCodeAt(r++))<<16,s=t.charCodeAt(r++),h^=(255&s)<<24^(65280&s)>>8}switch(h=0,this.rem){case 3:h^=(65535&t.charCodeAt(r+2))<<16;case 2:h^=(65535&t.charCodeAt(r+1))<<8;case 1:h^=65535&t.charCodeAt(r)}this.h1=e}return this.k1=h,this},t.prototype.result=function(){var t,e;return t=this.k1,e=this.h1,t>0&&(t=4294967295&11601*t+3432906752*(65535&t),t=t<<15|t>>>17,t=4294967295&13715*t+461832192*(65535&t),e^=t),e^=this.len,e^=e>>>16,e=4294967295&51819*e+2246770688*(65535&e),e^=e>>>13,e=4294967295&44597*e+3266445312*(65535&e),e^=e>>>16,e>>>0},t.prototype.reset=function(t){return this.h1="number"==typeof t?t:0,this.rem=this.k1=this.len=0,this},e=new t,"undefined"!=typeof module?module.exports=t:this.MurmurHash3=t}();

let hat =   [
    ['(',9,'Egghead'],
    ['d',19,'Baseball'],
    ['~',29,'Baby'],
    ['3',39,'Rudolph'],
    ['8',49,'Little Girl'],
    ['>',59,'Devil'],
    ['O',68,'Angel'],
    ['}',78,'Horns'],
    ['<',83,'Dunce'],
    ['S',84,'Fringe'],
    ['+<',85,'Pope'],
    ['8<',86,'Wizard'] ,
    ['@}',87,'Flower'],
    ['=)',88,'Uncle Sam'],
    ['{',89,'Toupee'],
    ['*(',90,'Pompon'],
    ['*<)',91,'Clown'] ,
    ['C=',92,'Chef'],
    ['~~',93,'Snake'],
    ['&',94,'Curly'],
    ['@@',95,'Marge Simpson'],
    [')',96,'Nordic'],
    ['=',97,'Punk'],
    ['[',98, 'Walkman'],
    ['*<|',99,'Santa Claus']
];
let eyes =  [
    [':',29, 'Regular'],
    [';', 49, 'Winking'],
    [':`', 69, 'Crying'],
    ['`:', 79,'Sweating'],
    ['8',84,'Glasses'],
    ['.',89,'One eyed'],
    ['B',91,'Horn-rims'],
    ['+',92,'Crushed'],
    ['0',93,'Snorkeling'],
    ['=',94,'Happy'],
    ['o',95,'Cyclops'],
    ['X',96,'Blinded'],
    ['#',97,'Dizzy'],
    ['%',98,'Tired'],
    ['|',99,'Asleep']
];
let noses = [
    ['-',49,'Straight'],
    ['^',79,'Pointy'],
    ['o',89,'Clown'],
    ['=',93,'Orangutan'],
    ['~',96,'Wondering'],
    ['*',99,'Drunk']
];
let mouth = [
    [')', 39, 'Smiley'],
    ['(', 59, 'Sad'],
    ['D',69,'Laughing'],
    ['O',79,'Yelling'],
    ['C',82,'Bummed'],
    ['p',85,'Tongue'],
    ['Q',88,'Smoker'],
    ['I',89,'Indifferent'],
    ['*',90,'Kissing'],
    ['>',91,'Lewd'],
    ['<',92,'Walrus'],
    [']',93,'Blockhead'],
    ['E',94,'Vampire'],
    ['@',95,'Yelling'],
    ['$',96,'Rich'],
    ['/',97,'Skeptical'],
    ['{',98,'Mustache'],
    ['(|)',99,'Homer Simpson']
];
let beard = [
    ['}',9,'Beard'],
    ['X',19,'Bow-tie'],
    ['{',29,'Shoulders'],
    ['>',39,'Suit'],
    ['~',49,'Goatee'],
    ['>3',59,'Big bust'],
    ['3<',69,'Hands up'],
    [']',79,'Robot'],
    ['=',89,'Rave Dude'],
    ['8<',94,'The Girl'],
    ['^<',99,'The Boy']
];
const Empty = ['', 0, ''];

function getRandom(seed, tokenID) {
    let rand = MurmurHash3(seed  + tokenID).result();
    return rand % 100;
}
function pluck(tokenID, seed, items) {
    let rarity = getRandom(seed, tokenID);
    for(let i = 0; i < items.length; i++) {
        if(rarity <= items[i][1])
            return items[i];
    }
    return Empty;
}

function getHat(tokenID) {
    let rar = getRandom('SEEDRARITY', tokenID);
    if(rar < 20) {
        return pluck(tokenID, 'SEEDHAT', hat);
    } else {
        return Empty;
    }
}
function getEyes(tokenID) {
    return pluck(tokenID, 'SEEDEYES', eyes);
}

function getNose(tokenID) {
    return pluck(tokenID, 'SEEDNOSE', noses);
}

function getMouth(tokenID) {
    return pluck(tokenID, 'SEEDMOUTH', mouth);
}

function getBeard(tokenID) {
    let rar = getRandom('SEEDRARITY', tokenID);
    if(rar < 4) {
        return pluck(tokenID, 'SEEDBEARD', beard);
    } else {
        return Empty
    }
}

function getRarity(tokenID) {
    let greatness = getRandom('SEEDRARITY', tokenID);
    if(greatness === 0)
        return ['#ffd500','#fff2b3','Legendary'];
    if(greatness < 4)
        return ['#9c27b0','#eac0f2','Epic'];
    if(greatness < 10)
        return ['#3f51b5','#c6cceb','Rare'];
    if(greatness < 20)
        return ['#4caf50','#cae8ca','Uncommon'];
    return ['#9e9e9e','#d9d9d9','Common']
}

function SVGEncode(string) {
    let output;
    output = string.replace("&", "&amp;");
    output = output.replace("<", "&lt;");
    output = output.replace(">", "&gt;");
    return output;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('generate').addEventListener('click', function () {
        let count = parseInt(document.getElementById('numimages').value);
        if(count > 10000) {
            alert('Maximum 10 000 cards');
            return;
        }
        let startNum = randomNumber(0, 10000 - count);
        document.getElementById('mypics').innerHTML = "";
        let countRar = {'Legendary':0,'Epic':0,'Rare':0,'Uncommon':0, 'Common':0};
        let svgText = '';

        for(let tokenID = startNum; tokenID < startNum + count; tokenID++) {
            let Rarity = getRarity(tokenID);
            let Hat = getHat(tokenID);
            let Eyes = getEyes(tokenID);
            let Nose = getNose(tokenID);
            let Mouth = getMouth(tokenID);
            let Beard = getBeard(tokenID);
            let Smile = Hat[0] + Eyes[0] + Nose[0] + Mouth[0] + Beard[0];
            svgText = '<svg xmlns="http://www.w3.org/2000/svg" width="550" height="930">';
            svgText += '<defs><radialGradient id="myG"><stop offset="10%" stop-color="#eee" /><stop offset="70%" stop-color="'+Rarity[1]+'" /></radialGradient></defs>';
            svgText += '<g fill="'+Rarity[0]+'" font-family="sans-serif" font-size="70">';
            svgText += '<rect stroke="'+Rarity[0]+'" width="510" height="890" x="20" y="20" fill="url(\'#myG\')" stroke-width="30" rx="50"/>';
            svgText += '<text x="60" y="120">:-)</text><text x="430" y="120">:-)</text><text x="60" y="850">:-)</text><text x="430" y="850">:-)</text>';
            svgText += '<text x="275" y="500" font-size="160" text-anchor="middle" writing-mode="tb">';
            svgText += SVGEncode(Hat[0]);
            svgText += '<tspan fill="#555">';
            svgText += SVGEncode(Eyes[0]);
            svgText += SVGEncode(Nose[0]);
            svgText += SVGEncode(Mouth[0]);
            svgText += '</tspan>';
            svgText += SVGEncode(Beard[0]);
            svgText += '</text></g></svg>';
            var div = document.createElement('div');
            var img = document.createElement('img');
            var base64 = btoa(svgText);
            var imgSource = 'data:image/svg+xml;base64,' + base64;
            img.setAttribute('src', imgSource);
            div.title = 'ASCII Smile #: ' + tokenID.toString() + "\n";
            div.title += 'Rarity: ' + Rarity[2] + "\n\n";
            if(Hat[2] > '')
                div.title += 'Hat: ' + Hat[2] + "\n";
            div.title += 'Eyes: ' + Eyes[2] + "\n";
            div.title += 'Nose: ' + Nose[2] + "\n";
            div.title += 'Mouth: ' + Mouth[2] + "\n";
            if(Beard[2] > '')
                div.title += 'Beard: ' + Beard[2] + "\n";
            div.title += 'ASCII Smile: ' + Smile + "\n";
            div.appendChild(img);
            document.getElementById('mypics').appendChild(div);
            countRar[Rarity[2]]++;
        }
        console.log(countRar);
    });
});
