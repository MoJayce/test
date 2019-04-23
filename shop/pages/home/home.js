// var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  data: {
    // toView: "green",
    currentSwiper: 0,
    vertical: false,
    interval: 3000,
    duration: 1000,
    autoplay:true,
    hidden1: false,
    ceshi:[],
    adList:[
      { "picUrl": "http://sujiefs.com/upload/images/20170803/201708031414271847695.jpg" },
      { "picUrl": "http://sujiefs.com/upload/images/20180330/201803301345002109997.jpg" },
      // { "picUrl": "http://sujiefs.com/upload/images/20170807/201708071735279048821.jpg" },
      { "picUrl": "http://sujiefs.com/upload/images/20170921/201709211830147406748.jpg" },
      { "picUrl": "http://sujiefs.com/upload/images/20170809/201708091419066522445.jpg" },
      { "picUrl":"http://sujiefs.com/upload/images/20170802/201708021511579495800.jpg"}
    ],
    kanjia:[
      {
        "title":"素洁",
        "season":"2018年春季新款",
        "src":"http://sujiefs.com/upload/images/20180322/201803221134300716543.jpg"
      },
       {
         "title": "素洁",
         "season": "2018年夏季新款",
        "src": "http://sujiefs.com/upload/images/20180319/201803191401583397599.jpg"
      },
       {
         "title": "素洁",
         "season": "2018年夏季爆款",
         "src": "http://sujiefs.com/upload/images/20180308/201803081427506631167.jpg"
       }
    ],
    pintuan: [
      {
        "title": "素洁",
        "name": "摩登经典纯色麂皮绒短款外套",
        "src": "http://sujiefs.com/upload/images/20170919/201709191759591221315_thumbnail.jpg"
      },
      {
        "title": "素洁",
        "name": "上衣+半身裙两件套装裙",
        "src": "http://sujiefs.com/upload/images/20180416/201804161442294368291_thumbnail.jpg"
      },
      {
        "title": "素洁",
        "name": "新款宽松系带长袖衬衫",
        "src": "http://sujiefs.com/upload/images/20171023/201710231709022570046_thumbnail.jpg"
      },
      {
        "title": "素洁",
        "name": "气质显瘦夏季中长款女裙",
        "src": "http://sujiefs.com/upload/images/20170801/201708011354279496740_thumbnail.jpg"
      }
    ],
    jingxuan:[
      {
        "title": "素洁",
        "name": "气质显瘦夏季中长款女裙",
        "src":"http://sujiefs.com/upload/images/20180319/201803191607213912571.jpg"
      },
      {
        "title": "素洁",
        "name": "气质显瘦夏季中长款女裙",
        "src": "http://sujiefs.com/upload/images/20180319/201803191442069389248.jpg"
      },
      {
        "title": "素洁",
        "name": "气质显瘦夏季中长款女裙",
        "src": "http://sujiefs.com/upload/images/20180322/201803221353348299896.jpg"
      },
      {
        "title": "素洁",
        "name": "气质显瘦夏季中长款女裙",
        "src": "http://sujiefs.com/upload/images/20180321/201803211341067195861.jpg"
      }
    ]

  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  scrollToTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView),
      hidden1: (!that.data.hidden1)
    })
  },
  onLoad: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView),
      hidden1: (!that.data.hidden1)
    })
  
  },
  // 热卖
  hot_sell:function(){
    var name = "T恤"
    wx.navigateTo({
      url: '../goods_lists/goods_lists?type=' + name,
    })
  },
  // 应季
  season_sell: function () {
    var name = "风衣"
    wx.navigateTo({
      url: '../goods_lists/goods_lists?type=' + name,
    })
  },
  // 精选
  choiceness: function () {
    var name = "衬衫"
    wx.navigateTo({
      url: '../goods_lists/goods_lists?type=' + name,
    })
  },
  // onPullDownRefresh:function(){
  //   console.log("e")
  // },
  onReachBottom:function(){
    console.log("e")
  },
  aaa:function(){
    console.log("aaaa")
  }
})