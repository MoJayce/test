// pages/goods_detail/goods_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: true,
    scy: false,
    setdid: "",
    set_id: "",
    isHideLoadMore:true,
    goodsLists: [],
    clothes: [{
        "id": "0",
        "type": "T恤",
        "clothesId": "010001",
        "src": "http://sujiefs.com/upload/images/20180423/201804231129454571221_thumbnail.jpg",
        "title": "新款韩版印花字母短款T恤衫 T18C076",
        "price": "63",
        "oldPrice": "￥119",
        "sales": 6
      },
      {
        "id": "1",
        "type": "T恤",
        "clothesId": "010002",
        "src": "http://sujiefs.com/upload/images/20180420/201804201408181830759_thumbnail.jpg",
        "title": "印花圆领短袖纯棉T恤 T18C073",
        "price": "79",
        "oldPrice": "￥199",
        "sales": 26
      },
      {
        "id": "2",
        "type": "T恤",
        "clothesId": "010003",
        "src": "http://sujiefs.com/upload/images/20170809/201708091350454814606_thumbnail.jpg",
        "title": "珠光亮粉色手缝玻璃钻系带T恤 SJ20170704-10",
        "price": "69",
        "oldPrice": "￥219",
        "sales": 408
      },
      {
        "id": "3",
        "type": "T恤",
        "clothesId": "010004",
        "src": "http://sujiefs.com/upload/images/20170801/201708011448260946254_thumbnail.jpg",
        "title": "印花圆领短袖纯棉T恤 T18C073",
        "price": "119",
        "oldPrice": "￥199",
        "sales": 34
      },
      {
        "id": "4",
        "type": "T恤",
        "clothesId": "010005",
        "src": "http://sujiefs.com/upload/images/20170805/201708051447338813719_thumbnail.jpg",
        "title": "印花圆领短袖纯棉T恤 T18C073",
        "price": "129",
        "oldPrice": "￥199",
        "sales": 23
      },
      {
        "id": "5",
        "type": "T恤",
        "clothesId": "010006",
        "src": "http://sujiefs.com/upload/images/20170805/201708051605397738139_thumbnail.jpg",
        "title": "印花圆领短袖纯棉T恤 T18C073",
        "price": "109",
        "oldPrice": "￥199",
        "sales": 99
      },
      {
        "id": "6",
        "type": "T恤",
        "clothesId": "010007",
        "src": "http://sujiefs.com/upload/images/20170805/201708051444070640100_thumbnail.jpg",
        "title": "荷叶袖印花雪纺衫 小清新短袖 DZ1704X3-6",
        "price": "49",
        "oldPrice": "￥169",
        "sales": 162
      },
      {
        "id": "7",
        "type": "T恤",
        "clothesId": "010008",
        "src": "http://sujiefs.com/upload/images/20170803/201708031515271229289_thumbnail.jpg",
        "title": "可爱短袖T恤软妹上衣学生系 SJ20170708-60",
        "price": "48",
        "oldPrice": "￥109",
        "sales": 29
      },
      {
        "id": "8",
        "type": "T恤",
        "clothesId": "010009",
        "src": "http://sujiefs.com/upload/images/20170808/201708081007439956178_thumbnail.jpg",
        "title": "韩版港味圆领纯色t恤夏学生宽松百搭显瘦 SJ20170707-44",
        "price": "54",
        "oldPrice": "￥76",
        "sales": 249
      },
      {
        "id": "9",
        "type": "T恤",
        "clothesId": "010010",
        "src": "http://sujiefs.com/upload/images/20170809/201708090947359768337_thumbnail.jpg",
        "title": "韩版无袖运动背心上衣宽松显瘦bf风恤 SJ20170706-42",
        "price": "54",
        "oldPrice": "￥76",
        "sales": 249
      },
      {
        "id": "0",
        "type": "风衣",
        "clothesId": "020001",
        "src": "http://sujiefs.com/upload/images/20170919/201709191759591221315_thumbnail.jpg",
        "title": "摩登经典纯色麂皮绒短款配腰带外套 J17D609",
        "price": "118",
        "oldPrice": "￥256",
        "sales": 18
      },
      {
        "id": "1",
        "type": "风衣",
        "clothesId": "020002",
        "src": "http://sujiefs.com/upload/images/20170829/201708291045463337111_thumbnail.jpg",
        "title": "韩版休闲时尚中长款风衣外套 J17D526",
        "price": "218",
        "oldPrice": "￥326",
        "sales": 11
      },
      {
        "id": "2",
        "type": "风衣",
        "clothesId": "020003",
        "src": "http://sujiefs.com/upload/images/20170829/201708291054515486977_thumbnail.jpg",
        "title": "韩版中长款双排扣风衣 J17D529",
        "price": "168",
        "oldPrice": "￥268",
        "sales": 121
      },
      {
        "id": "3",
        "type": "风衣",
        "clothesId": "020004",
        "src": "http://sujiefs.com/upload/images/20170802/201708020958015761909_thumbnail.jpg",
        "title": "韩版时尚百搭显瘦系带外套 SJ20170630-34",
        "price": "98",
        "oldPrice": "￥388",
        "sales": 623
      },
      {
        "id": "4",
        "type": "风衣",
        "clothesId": "020005",
        "src": "http://sujiefs.com/upload/images/20170828/201708281023212109508_thumbnail.jpg",
        "title": "2017新款秋装长款 收腰英伦风衣",
        "price": "148",
        "oldPrice": "￥399",
        "sales": 400
      },
      {
        "id": "5",
        "type": "风衣",
        "clothesId": "020006",
        "src": "http://sujiefs.com/upload/images/20170816/201708161111109798698_thumbnail.jpg",
        "title": "秋季新款休闲宽松薄款风衣长袖收腰系带 SJ20170810-31",
        "price": "118",
        "oldPrice": "￥258",
        "sales": 378
      },
      {
        "id": "6",
        "type": "风衣",
        "clothesId": "020007",
        "src": "http://sujiefs.com/upload/images/20170829/201708291011536395540_thumbnail.jpg",
        "title": "2018秋装新款 韩版宽松显瘦双排扣中长款风衣",
        "price": "259",
        "oldPrice": "￥459",
        "sales": 324
      },
      {
        "id": "6",
        "type": "风衣",
        "clothesId": "020008",
        "src": "http://sujiefs.com/upload/images/20171005/201710051008220363854_thumbnail.jpg",
        "title": "2017冬季新款第一期 中长款翻领系带收腰过膝风衣女装长袖双排扣大衣外套",
        "price": "135",
        "oldPrice": "￥359",
        "sales": 72
      },
      {
        "id": "0",
        "type": "连衣裙",
        "clothesId": "030001",
        "src": "http://sujiefs.com/upload/images/20180429/201804291236238898911_thumbnail.jpg",
        "title": "新款中长款条纹碎花雪纺印花裙子 T18C079",
        "price": "128",
        "oldPrice": "￥299",
        "sales": 7
      },
      {
        "id": "1",
        "type": "连衣裙",
        "clothesId": "030002",
        "src": " http://sujiefs.com/upload/images/20180420/201804201459280965974_thumbnail.jpg",
        "title": "韩版黑色高腰连衣裙 T18C074",
        "price": "142",
        "oldPrice": "￥476",
        "sales": 3
      },
      {
        "id": "2",
        "type": "连衣裙",
        "clothesId": "030003",
        "src": " http://sujiefs.com/upload/images/20180409/201804091518497385370_thumbnail.jpg",
        "title": "新款荷叶边七分袖印花雪纺连衣裙 T18C066",
        "price": "165",
        "oldPrice": "￥576",
        "sales": 3
      },
      {
        "id": "3",
        "type": "连衣裙",
        "clothesId": "030004",
        "src": " http://sujiefs.com/upload/images/20180330/201803301342297980285_thumbnail.jpg",
        "title": "时尚职业OL风条纹连衣裙",
        "price": "169",
        "oldPrice": "￥376",
        "sales": 25
      },
      {
        "id": "4",
        "type": "连衣裙",
        "clothesId": "030005",
        "src": " http://sujiefs.com/upload/images/20170801/201708011354279496740_thumbnail.jpg",
        "title": "气质显瘦夏季中长款女裙 SJ20170630-44",
        "price": "89",
        "oldPrice": "￥289",
        "sales": 541
      },
      {
        "id": "5",
        "type": "连衣裙",
        "clothesId": "030006",
        "src": " http://sujiefs.com/upload/images/20170810/201708101027451267268_thumbnail.jpg",
        "title": "欧美短袖上衣+印花吊带裙两件套连衣裙 SJ20170703-29",
        "price": "89",
        "oldPrice": "￥319",
        "sales": 223
      },
      {
        "id": "6",
        "type": "连衣裙",
        "clothesId": "030007",
        "src": "http://sujiefs.com/upload/images/20170803/201708031737238738195_thumbnail.jpg",
        "title": "2017夏款蝴蝶结条纹学院风连衣裙 SJ20170708-49",
        "price": "88",
        "oldPrice": "￥169",
        "sales": 235
      },
      {
        "id": "7",
        "type": "连衣裙",
        "clothesId": "030008",
        "src": " http://sujiefs.com/upload/images/20170818/201708181101026049075_thumbnail.jpg",
        "title": "新款露肩雪纺气质高腰显瘦荷叶摆裙子 SJ20170816-13",
        "price": "79",
        "oldPrice": "￥279",
        "sales": 155
      },
      {
        "id": "8",
        "type": "连衣裙",
        "clothesId": "030009",
        "src": " http://sujiefs.com/upload/images/20170807/201708071732395207176_thumbnail.jpg",
        "title": "碎花雪纺吊带两件套 中长款荷叶边a字裙 SJ20170707-27",
        "price": "84",
        "oldPrice": "￥199",
        "sales": 335
      },
      {
        "id": "9",
        "type": "连衣裙",
        "clothesId": "030010",
        "src": " http://sujiefs.com/upload/images/20170807/201708071607412295228_thumbnail.jpg",
        "title": "韩版拼接雪纺系带收腰显瘦A字裙 SJ20170707-20",
        "price": "94",
        "oldPrice": "￥169",
        "sales": 323
      },
      {
        "id": "0",
        "type": "半身裙",
        "clothesId": "040001",
        "src": " http://sujiefs.com/upload/images/20180323/201803231749268097293_thumbnail.jpg",
        "title": "2018时尚优雅蝴蝶结半身裙s18c021",
        "price": "89",
        "oldPrice": "￥189",
        "sales": 156
      },
      {
        "id": "1",
        "type": "半身裙",
        "clothesId": "040002",
        "src": " http://sujiefs.com/upload/images/20170804/201708041155075067054_thumbnail.jpg",
        "title": "小碎花甜美学院风百褶裙裤 SJ20170708-22",
        "price": "59",
        "oldPrice": "￥129",
        "sales": 288
      },
      {
        "id": "2",
        "type": "半身裙",
        "clothesId": "040003",
        "src": " http://sujiefs.com/upload/images/20170804/201708041436150033557_thumbnail.jpg",
        "title": "撩男神常备学院风甜美百褶短裙 SJ20170708-14",
        "price": "54",
        "oldPrice": "￥159",
        "sales": 330
      },
      {
        "id": "3",
        "type": "半身裙",
        "clothesId": "040004",
        "src": " http://sujiefs.com/upload/images/20170808/201708081456548406077_thumbnail.jpg",
        "title": "夏季新款黑色高腰波浪短裙 SJ20170706-17",
        "price": "49",
        "oldPrice": "￥149",
        "sales": 230
      },
      {
        "id": "4",
        "type": "半身裙",
        "clothesId": "040005",
        "src": " http://sujiefs.com/upload/images/20170805/201708051506364078977_thumbnail.jpg",
        "title": "玫瑰花刺绣网纱半身裙中长款 DZ1704X3-8",
        "price": "69",
        "oldPrice": "￥179",
        "sales": 336
      },
      {
        "id": "5",
        "type": "半身裙",
        "clothesId": "040006",
        "src": "http://sujiefs.com/upload/images/20170809/201708091853510196204_thumbnail.jpg",
        "title": "2017夏季新款韩版时尚不规则针织半身裙女中长款荷叶边高腰a字裙",
        "price": "55",
        "oldPrice": "￥179",
        "sales": 224
      },
      {
        "id": "6",
        "type": "半身裙",
        "clothesId": "040007",
        "src": "http://sujiefs.com/upload/images/20170809/201708091433506217152_thumbnail.jpg",
        "title": "2017新款韩版宽松高腰雪纺阔腿裤短裤女夏荷叶边百褶A字热裤薄款",
        "price": "￥33",
        "oldPrice": "109",
        "sales": 277
      },
      {
        "id": "7",
        "type": "半身裙",
        "clothesId": "040008",
        "src": "http://sujiefs.com/upload/images/20170807/201708071504383847783_thumbnail.jpg",
        "title": "优雅帅气风金属扣包臀裙 SJ20170707-7",
        "price": "54",
        "oldPrice": "￥269",
        "sales": 0
      }, {
        "id": "0",
        "type": "衬衫",
        "clothesId": "050001",
        "src": "http://sujiefs.com/upload/images/20180409/201804091542204218189_thumbnail.jpg",
        "title": "韩版碎花荷叶边雪纺衫套装 T18C068",
        "price": "109",
        "oldPrice": "￥269",
        "sales": 3
      },
      {
        "id": "1",
        "type": "衬衫",
        "clothesId": "050002",
        "src": "http://sujiefs.com/upload/images/20170818/201708181638133668093_thumbnail.jpg",
        "title": "欧根纱拼接蕾丝A字连衣裙 SJ20170816-23",
        "price": "106",
        "oldPrice": "￥229",
        "sales": 389
      },
      {
        "id": "2",
        "type": "衬衫",
        "clothesId": "050003",
        "src": "http://sujiefs.com/upload/images/20170909/201709091151013099373_thumbnail.jpg",
        "title": "韩版木耳边雪纺衬衫宽松显瘦 SJ20170816-43",
        "price": "89",
        "oldPrice": "￥169",
        "sales": 356
      },
      {
        "id": "3",
        "type": "衬衫",
        "clothesId": "050004",
        "src": "http://sujiefs.com/upload/images/20170829/201708290949450447314_thumbnail.jpg",
        "title": "镂空蕾丝上衣吊带两件套装 J17D521",
        "price": "98",
        "oldPrice": "￥199",
        "sales": 259
      },
      {
        "id": "4",
        "type": "衬衫",
        "clothesId": "050005",
        "src": "http://sujiefs.com/upload/images/20170808/201708081046457394378_thumbnail.jpg",
        "title": "2017夏季新款 气质小清新蝴蝶结雪纺衬衫上衣女学生短袖宽松雪纺衫",
        "price": "39",
        "oldPrice": "￥129",
        "sales": 255
      },
      {
        "id": "5",
        "type": "衬衫",
        "clothesId": "050006",
        "src": "http://sujiefs.com/upload/images/20170828/201708281922049487562_thumbnail.jpg",
        "title": "韩版灯笼袖长袖V领宽松衬衫 T17D508",
        "price": "79",
        "oldPrice": "￥149",
        "sales": 104
      },
      {
        "id": "6",
        "type": "衬衫",
        "clothesId": "050007",
        "src": "http://sujiefs.com/upload/images/20171023/201710231709022570046_thumbnail.jpg",
        "title": "新款宽松系带长袖衬衫 SJ20171017-8",
        "price": "96",
        "oldPrice": "￥259",
        "sales": 84
      },
      {
        "id": "7",
        "type": "衬衫",
        "clothesId": "050008",
        "src": "http://sujiefs.com/upload/images/20180317/201803171652200177094_thumbnail.jpg",
        "title": "2018女士韩版潮流简约条纹上衣T18C017",
        "price": "104",
        "oldPrice": "￥229",
        "sales": 29
      },
      {
        "id": "8",
        "type": "衬衫",
        "clothesId": "050009",
        "src": "http://sujiefs.com/upload/images/20180324/201803241019408187009_thumbnail.jpg",
        "title": "2018春夏时尚新款优雅上衣t18c0108",
        "price": "106",
        "oldPrice": "￥199",
        "sales": 76
      },
      {
        "id": "9",
        "type": "衬衫",
        "clothesId": "050010",
        "src": "http://sujiefs.com/upload/images/20170912/201709121148464374071_thumbnail.jpg",
        "title": "韩版灯笼袖雪纺衬衫 SJ20170816-51",
        "price": "86",
        "oldPrice": "￥169",
        "sales": 10
      },
      {
        "id": "0",
        "type": "时尚套装",
        "clothesId": "060001",
        "src": "http://sujiefs.com/upload/images/20180416/201804161442294368291_thumbnail.jpg",
        "title": "上衣+半身裙两件套装裙 T18C071",
        "price": "152",
        "oldPrice": "￥469",
        "sales": 3
      },
      {
        "id": "1",
        "type": "时尚套装",
        "clothesId": "060002",
        "src": "http://sujiefs.com/upload/images/20180317/201803171724467979428_thumbnail.jpg",
        "title": "2018女士优雅韩版气质套装T18C017",
        "price": "196",
        "oldPrice": "￥529",
        "sales": 93
      },
      {
        "id": "2",
        "type": "时尚套装",
        "clothesId": "060003",
        "src": "http://sujiefs.com/upload/images/20171003/201710031747451834466_thumbnail.jpg",
        "title": "气质休闲修身显瘦格子长袖西装外套 J17D619-19",
        "price": "109",
        "oldPrice": "￥269",
        "sales": 85
      },
      {
        "id": "3",
        "type": "时尚套装",
        "clothesId": "060004",
        "src": "http://sujiefs.com/upload/images/20170803/201708031654302053705_thumbnail.jpg",
        "title": "2017夏季新款女装钉珠镂空针织衫上衣+花边伞状半裙气质套装",
        "price": "98",
        "oldPrice": "￥299",
        "sales": 306
      },
      {
        "id": "4",
        "type": "时尚套装",
        "clothesId": "060005",
        "src": "http://sujiefs.com/upload/images/20170807/201708071449540727676_thumbnail.jpg",
        "title": "2018夏季新款女装小清新chic牛仔短裙两件套装裙时尚潮",
        "price": "79",
        "oldPrice": "￥179",
        "sales": 136
      },
      {
        "id": "5",
        "type": "时尚套装",
        "clothesId": "060006",
        "src": "http://sujiefs.com/upload/images/20170808/201708081043028083393_thumbnail.jpg",
        "title": "时尚套装女2018夏季新款短袖T恤+条纹高腰雪纺阔腿裤九分裤两件套",
        "price": "79",
        "oldPrice": "￥149",
        "sales": 104
      },
      {
        "id": "6",
        "type": "时尚套装",
        "clothesId": "060007",
        "src": "http://sujiefs.com/upload/images/20170803/201708031948556833137_thumbnail.jpg",
        "title": "2018夏新款女装重工绣花透视喇叭袖露肩上衣+网纱半身裙套装",
        "price": "76",
        "oldPrice": "￥159",
        "sales": 84
      },
      {
        "id": "7",
        "type": "时尚套装",
        "clothesId": "060008",
        "src": "http://sujiefs.com/upload/images/20170804/201708041557382837044_thumbnail.jpg",
        "title": "欧洲站高端大牌2018夏装新款 性感一字领吊带上衣半身裙两件套装裙",
        "price": "104",
        "oldPrice": "￥229",
        "sales": 329
      },
      {
        "id": "8",
        "type": "时尚套装",
        "clothesId": "060009",
        "src": "http://sujiefs.com/upload/images/20170802/201708021046262289931_thumbnail.jpg",
        "title": "夏季套装女时尚2018新款一字肩吊带荷叶边T恤高腰格子短裤两件套",
        "price": "106",
        "oldPrice": "￥199",
        "sales": 76
      },
      {
        "id": "9",
        "type": "时尚套装",
        "clothesId": "060010",
        "src": "http://sujiefs.com/upload/images/20170809/201708091622134063710_thumbnail.jpg",
        "title": "时尚套装女夏一字肩印花雪纺上衣+高腰显瘦短裤两件套潮",
        "price": "59",
        "oldPrice": "￥219",
        "sales": 210
      }, {
        "id": "0",
        "type": "背心吊带",
        "clothesId": "070001",
        "src": "http://sujiefs.com/upload/images/20170809/201708091903578636890_thumbnail.jpg",
        "title": "荷叶边漏肩吊带连衣裙 收腰显瘦抹胸 SJ20170703-17",
        "price": "69",
        "oldPrice": "￥238",
        "sales": 133
      },
      {
        "id": "1",
        "type": "背心吊带",
        "clothesId": "070002",
        "src": "http://sujiefs.com/upload/images/20170809/201708091616553324707_thumbnail.jpg",
        "title": "甜美舒适蓝白拼接V领吊带上衣 SJ20170703-9",
        "price": "54",
        "oldPrice": "￥159",
        "sales": 324
      },
      {
        "id": "2",
        "type": "背心吊带",
        "clothesId": "070003",
        "src": "http://sujiefs.com/upload/images/20170808/201708081947138286334_thumbnail.jpg",
        "title": "绑带一字领露肩吊带背心性感短款无袖 SJ20170706-38",
        "price": "49",
        "oldPrice": "￥169",
        "sales": 241
      },
      {
        "id": "3",
        "type": "背心吊带",
        "clothesId": "070004",
        "src": "http://sujiefs.com/upload/images/20170802/201708021143587732875_thumbnail.jpg",
        "title": "雪纺吊带背心碎花小清新性感 SJ20170630-21",
        "price": "59",
        "oldPrice": "￥99",
        "sales": 185
      },
      {
        "id": "4",
        "type": "背心吊带",
        "clothesId": "070005",
        "src": "http://sujiefs.com/upload/images/20170807/201708071748571671763_thumbnail.jpg",
        "title": "桑蚕丝斜纹绸 飘带系带 设计感吊带上衣 SJ20170707-31",
        "price": "79",
        "oldPrice": "￥179",
        "sales": 256
      },
      {
        "id": "5",
        "type": "背心吊带",
        "clothesId": "070006",
        "src": "http://sujiefs.com/upload/images/20170807/201708070936247856417_thumbnail.jpg",
        "title": "欧美夏秋季性感仿真丝蕾丝吊带 DZ1705X4-5",
        "price": "54",
        "oldPrice": "￥149",
        "sales": 1
      },
      {
        "id": "0",
        "type": "外套/毛呢外套",
        "clothesId": "080001",
        "src": "http://sujiefs.com/upload/images/20170829/201708291406512194899_thumbnail.jpg",
        "title": "韩版PU皮西装领皮衣短外套 J17D535",
        "price": "129",
        "oldPrice": "￥298",
        "sales": 200
      },
      {
        "id": "1",
        "type": "外套/毛呢外套",
        "clothesId": "080002",
        "src": "http://sujiefs.com/upload/images/20170829/201708291141171730835_thumbnail.jpg",
        "title": "欧美风短款上衣 复古麂皮长袖外套 J17D533",
        "price": "108",
        "oldPrice": "￥259",
        "sales": 0
      },
      {
        "id": "2",
        "type": "外套/毛呢外套",
        "clothesId": "080003",
        "src": "http://sujiefs.com/upload/images/20170828/201708281110486740636_thumbnail.jpg",
        "title": "五角星刺绣短款皮夹克外套 J17D515",
        "price": "129",
        "oldPrice": "￥319",
        "sales": 242
      },
      {
        "id": "3",
        "type": "外套/毛呢外套",
        "clothesId": "080004",
        "src": "http://sujiefs.com/upload/images/20170913/201709131858090069976_thumbnail.jpg",
        "title": "小清新立领刺绣棒球服女两面穿夹克衫 SJ20170911-1",
        "price": "109",
        "oldPrice": "￥299",
        "sales": 4
      },
      {
        "id": "4",
        "type": "外套/毛呢外套",
        "clothesId": "080005",
        "src": "http://sujiefs.com/upload/images/20171005/201710051129577624784_thumbnail.jpg",
        "title": "韩版时尚气质修身休闲长袖复古格子西装外套 J17D633-33",
        "price": "109",
        "oldPrice": "￥279",
        "sales": 25
      },
      {
        "id": "5",
        "type": "外套/毛呢外套",
        "clothesId": "080006",
        "src": "http://sujiefs.com/upload/images/20170829/201708291419041609450_thumbnail.jpg",
        "title": "韩版修身PU皮夹克皮外套 J17D536",
        "price": "118",
        "oldPrice": "￥249",
        "sales": 1
      },
      {
        "id": "6",
        "type": "外套/毛呢外套",
        "clothesId": "080007",
        "src": "http://sujiefs.com/upload/images/20170807/201708071512307136189_thumbnail.jpg",
        "title": "BF风个性韩版休闲短款飞行员小外套 SJ20170707-10",
        "price": "59",
        "oldPrice": "￥139",
        "sales": 0
      },
      {
        "id": "7",
        "type": "外套/毛呢外套",
        "clothesId": "080008",
        "src": "http://sujiefs.com/upload/images/20170809/201708091925423073840_thumbnail.jpg",
        "title": "韩版休闲宽松时尚翻领短外套 SJ20170703-20",
        "price": "54",
        "oldPrice": "￥139",
        "sales": 31
      },
      {
        "id": "8",
        "type": "外套/毛呢外套",
        "clothesId": "080009",
        "src": "http://sujiefs.com/upload/images/20170902/201709021520165269497_thumbnail.jpg",
        "title": "秋装气质英伦格子小西装套装百褶半身裙两件套 SJ20170810-12",
        "price": "98",
        "oldPrice": "￥299",
        "sales": 476
      },
      {
        "id": "9",
        "type": "外套/毛呢外套",
        "clothesId": "080010",
        "src": "http://sujiefs.com/upload/images/20170828/201708281101095363007_thumbnail.jpg",
        "title": "时尚洋气系带翻领长袖外套 J17D514",
        "price": "89",
        "oldPrice": "￥199",
        "sales": 310
      },
      {
        "id": "0",
        "type": "卫衣/绒衫",
        "clothesId": "090001",
        "src": "http://sujiefs.com/upload/images/20171005/201710051151060026852_thumbnail.jpg",
        "title": "金丝绒打底衫秋款长袖 J17D635-35",
        "price": "89",
        "oldPrice": "￥199",
        "sales": 83
      },
      {
        "id": "1",
        "type": "卫衣/绒衫",
        "clothesId": "090002",
        "src": "http://sujiefs.com/upload/images/20171003/201710031547273568746_thumbnail.jpg",
        "title": "高领绑带刺绣灯笼袖丝绒卫衣 J17D603-03",
        "price": "139",
        "oldPrice": "￥299",
        "sales": 76
      }, {
        "id": "0",
        "type": "短裤",
        "clothesId": "100001",
        "src": "http://sujiefs.com/upload/images/20170807/201708071122556625247_thumbnail.jpg",
        "title": "2017新款 雪纺裙裤百褶短裤假两件高腰百褶女 p61001",
        "price": "54",
        "oldPrice": "￥198",
        "sales": 204
      },
      {
        "id": "1",
        "type": "短裤",
        "clothesId": "100002",
        "src": "http://sujiefs.com/upload/images/20180409/201804091510474645198_thumbnail.jpg",
        "title": "新款格纹西装短裤 T18C063",
        "price": "131",
        "oldPrice": "￥359",
        "sales": 6
      },
      {
        "id": "2",
        "type": "短裤",
        "clothesId": "100003",
        "src": "http://sujiefs.com/upload/images/20170807/201708071010425721925_thumbnail.jpg",
        "title": "全棉纽扣多色休闲短裤热裤 p60708",
        "price": "59",
        "oldPrice": "￥129",
        "sales": 315
      },
      {
        "id": "3",
        "type": "短裤",
        "clothesId": "100004",
        "src": "http://sujiefs.com/upload/images/20170807/201708071024173706446_thumbnail.jpg",
        "title": "低腰韩版显瘦松紧腰条纹百搭热裤 P60713",
        "price": "54",
        "oldPrice": "￥149",
        "sales": 233
      },
      {
        "id": "4",
        "type": "短裤",
        "clothesId": "100005",
        "src": "http://sujiefs.com/upload/images/20170805/201708051437069683761_thumbnail.jpg",
        "title": "2017年夏季新款短裙 DZ1704X3-3",
        "price": "56",
        "oldPrice": "￥179",
        "sales": 252
      },
      {
        "id": "5",
        "type": "短裤",
        "clothesId": "100006",
        "src": "http://sujiefs.com/upload/images/20170809/201708090959381050637_thumbnail.jpg",
        "title": "百搭拼接设计丝麻休闲阔腿裤 SJ20170706-43",
        "price": "48",
        "oldPrice": "￥149",
        "sales": 411
      },
      {
        "id": "6",
        "type": "短裤",
        "clothesId": "100007",
        "src": "http://sujiefs.com/upload/images/20170802/201708021107135157067_thumbnail.jpg",
        "title": "高腰短裤显瘦修身阔腿热裤 SJ20170630-24",
        "price": "59",
        "oldPrice": "￥159",
        "sales": 231
      },
      {
        "id": "7",
        "type": "短裤",
        "clothesId": "100008",
        "src": "http://sujiefs.com/upload/images/20170805/201708050935201552424_thumbnail.jpg",
        "title": "雪纺a型短裤防走光假两件高腰裙裤 DZ1703X1-3",
        "price": "59",
        "oldPrice": "￥139",
        "sales": 31
      },
      {
        "id": "8",
        "type": "短裤",
        "clothesId": "100009",
        "src": "http://sujiefs.com/upload/images/20170807/201708071054071570233_thumbnail.jpg",
        "title": "2017年新款女装时尚欧美竖条纹短裤休闲修身条纹 p60716",
        "price": "58",
        "oldPrice": "￥129",
        "sales": 226
      },
      {
        "id": "9",
        "type": "短裤",
        "clothesId": "100010",
        "src": "http://sujiefs.com/upload/images/20170807/201708071028332752862_thumbnail.jpg",
        "title": "休闲短裤宽松低腰热裤 P60714",
        "price": "89",
        "oldPrice": "￥199",
        "sales": 74
      }, {
        "id": "0",
        "type": "九分裤",
        "clothesId": "110001",
        "src": "http://sujiefs.com/upload/images/20180409/201804091536197431408_thumbnail.jpg",
        "title": "夏季新款条纹九分休闲裤 T18C057",
        "price": "54",
        "oldPrice": "￥198",
        "sales": 204
      },
      {
        "id": "1",
        "type": "九分裤",
        "clothesId": "110002",
        "src": "http://sujiefs.com/upload/images/20170801/201708011459360348850_thumbnail.jpg",
        "title": "2017夏季吊带连体裤雪纺阔腿九分裤 SJ20170630-40",
        "price": "58",
        "oldPrice": "￥119",
        "sales": 416
      },
      {
        "id": "2",
        "type": "九分裤",
        "clothesId": "110003",
        "src": "http://sujiefs.com/upload/images/20170817/201708171842181698999_thumbnail.jpg",
        "title": "复古高腰修身显瘦黑色微喇叭裤九分裤破洞 SJ20170816-6",
        "price": "59",
        "oldPrice": "￥129",
        "sales": 10
      },
      {
        "id": "3",
        "type": "九分裤",
        "clothesId": "110004",
        "src": "http://sujiefs.com/upload/images/20170809/201708091424542707679_thumbnail.jpg",
        "title": "韩版宽松高腰显瘦雪纺阔腿裤九分裤 SJ20170704-15",
        "price": "136",
        "oldPrice": "￥349",
        "sales": 33
      },
      {
        "id": "4",
        "type": "九分裤",
        "clothesId": "110005",
        "src": "http://sujiefs.com/upload/images/20170817/201708171037235861039_thumbnail.jpg",
        "title": "韩版宽松收腰系带荷叶边百搭高腰九分裤 SJ20170816-1",
        "price": "68",
        "oldPrice": "￥279",
        "sales": 252
      },
      {
        "id": "5",
        "type": "九分裤",
        "clothesId": "110006",
        "src": "http://sujiefs.com/upload/images/20170817/201708171734040306646_thumbnail.jpg",
        "title": "宽松雪纺喇叭裤九分裤高腰花苞哈伦裤 SJ20170816-4",
        "price": "55",
        "oldPrice": "￥149",
        "sales": 11
      },
      {
        "id": "0",
        "type": "休闲裤",
        "clothesId": "120001",
        "src": "http://sujiefs.com/upload/images/20170828/201708281552579575313_thumbnail.jpg",
        "title": "宽松阔腿裤西装休闲长裤 P17D512",
        "price": "128",
        "oldPrice": "￥198",
        "sales": 41
      },
      {
        "id": "1",
        "type": "休闲裤",
        "clothesId": "120002",
        "src": "http://sujiefs.com/upload/images/20170828/201708281713095420566_thumbnail.jpg",
        "title": "时髦风衣设计感连体裤 S17D503",
        "price": "158",
        "oldPrice": "￥319",
        "sales": 33
      },
      {
        "id": "2",
        "type": "休闲裤",
        "clothesId": "120003",
        "src": "http://sujiefs.com/upload/images/20171005/201710051343391089555_thumbnail.jpg",
        "title": "纯色高腰休闲长裤收腰直筒裤 P17D604-04",
        "price": "79",
        "oldPrice": "￥195",
        "sales": 81
      },
      {
        "id": "3",
        "type": "休闲裤",
        "clothesId": "120004",
        "src": "http://sujiefs.com/upload/images/20171005/201710051425394606742_thumbnail.jpg",
        "title": "千鸟格裤子韩版百搭高腰开叉休闲裤P17D640-40",
        "price": "68",
        "oldPrice": "￥149",
        "sales": 33
      },
      {
        "id": "4",
        "type": "休闲裤",
        "clothesId": "120005",
        "src": "http://sujiefs.com/upload/images/20170803/201708031711514788823_thumbnail.jpg",
        "title": "不定位印花荷叶边条纹漏肩吊带阔腿短裤 SJ20170708-54",
        "price": "78",
        "oldPrice": "￥229",
        "sales": 212
      },
      {
        "id": "5",
        "type": "休闲裤",
        "clothesId": "120006",
        "src": "http://sujiefs.com/upload/images/20170807/201708071640005621368_thumbnail.jpg",
        "title": "韩版雪纺连体裤女V领喇叭袖 SJ20170707-25",
        "price": "54",
        "oldPrice": "￥129",
        "sales": 0
      },
      {
        "id": "6",
        "type": "休闲裤",
        "clothesId": "120007",
        "src": "http://sujiefs.com/upload/images/20170920/201709202000396410033_thumbnail.jpg",
        "title": "高腰纯色圆扣休闲裤背带裤阔腿裤 P17D625",
        "price": "69",
        "oldPrice": "￥189",
        "sales": 86
      },
      {
        "id": "7",
        "type": "休闲裤",
        "clothesId": "120008",
        "src": "http://sujiefs.com/upload/images/20170920/201709201529010278428_thumbnail.jpg",
        "title": "2018新款大码宽松休闲裤直筒下开叉喇叭裤 P17D620",
        "price": "89",
        "oldPrice": "￥239",
        "sales": 131
      },
      {
        "id": "8",
        "type": "休闲裤",
        "clothesId": "120009",
        "src": "http://sujiefs.com/upload/images/20170920/201709201108066131656_thumbnail.jpg",
        "title": "高腰阔腿裤韩版休闲裤百搭宽松长裤 P17D605",
        "price": "78",
        "oldPrice": "￥196",
        "sales": 226
      },
      {
        "id": "9",
        "type": "休闲裤",
        "clothesId": "120010",
        "src": "http://sujiefs.com/upload/images/20170808/201708081939075244160_thumbnail.jpg",
        "title": "chic一字领露肩高腰连体裤显瘦气质 SJ20170706-37",
        "price": "58",
        "oldPrice": "￥259",
        "sales": 274
      },
      {
        "id": "0",
        "type": "阔腿裤",
        "clothesId": "130001",
        "src": "http://sujiefs.com/upload/images/20180409/201804091501011256945_thumbnail.jpg",
        "title": "新款精细刺绣七分连体阔腿裤女 T18C065",
        "price": "218",
        "oldPrice": "￥498",
        "sales": 2
      },
      {
        "id": "1",
        "type": "阔腿裤",
        "clothesId": "130002",
        "src": "http://sujiefs.com/upload/images/20180317/201803171709237410478_thumbnail.jpg",
        "title": "2018女士时尚百搭阔腿裤T18C017",
        "price": "98",
        "oldPrice": "￥149",
        "sales": 83
      },
      {
        "id": "2",
        "type": "阔腿裤",
        "clothesId": "130003",
        "src": "http://sujiefs.com/upload/images/20171130/201711301159133344196_thumbnail.jpg",
        "title": "含棉条绒阔腿休闲裤女 P17D835",
        "price": "99",
        "oldPrice": "￥295",
        "sales": 1
      },
      {
        "id": "3",
        "type": "阔腿裤",
        "clothesId": "130004",
        "src": "http://sujiefs.com/upload/images/20170809/201708091720069724627_thumbnail.jpg",
        "title": "韩版宽松V领喇叭袖刺绣白色雪纺连体裤 SJ20170703-13",
        "price": "68",
        "oldPrice": "￥249",
        "sales": 343
      },
      {
        "id": "4",
        "type": "阔腿裤",
        "clothesId": "130005",
        "src": "http://sujiefs.com/upload/images/20170807/201708071120031609933_thumbnail.jpg",
        "title": "雪纺开叉阔腿裤黑色高腰喇叭裤 p61703",
        "price": "78",
        "oldPrice": "￥129",
        "sales": 212
      },
      {
        "id": "5",
        "type": "阔腿裤",
        "clothesId": "130006",
        "src": "http://sujiefs.com/upload/images/20170807/201708071036045240444_thumbnail.jpg",
        "title": "大码微喇女裤甩裤阔脚裤 P60715",
        "price": "69",
        "oldPrice": "￥159",
        "sales": 410
      },
      {
        "id": "6",
        "type": "阔腿裤",
        "clothesId": "130007",
        "src": "http://sujiefs.com/upload/images/20170807/201708071021250195748_thumbnail.jpg",
        "title": "韩版时尚显瘦系带薄款喇叭休闲长裤 P60712",
        "price": "69",
        "oldPrice": "￥139",
        "sales": 236
      },
      {
        "id": "7",
        "type": "阔腿裤",
        "clothesId": "130008",
        "src": "http://sujiefs.com/upload/images/20170807/201708070945576220420_thumbnail.jpg",
        "title": "大红色高腰显瘦毛边微喇大码阔腿休闲裤 p60705",
        "price": "89",
        "oldPrice": "￥239",
        "sales": 531
      },
      {
        "id": "0",
        "type": "小脚裤",
        "clothesId": "140001",
        "src": "http://sujiefs.com/upload/images/20170807/201708071352560393340_thumbnail.jpg",
        "title": "2018夏季新款 休闲束脚裤 修身显瘦百搭印花 P60523a",
        "price": "49",
        "oldPrice": "￥139",
        "sales": 331
      }, {
        "id": "1",
        "type": "小脚裤",
        "clothesId": "140002",
        "src": "http://sujiefs.com/upload/images/20170807/201708071403123333420_thumbnail.jpg",
        "title": "夏季修身印花欧美潮流全棉外穿小脚裤 p60523B",
        "price": "49",
        "oldPrice": "￥165",
        "sales": 231
      }
    ],
    Tshrit: [{
        "id": "10",
        "type": "T恤",
        "clothesId": "010011",
        "src": "http://sujiefs.com/upload/images/20180423/201804231129454571221_thumbnail.jpg",
        "title": "新款韩版印花字母短款T恤衫 T18C075",
        "price": "83",
        "oldPrice": "￥129",
        "sales": 36
      },
      {
        "id": "11",
        "type": "T恤",
        "clothesId": "010012",
        "src": "http://sujiefs.com/upload/images/20180420/201804201408181830759_thumbnail.jpg",
        "title": "印花圆领短袖纯棉T恤 T18C075",
        "price": "99",
        "oldPrice": "￥219",
        "sales": 46
      },
      {
        "id": "12",
        "type": "T恤",
        "clothesId": "010013",
        "src": "http://sujiefs.com/upload/images/20170809/201708091350454814606_thumbnail.jpg",
        "title": "珠光亮粉色手缝玻璃钻系带T恤 SJ20170704-10",
        "price": "99",
        "oldPrice": "￥159",
        "sales": 78
      },
      {
        "id": "13",
        "type": "T恤",
        "clothesId": "010014",
        "src": "http://sujiefs.com/upload/images/20170801/201708011448260946254_thumbnail.jpg",
        "title": "印花圆领短袖纯棉T恤 T18C071",
        "price": "89",
        "oldPrice": "￥139",
        "sales": 44
      },
      {
        "id": "14",
        "type": "T恤",
        "clothesId": "010015",
        "src": "http://sujiefs.com/upload/images/20170805/201708051447338813719_thumbnail.jpg",
        "title": "印花圆领短袖纯棉T恤 T18C073",
        "price": "69",
        "oldPrice": "￥129",
        "sales": 13
      },
      {
        "id": "15",
        "type": "T恤",
        "clothesId": "010016",
        "src": "http://sujiefs.com/upload/images/20170805/201708051605397738139_thumbnail.jpg",
        "title": "印花圆领短袖纯棉T恤 T18C073",
        "price": "99",
        "oldPrice": "￥169",
        "sales": 69
      },
      {
        "id": "16",
        "type": "T恤",
        "clothesId": "010017",
        "src": "http://sujiefs.com/upload/images/20170805/201708051444070640100_thumbnail.jpg",
        "title": "荷叶袖印花雪纺衫 小清新短袖 DZ1704X3-6",
        "price": "69",
        "oldPrice": "￥149",
        "sales": 122
      },
      {
        "id": "17",
        "type": "T恤",
        "clothesId": "010018",
        "src": "http://sujiefs.com/upload/images/20170803/201708031515271229289_thumbnail.jpg",
        "title": "可爱短袖T恤软妹上衣学生系 SJ20170708-60",
        "price": "89",
        "oldPrice": "￥179",
        "sales": 129
      },
      {
        "id": "18",
        "type": "T恤",
        "clothesId": "010019",
        "src": "http://sujiefs.com/upload/images/20170808/201708081007439956178_thumbnail.jpg",
        "title": "韩版港味圆领纯色t恤夏学生宽松百搭显瘦 SJ20170707-44",
        "price": "84",
        "oldPrice": "￥176",
        "sales": 29
      }

    ],
    coat: [{
        "id": "0",
        "type": "风衣",
        "clothesId": "020001",
        "src": "http://sujiefs.com/upload/images/20170919/201709191759591221315_thumbnail.jpg",
        "title": "摩登经典纯色麂皮绒短款配腰带外套 J17D609",
        "price": "118",
        "oldPrice": "￥256",
        "sales": 18
      },
      {
        "id": "1",
        "type": "风衣",
        "clothesId": "020002",
        "src": "http://sujiefs.com/upload/images/20170829/201708291045463337111_thumbnail.jpg",
        "title": "韩版休闲时尚中长款风衣外套 J17D526",
        "price": "198",
        "oldPrice": "￥326",
        "sales": 11
      },
      {
        "id": "2",
        "type": "风衣",
        "clothesId": "020003",
        "src": "http://sujiefs.com/upload/images/20170829/201708291054515486977_thumbnail.jpg",
        "title": "韩版中长款双排扣风衣 J17D529",
        "price": "168",
        "oldPrice": "￥268",
        "sales": 121
      },
      {
        "id": "3",
        "type": "风衣",
        "clothesId": "020004",
        "src": "http://sujiefs.com/upload/images/20170802/201708020958015761909_thumbnail.jpg",
        "title": "韩版时尚百搭显瘦系带外套 SJ20170630-34",
        "price": "98",
        "oldPrice": "￥388",
        "sales": 623
      },
      {
        "id": "4",
        "type": "风衣",
        "clothesId": "020005",
        "src": "http://sujiefs.com/upload/images/20170828/201708281023212109508_thumbnail.jpg",
        "title": "2017新款秋装长款 收腰英伦风衣",
        "price": "168",
        "oldPrice": "￥399",
        "sales": 400
      },
      {
        "id": "5",
        "type": "风衣",
        "clothesId": "020006",
        "src": "http://sujiefs.com/upload/images/20170816/201708161111109798698_thumbnail.jpg",
        "title": "秋季新款休闲宽松薄款风衣长袖收腰系带 SJ20170810-31",
        "price": "118",
        "oldPrice": "￥258",
        "sales": 378
      },
      {
        "id": "6",
        "type": "风衣",
        "clothesId": "020007",
        "src": "http://sujiefs.com/upload/images/20170829/201708291011536395540_thumbnail.jpg",
        "title": "2018秋装新款 韩版宽松显瘦双排扣中长款风衣",
        "price": "189",
        "oldPrice": "￥459",
        "sales": 324
      },
      {
        "id": "6",
        "type": "风衣",
        "clothesId": "020008",
        "src": "http://sujiefs.com/upload/images/20171005/201710051008220363854_thumbnail.jpg",
        "title": "2017冬季新款第一期 中长款翻领系带收腰过膝风衣女装长袖双排扣大衣外套",
        "price": "135",
        "oldPrice": "￥359",
        "sales": 72
      }
    ],
    Tshrit_price: [
        { "price": 50 },
        { "price": 100 },
        { "price": 101 }
      ],
    coat_price: [
        { "price": 100 },
        { "price": 150 },
        { "price": 200 }
      ],
    set_price:[],
    desc: true,
    asc: true,
    zonghe: true,
    xiaoliang: true,
    jiage: true,
    shaixuan: false,
    mername: "",
    resets:true,
    sure:true,
  },
  // 综合
  zonghe: function() {
    var that = this
    // 导航栏切换判断最原始方法，需要优化
    if (that.data.zonghe == true) {
      that.setData({
        zonghe: (!that.data.zonghe),
        desc: true,
        asc: true,
      });
    }
    if (that.data.jiage == false) {
      that.setData({
        jiage: (!that.data.jiage)
      });
    }
    if (that.data.xiaoliang == false) {
      that.setData({
        xiaoliang: (!that.data.xiaoliang)
      });
    }
    if (that.data.shaixuan == false) {
      that.setData({
        shaixuan: (!that.data.shaixuan)
      });
    }

    var goodsLists = []
    // 进入列表
    for (var i = 0; i < that.data.clothes.length; i++) {
      if (that.data.mername == that.data.clothes[i].type) {
        // console.log(that.data.clothes[i].type)
        goodsLists.push(that.data.clothes[i])
      }
    }
    that.setData({
      goodsLists: goodsLists, //还需赋值
    });
  },
  // 价格筛选
  select_price: function() {
    var that = this
    // 导航栏切换判断最原始方法，需要优化
    if (that.data.jiage == true) {
      that.setData({
        jiage: (!that.data.jiage)
      });
    }
    if (that.data.zonghe == false) {
      that.setData({
        zonghe: (!that.data.zonghe)
      });
    }
    if (that.data.xiaoliang == false) {
      that.setData({
        xiaoliang: (!that.data.xiaoliang)
      });
    }
    if (that.data.shaixuan == false) {
      that.setData({
        shaixuan: (!that.data.shaixuan)
      });
    }
    // 三角样式
    if (that.data.desc == true) {
      that.setData({
        desc: (!that.data.desc),
        asc: (that.data.asc)
      });
      if (that.data.asc == false) {
        that.setData({
          desc: (that.data.desc),
          asc: (!that.data.asc)
        });
      }
      // 排序
      for (var i = 0; i < that.data.goodsLists.length; i++) {
        for (var j = i + 1; j < that.data.goodsLists.length; j++) {
          if (parseInt(that.data.goodsLists[i].price) < parseInt(that.data.goodsLists[j].price)) {
            var tmp = that.data.goodsLists[j];
            that.data.goodsLists[j] = that.data.goodsLists[i];
            that.data.goodsLists[i] = tmp;
          }
        }
      }
    } else if (that.data.desc == false) {
      that.setData({
        asc: (!that.data.asc),
        desc: (!that.data.desc)
      });
      for (var i = 0; i < that.data.goodsLists.length; i++) {
        for (var j = i + 1; j < that.data.goodsLists.length; j++) {
          // var lageNum = parseInt(that.data.goodsLists[i].price);
          // console.log(lageNum)
          if (parseInt(that.data.goodsLists[i].price) > parseInt(that.data.goodsLists[j].price)) {
            var tmp = that.data.goodsLists[j];
            that.data.goodsLists[j] = that.data.goodsLists[i];
            that.data.goodsLists[i] = tmp;
          }
        }
      }
    }

    that.setData({
      goodsLists: that.data.goodsLists, //赋值
    });
  },
  // 筛选开关
  tap_ch: function(e) {
    var that = this
    console.log(that.data.set_price)
    console.log(that.data.mername)
    if (that.data.mername == "T恤"){
      console.log(that.data.Tshrit_price)
        that.setData({
          set_price: that.data.Tshrit_price
        })
    }else{
      // console.log("不是T恤")
    }
    if (that.data.mername == "风衣") {
      console.log(that.data.coat_price)
      that.setData({
        set_price: that.data.coat_price
      })
    } else {
      // console.log("不是风衣")
    }
    if (this.data.open) {
      this.setData({
        open: false,
        scy: true
      });
    } else {
      this.setData({
        open: true,
        scy: false
      });
    }
    // 导航栏切换判断最原始方法，需要优化
    if (that.data.xiaoliang == false) {
      that.setData({
        xiaoliang: (!that.data.xiaoliang)
      });
    }
    if (that.data.shaixuan == true) {
      that.setData({
        shaixuan: (!that.data.shaixuan),
        desc: true,
        asc: true,
      });
    }
    if (that.data.jiage == false) {
      that.setData({
        jiage: (!that.data.jiage)
      });
    }
    if (that.data.zonghe == false) {
      that.setData({
        zonghe: (!that.data.zonghe)
      });
    }
  },
  // 销量排序
  sales_select: function() {
    var that = this
    // 导航栏切换判断最原始方法，需要优化
    if (that.data.xiaoliang == true) {
      that.setData({
        xiaoliang: (!that.data.xiaoliang),
        desc: true,
        asc: true,
      });
    }
    if (that.data.shaixuan == false) {
      that.setData({
        shaixuan: (!that.data.shaixuan)
      });
    }
    if (that.data.jiage == false) {
      that.setData({
        jiage: (!that.data.jiage)
      });
    }
    if (that.data.zonghe == false) {
      that.setData({
        zonghe: (!that.data.zonghe)
      });
    }
    // 排序方法
    for (var i = 0; i < that.data.goodsLists.length; i++) {
      for (var j = i + 1; j < that.data.goodsLists.length; j++) {
        if (that.data.goodsLists[i].sales < that.data.goodsLists[j].sales) {
          var tmp = that.data.goodsLists[j];
          that.data.goodsLists[j] = that.data.goodsLists[i];
          that.data.goodsLists[i] = tmp;
        }
      }
    }
    that.setData({
      goodsLists: that.data.goodsLists, //赋值
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      mername: options.type //options为页面路由过程中传递的参数
    })
    wx.setNavigationBarTitle({
      title: that.data.mername //页面标题为路由参数
    })
    var goodsLists = []
    // 进入列表
    for (var i = 0; i < that.data.clothes.length; i++) {
      if (that.data.mername == that.data.clothes[i].type) {
        // console.log(that.data.clothes[i].type)
        goodsLists.push(that.data.clothes[i])
      }
    }
    that.setData({
      goodsLists: goodsLists, //还需赋值
    });
  },
  toDetail: function(e) {
    // console.log(e)
    let name = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '../goods_detail/goods_detail?name=' + name,
    })
  },
  // 点击筛选
  selected:function(){
    var that = this
    if (that.data.mername == that.data.goodsLists[0].type) {
      var p1 = that.data.set_price[0].price
      var p2 = that.data.set_price[1].price
      var p3 = that.data.set_price[2].price
    }
  // 需要重新获取数据，不然每次筛选的对象都不一样，就会出现空值
    var goodsList = []
    for (var i = 0; i < that.data.clothes.length; i++) {
      if (that.data.mername == that.data.clothes[i].type) {
        goodsList.push(that.data.clothes[i])
      }
    }
    if (that.data.setdid == p1) {
      var lists = goodsList
      var goods = lists.filter(
        function (lists) {
          return lists.price < p1
        }
      )
      console.log(goods)
      if (goods == "") {
        wx.showToast({
          title: '客官，小店只有这么几件了~',
          icon: "none"
        })
      } else {
        that.setData({
          goodsLists: goods
        })
      }
    }
    if (that.data.setdid == p2) {
      var lists = goodsList
      var goods = lists.filter(
        function (lists) {
          return lists.price >= p1 && lists.price < p2
        }
      )
      console.log(goods)
      if (goods == "") {
        wx.showToast({
          title: '客官，小店只有这么几件了~',
          icon: "none"
        })
      } else {
        that.setData({
          goodsLists: goods
        })
      }
    }
    if (that.data.setdid == p3) {
      var lists = goodsList
      var goods = lists.filter(
        function (lists) {
          return lists.price >= p3
        }
      )
      console.log(goods)
      if (goods == "") {
        wx.showToast({
          title: '客官，小店只有这么几件了~',
          icon: "none"
        })
      } else {
        that.setData({
          goodsLists: goods
        })
      }
    }
  },
  setd1: function(e) {
    var that = this
    // console.log(e.target.dataset.id)
    that.setData({
      setdid: e.target.dataset.id
    })
    that.selected()
  },
  qued: function() {
    var that = this
    // 筛选数据
    that.setData({
      open: true,
      isHideLoadMore: false,
      scy: false,
    })
  },
  reset: function() {
    var that = this
    that.setData({
      setdid: "",
    })
    that.zonghe()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('--------下拉刷新-------')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this
    console.log("加载更多")
    that.selected()
    if (that.data.goodsLists.length >= 19){
      that.setData({
        isHideLoadMore: false,
      })
        return
    }else{
      setTimeout(() => {
        that.setData({
          isHideLoadMore: true,
        })
        var goodsList = []
        if (that.data.mername == that.data.Tshrit[0].type) {
          goodsList.push(that.data.Tshrit)
          var newlist = goodsList[0]
          console.log(newlist)
          that.setData({
            goodsLists: that.data.goodsLists.concat(newlist)
          })
        }
        if (that.data.mername == that.data.coat[0].type) {
          goodsList.push(that.data.coat)
          var newlist = goodsList[0]
          console.log(newlist)
          that.setData({
            goodsLists: that.data.goodsLists.concat(newlist)
          })
        }
      }, 1000)
    }
  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})