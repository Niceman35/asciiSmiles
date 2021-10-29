let preMintList = [
  "0x000006eee6e39015cB523AeBDD4d0B1855aBa682",
  "0x00c2663f576ac841b52ab569a98dfb611ea1e3e1",
  "0x056856cf7468c05105e3d7bc6a196d2f067d409a",
  "0x06ac63ca66a0070bfa15070d7460004511cd964e",
  "0x0bbff9fdcebe512e912e241bbc5f7449e593ddcd",
  "0x0d0f87793e5559d4adfb738836489f126bb79da9",
  "0x105B15106bf2b779E93176BAcC6A1e25537f80C4",
  "0x13D291D736501C891C2D689D28f64461BEc6d26B",
  "0x195918d0ada5cf46be0bdd77e795471b655cb0a8",
  "0x19fdfa68625d0f8ce3cef4866b7e73f2a4e040e3",
  "0x1a9a2568bfdf3ce1608d45c42c10bf0f096df959",
  "0x1dd721323a25c8e6079b72b902a44593eea8d904",
  "0x1e258904e7a7d6c68cc51e88164cb2df1ccca533",
  "0x1e2ae80100617bc0a1f483cf339adc317108945f",
  "0x1ed949c123fa73bb58441fe2ae4bf1b56b49d1ba",
  "0x1ede28b78f7b823166de88a5fcfda7de18343f0e",
  "0x1f89a50c0d945d435dfcefb88564e5c0040d7025",
  "0x22932df902d879da5117eb0a1e408a636431b310",
  "0x24b105ace22f18611dd7c98664af590c31040661",
  "0x29dfe1c48d98226c03b5adae20b7c7bd64bf02f5",
  "0x327a8a49bb08f2cb4610230fa74f11ba522a9852",
  "0x3646975ce1f0cd79f5bd2705886b9835dffcc138",
  "0x431c6762207a9c8d5784288a700305b0429a4d1b",
  "0x442d7cf553964259086d202d6cfd12d79916216e",
  "0x45ee3583d6c9d5218b24e763fe374a2f73157f78",
  "0x47bafc7a03ef4dee17bf68e4aa22465926bc0de7",
  "0x48d2f9a3c42b859131f9397182e78b53ca536891",
  "0x498b49e51aae848b1ff7b1f1c56330c5241d8f85",
  "0x4df84495c76a63cb39d7ee36b720e11dc51e01c0",
  "0x524D6dbc5cCb7D5fdFC9a9494694aD34a1418Cb0",
  "0x532e31f49828dda5009da88609e4527c2c7d0db8",
  "0x53a6b35866c3f1e30c3801affb1918b231d0c058",
  "0x56e4b4853beca325f0b8f20d722215ae5a51ad6e",
  "0x57be8c5f7520f16ef4a355839e36471e079e0d51",
  "0x60d1773134de81a85b12ace0dcc9d293a9b450db",
  "0x623c0de9e6babae987712455e6b95a38a42b5e54",
  "0x6886667cb2afd0bc0a3a99c20e950ae50f034286",
  "0x70eddc502cb72affcdd064edf0c8c3e731988cfe",
  "0x7215b80fba9c774d629aa930baef35e562e0cd57",
  "0x788ce706c372e23919fdaff24fba7d421a57ab1b",
  "0x7b71d4e1dda649c6b70f46b74ad974e0b2777a9e",
  "0x7cdcdbeb84e977dcb14a5db3c3820bf643bcee90",
  "0x7d26513b44e0d864eae3e810bae64f80c22849f5",
  "0x7d452fe820b7a7b5ab845344962770119439bb18",
  "0x7f1407b5e0e1ad2d5d5ccc515ebd83d89cf1833d",
  "0x8a86af6e0e92f2a4398bbd41b3ae0141524c15c2",
  "0x8edfcb711fdb02f495a22a7356b22b5e3b9ffc26",
  "0x92A3a7250057d32b04Cb5feef64a00AA82e1ef09",
  "0x9a256d39a505f65f7c4af22341b48152ae1f3526",
  "0x9d22630fac26088ac4328dbb6f3f72387c1eb6b4",  
  "0xa67be4f7cd5defabc6aaf08a9b6ac161244700f9",
  "0xa94f8a7c21d9a7422804fff4d912feb695035ae4",
  "0xaa1384a6a5d8c570c35743a405ec795f94c9b1bd",
  "0xac69bb3f156f59c2761a420c8c2129c63dddf053",
  "0xaca257c8984b5ee99761dc3e1b705c9735ea4d5e",
  "0xb1c6a0ff4381a52ed1d4bf2867c8f52d09dc1e03",
  "0xb57b0087426ad6b7059749f84e838f7dcfdd665e",
  "0xBd2DE0998d83d5819f9bbb328F2C7b08E6F44D6E",
  "0xbd6e10718388eacfc8312dd585b480ac73f1b27a",
  "0xc4797b204d6acc6bc9c9e19dfb403cf473d5d41a",
  "0xc4b46e4304f22f2aa10f376b70a1ea817ad3ac76",
  "0xc7bf3253623bc66adaead6303900d635b3dbb42f",
  "0xcdc5f3a1659352a5ea4ea5837406cf9ec63a6b75",
  "0xd2b98a1e24e9b95561a5ef03864a65722862d3eb",
  "0xd3f769a212b075b7beca4c88ca16ab151c861186",
  "0xd6005a4dfeafdc2932a161dd151d8962b3c5cf8d",
  "0xe038f02529a8a4f010b0d4065fc6d541949c8665",
  "0xe6b06cf6f3a9027abdc1dcd97a2c562856b2ef99",
  "0xe8b2e603c88893a391bd8af3a70355005765e1da",
  "0xeb96b2f64bb52cc4b7c79373714b4f4a6c3dc037",
  "0xec1fec800e31d5d81a274b22ec2e62815b011f53",
  "0xef233ab240a3e45213954cadd25f64fec2dcd0c9",
  "0xf168e7d0ca8e03ab5140db5e22f2e7750a2922a9",
  "0xf4992520dcf9d06fcbe45723d5b8b14759006435",
  "0xf664478e9d345532d450293ddb86d1f5451c0597",
  "0xf7306b178261b46c4f54c0bee36539df266b2f24",
  "0xf89aefd0747d3860fdfda941322840cc9cc526f2",
  "0xfa7c485dc5f88a7031d5127182962f1a7dc1bcb7",
  "0xfb8960cbd9858f4477388f0c37c40073aabde28b",
  "0xfc42b9df0dd9c872d14bd3de1a194bd07ce6470d",
  "0xfd2550a94f81631b06d0e42cd8906ef5d90185a7"
];
