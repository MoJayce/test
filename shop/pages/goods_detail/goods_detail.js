// pages/sign_in/sign_in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shouc:true,
    value:1,  //选中商品数量
    goodsNums:"",
    disabled:false, //加减按钮
    disableda: false,  //加减按钮
    indicatorDots: true,  //是否显示面板指示点
    indicatorColor: "#fff", //指示点颜色
    indicatorActiveColor:"#ffff00",
    vertical: false,
    interval: 3000,
    duration: 800,
    autoplay: true,
    hidden1: true,
    showView: true,
    tab1: true,
    tab2: false,
    pingjia: false,
    xiangqing: true,
    sizeId: "",
    colorId:"",
    goodsList:[],
    lists:{},
    detail_msg:[],
    collectList:[],
    clothes: [{
        "id": "0",
        "type": "T恤",
        "clothesId": "010001",
        "select": true,
        "imgSrc": [
          "http://sujiefs.com/upload/images/20180423/201804231129454571221.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231129496116208.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231129523760822.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231129547510059.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231129566901221.jpg"
          ],
        "title": "新款韩版印花字母短款T恤衫 T18C076",
        "price": "63",
        "oldPrice": "￥119",
        "sales": 6,
        "size":[
          {"size":"S"},
          {"size":"M"},
          {"size":"L"},
          {"size":"XL"},
          {"size":"XXL"}
        ],
        "color":[
          {"color":"黑色"},
          {"color":"白色"}
        ],
        "inventory":20,
        "evaluate":[
            {
            "userName":"王女士",
            "userHeaderImg":"http://sujiefs.com/upload/images/20180511/201805111530496618166_thumbnail.jpg",
            "time":"2018-04-05",
            "userValue": "不错,不错",
          }, 
          {
            "userName":"匿名用户",
            "userHeaderImg": "http://sujiefs.com/upload/images/20180423/201804231129454571221.jpg",
            "time": "2018-05-15",
            "userValue": "垃圾中的战斗机",
            }, 
            {
              "userName":"钭豆豆",
              "userHeaderImg": "http://sujiefs.com/upload/images/20180511/201805111531006852788.jpg",
              "time": "2018-07-01",
              "userValue": "啦啦啦啦啦啦啦。。。。。",
            },

          ],
        "detail_img":[
          "http://sujiefs.com/upload/images/20180423/201804231133358274334.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231133464214240.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231133513315369.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231133551150520.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134420111850.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134420186592.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134420884008.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134420705567.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134422606101.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134422606101.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134423709329.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134430750853.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134424299445.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134431479925.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134452898390.jpg",
          "http://sujiefs.com/upload/images/20180423/201804231134460397929.jpg"

        ]
      },
      {
        "id": "1",
        "type": "T恤",
        "clothesId": "010002",
        "select": true,
        "imgSrc": [
          "http://sujiefs.com/upload/images/20180420/201804201408181830759.jpg",
          "http://sujiefs.com/upload/images/20180420/201804201408215475114.jpg",
          "http://sujiefs.com/upload/images/20180420/201804201408242635874.jpg",
          "http://sujiefs.com/upload/images/20180420/201804201408266455696.jpg",
          "http://sujiefs.com/upload/images/20180420/201804201408292862096.jpg"
        ],
        "title": "印花圆领短袖纯棉T恤 T18C073",
        "price": "79",
        "oldPrice": "￥199",
        "sales": 26,
        "size": [
          { "size": "S" },
          { "size": "M" },
          { "size": "L" },
          { "size": "XL" },
          { "size": "XXL" }
        ],
        "color": [
          { "color": "黑色" },
          { "color": "白色" }
        ],
        "inventory":15,
        // 评论区
      "evaluate": [
        {
          "userName": "王女士",
          "userHeaderImg": "http://sujiefs.com/upload/images/20180511/201805111530496618166_thumbnail.jpg",
          "time": "2018-04-05",
          "userValue": "不错,不错",
        },
        {
          "userName": "匿名用户",
          "userHeaderImg": "http://sujiefs.com/upload/images/20180423/201804231129454571221.jpg",
          "time": "2018-05-15",
          "userValue": "垃圾中的战斗机",
        },
        {
          "userName": "钭豆豆",
          "userHeaderImg": "http://sujiefs.com/upload/images/20180511/201805111531006852788.jpg",
          "time": "2018-07-01",
          "userValue": "啦啦啦啦啦啦啦。。。。。",
        },

      ],
      // 图片详情区
        "detail_img": [
           "http://sujiefs.com/upload/images/20180420/201804201409450295128.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201409591546464.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410169899563.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410170332610.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410170530085.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410170789828.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410170789828.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410170789828.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410171064432.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410170684322.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410171254043.jpg" ,
           "http://sujiefs.com/upload/images/20180420/201804201410258121672.jpg" 

        ]
      },
      {
        "id": "1",
        "type": "风衣",
        "clothesId": "020001",
        "select": true,
        "imgSrc": [
           "http://sujiefs.com/upload/images/20170919/201709191759591221315.jpg",
           "http://sujiefs.com/upload/images/20170919/201709191800034413215.jpg",
           "http://sujiefs.com/upload/images/20170919/201709191800066592234.jpg",
            "http://sujiefs.com/upload/images/20170919/201709191800095758750.jpg",
           "http://sujiefs.com/upload/images/20170919/201709191800131492461.jpg" 
        ],
        "title": "摩登经典纯色麂皮绒短款配腰带外套 J17D609",
        "price": "118",
        "oldPrice": "￥256",
        "sales": 18,
        "size": [
          { "size": "S" },
          { "size": "M" },
          { "size": "L" },
          { "size": "XL" },
          { "size": "XXL" }
        ],
        "color": [
          { "color": "藏青色" },
          { "color": "卡其色" }
        ],
        "inventory": 211,
        // 评论区
        "evaluate": [
          {
            "userName": "郝女士",
            "userHeaderImg": "http://sujiefs.com/upload/images/20170829/201708291045579736117.jpg",
            "time": "2018-05-05",
            "userValue": "太感谢了，衣服很漂亮，朋友很喜欢，最主要的是买家太好了~~~大大的赞一个。。。 衣服，很合身",
          },
          {
            "userName": "匿名用户",
            "userHeaderImg": "http://sujiefs.com/upload/images/20170919/201709191759591221315_thumbnail.jpg",
            "time": "2018-05-15",
            "userValue": "东西收到,很满意!!真的是超级好的卖家,解答疑问不厌其烦,细致认真,关键是东西好,而且货物发得超快,包装仔细,值得信赖!",
          },
          {
            "userName": "六六六",
            "userHeaderImg": "http://sujiefs.com/upload/images/20170829/201708291054515486977_thumbnail.jpg",
            "time": "2018-07-01",
            "userValue": "啦啦啦啦啦啦啦。。专业划水。。。",
          },

        ],
        // 图片详情区
        "detail_img": [
           "http://sujiefs.com/upload/images/20170919/201709191802093193690.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802093764669.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802093772954.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802097322977.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802111179701.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802093956966.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802127173039.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802131355099.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802124067463.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802150528213.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802127301681.jpg" ,
           "http://sujiefs.com/upload/images/20170919/201709191802165922449.jpg" 

        ]
      },
      {
        "id": "0",
        "type": "风衣",
        "clothesId": "020002",
        "select": true,
        "imgSrc": [
           "http://sujiefs.com/upload/images/20170829/201708291045463337111.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291045498396067.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291045533173188.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291045554397701.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291045579736117.jpg" 
        ],
        "title": "韩版休闲时尚中长款风衣外套 J17D526",
        "price": "198",
        "oldPrice": "￥326",
        "sales": 11,
        "size": [
          { "size": "S" },
          { "size": "M" },
          { "size": "L" },
          { "size": "XL" },
          { "size": "XXL" }
        ],
        "color": [
          { "color": "藏青色" },
          { "color": "卡其色" }
        ],
        "inventory": 25,
        // 评论区
        "evaluate": [
          {
            "userName": "郝女士",
            "userHeaderImg": "http://sujiefs.com/upload/images/20170829/201708291045579736117.jpg",
            "time": "2018-05-05",
            "userValue": "太感谢了，衣服很漂亮，朋友很喜欢，最主要的是买家太好了~~~大大的赞一个。。。 衣服，很合身",
          },
          {
            "userName": "匿名用户",
            "userHeaderImg": "http://sujiefs.com/upload/images/20170919/201709191759591221315_thumbnail.jpg",
            "time": "2018-05-15",
            "userValue": "东西收到,很满意!!真的是超级好的卖家,解答疑问不厌其烦,细致认真,关键是东西好,而且货物发得超快,包装仔细,值得信赖!",
          },
          {
            "userName": "六六六",
            "userHeaderImg": "http://sujiefs.com/upload/images/20170829/201708291054515486977_thumbnail.jpg",
            "time": "2018-07-01",
            "userValue": "啦啦啦啦啦啦啦。。专业划水。。。",
          },

        ],
        // 图片详情区
        "detail_img": [
           "http://sujiefs.com/upload/images/20170829/201708291048275658635.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048276392343.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048279757860.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048276353315.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048307147781.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048303974459.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048311025634.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048334792376.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048362866942.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048350487980.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048331283278.jpg" ,
           "http://sujiefs.com/upload/images/20170829/201708291048411559240.jpg" 

        ]
      },
    ]
  },
  tab1: function () {
    this.setData({
      tab1: true,
      tab2: false,
      xiangqing: true,
      pingjia: false,
    })
  },
  tab2: function () {
    this.setData({
      tab2: true,
      tab1: false,
      xiangqing: false,
      pingjia: true,
    })
  },
  collect:function(e){
      var that = this;
      //获取当前时间戳
      var timestamp = Date.parse(new Date());
      timestamp = timestamp / 1000;
      console.log("当前时间戳为：" + timestamp);

      //获取当前时间
      var n = timestamp * 1000;
      var date = new Date(n);
      //年
      var Y = date.getFullYear();
      //月
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
      //日
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      //时
      var h = date.getHours();
      //分
      var m = date.getMinutes();
      //秒
      var s = date.getSeconds();
      console.log("收藏时间：" + Y + "-" + M + "-" + D + "-" + h + ":" + m + ":" + s);

      that.setData({
        shouc: (!that.data.shouc)
      });
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 2000
      })
      if (that.data.shouc == true){
      // console.log("取消收藏")
      wx.showToast({
        title: '取消收藏成功',
        icon: 'success',
        duration: 2000
      })
      var collectList = []
      var collect = {
        "clothesId": ""
      }
      // collectList.splice(collect.indexOf(e.currentTarget.id),1)
        collectList.push(collect)
      that.setData({
        collectList: collectList
      })
      console.log(e)
      wx.getStorage({
        key: 'collectList',
        success: function (res) {
          var collectLists = res.data
          // 查找关键字删除所对应的元素
          collectLists.splice(collectLists.indexOf(e.currentTarget.id), 1)
              wx.setStorage({
                key: "collectList",
                data: collectLists
              })
        },
        fail: function () {
          wx.setStorage({
            key: "collectList",
            data: collectList
          })
        }
      })
    }else{
        var collectList = []
        console.log(that.data.detail_msg[0].clothesId)
        var collect = {
          "clothesId": that.data.detail_msg[0].clothesId,
          "imgSrc": that.data.detail_msg[0].imgSrc[0],
          "title": that.data.detail_msg[0].title,
          "collectTime": Y + "-" + M + "-" + D + "-" + h + ":" + m + ":" + s
        }
        collectList.push(collect)
        that.setData({
          collectList: collectList
        })
        wx.getStorage({
          key: 'collectList',
          success: function (res) {
            var collectLists = res.data
            collectLists.push(collect)
            wx.setStorage({
              key: "collectList",
              data: collectLists
            })

          },
          fail: function () {
            wx.setStorage({
              key: "collectList",
              data: collectList
            })
          }
        })
    }
  },
  toHome:function(){
    console.log("首页")
    wx.switchTab({
      url: '../home/home',
    })
  },
  shopCart:function(){
    var that = this;
    that.setData({
      showView: (!that.data.showView),
      hidden1: (!that.data.hidden1)
    })
  },
  buyNow:function(){
    console.log("立即购买")
    var that = this;
    that.setData({
      showView: (!that.data.showView),
      hidden1: (!that.data.hidden1)
    })
  },
  // 减
  reduce:function(){
      var that = this
      console.log(that.data.value)
      if (that.data.value > 1) {
        that.setData({
          value: that.data.value - 1,
          disabled: false,
          disableda: false,
        })
      }
      if (that.data.value == 1){
        wx.showToast({
          title: '数量超出范围~',
          icon: 'none',
        })  
        that.setData({
          disabled:true,
          value:1
        })
        return false
      }  
      console.log(that.data.disabled)
  },
  // 加
  add:function(){
    var that = this
    for (var i = 0; i<that.data.detail_msg.length;i++){
      if (that.data.value == that.data.detail_msg[i].inventory) {
        wx.showToast({
          title: '数量超出范围~',
          icon: 'none',
        })  
        that.setData({
          disableda: true,
        })
         return false
      } else if (that.data.value < that.data.detail_msg[i].inventory){
        that.setData({
          value: that.data.value + 1,
          disableda: false,
          disabled: false,
        })
      }
    }
    console.log(that.data.value)
  },
  // 输入框监听事件
  listenInput:function(e){
    var that = this
    var goodsNums = e.detail.value 
    // that.setData({
    //   inputValue: e.detail.value,
    // })
    console.log(goodsNums)
    if (parseInt(e.detail.value) == ""){
        that.setData({
          goodsNums: 1,
        })
    }
    for (var i = 0; i < that.data.detail_msg.length; i++) {
      if (parseInt(e.detail.value) > that.data.detail_msg[i].inventory) {
          wx.showToast({
            title: '数量超出范围~',
            icon: 'none',
          })
          that.setData({
            value: 1,
          })
          return false
        }else{
            that.setData({
              value: e.detail.value,
            })
        }
      }
  },
  // 选择尺码
  chose_size: function (e) {
    var that = this
    this.setData({
      sizeId: e.currentTarget.id
    })
  },
  // 选择颜色
  chose_color: function (e) {
    var that = this
    this.setData({
      colorId: e.currentTarget.id
    })
  },
  // 立即购买
  buy_Now:function(){
    var that = this
    if (that.data.sizeId == "") {
      wx.showToast({
        title: '请选择尺码~',
        icon: 'none',
      })
      return false
    }
    if (that.data.colorId == "") {
      wx.showToast({
        title: '请选择颜色~',
        icon: 'none',
      })
      return false
    }
    for (var i = 0; i < that.data.detail_msg.length;i++){
      that.data.lists = {
        "clothes": that.data.detail_msg[i].clothesId,
        "price": that.data.detail_msg[i].price,
        "imgSrc": that.data.detail_msg[i].imgSrc[0],
        "title": that.data.detail_msg[i].title,
        "size": that.data.sizeId,
        "color": that.data.colorId,
        "goodsNums": that.data.value,
        "inventory": that.data.detail_msg[i].inventory,
        "select": that.data.detail_msg[i].select,
        "isTouchMove": false
      }
    }
   
    console.log("对象" + that.data.lists)

    var goodsListArr = [];
    goodsListArr.push(that.data.lists)
    that.setData({
      goodsList: goodsListArr
    })
    console.log(that.data.goodsList)

    wx.setStorage({
      key: "payList",
      data: that.data.goodsList
    })
    wx.navigateTo({
      url: '../order/order',
    })
  },
  // 添加到购物车
  add_shopCart:function(){
    var that = this
    var goodsList=[]
    if (that.data.sizeId == ""){
        wx.showToast({
          title: '请选择尺码~',
          icon: 'none',
        })
        return false
    }
    if (that.data.colorId == "") {
      wx.showToast({
        title: '请选择颜色~',
        icon: 'none',
      })
      return false
    }
    
    for (var i = 0; i < that.data.detail_msg.length; i++) {
      var lists = {
                  "clothes": that.data.detail_msg[i].clothesId,
                  "price": that.data.detail_msg[i].price,
                  "imgSrc": that.data.detail_msg[i].imgSrc[0],
                  "title": that.data.detail_msg[i].title,
                  "size": that.data.sizeId,
                  "color": that.data.colorId,
                  "goodsNums": that.data.value,
                  "inventory": that.data.detail_msg[i].inventory,
                  "select": that.data.detail_msg[i].select,
                  "isTouchMove": false
                  }
                }
       
        goodsList.push(lists)
        that.setData({
          goodsList: goodsList
        })
        console.log(that.data.goodsList)
        // 先读取
        wx.getStorage({
          key: 'goodsList',
          success: function (res) {
            var goodsLists = res.data
            // 如果有数据用新的数组push
            goodsLists.push(lists)
            console.log(goodsLists)
            // 再设置新的存
            wx.setStorage({
              key: "goodsList",
              data: goodsLists
            })
            wx.showToast({
              title: '添加成功~',
            })
            that.setData({
              showView: (!that.data.showView),
              hidden1: (!that.data.hidden1)
            })

          },
          fail: function () {
            // 如果没有缓存直接设置
            wx.setStorage({
              key: "goodsList",
              data: goodsList
            })   
            wx.showToast({
              title: '添加成功~',
            })
            that.setData({
              showView: (!that.data.showView),
              hidden1: (!that.data.hidden1)
            })
          }
        })
      
       
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that= this
    // console.log(that.data.clothes)
    let name = options.name
    // console.log(name)
    var detail_msg = []
    for(let i=0;i<that.data.clothes.length;i++){
      if (options.name == that.data.clothes[i].clothesId){
        detail_msg.push(that.data.clothes[i])
      }
    }
    that.setData({
      detail_msg: detail_msg, //还需赋值
    });
    // console.log(detail_msg)
    wx.getStorage({
      key: 'collectList',
      success: function(res) {
        console.log(res.data)
        for(var i=0;i<res.data.length;i++){
          for (var j = 0; j < that.data.detail_msg.length;j++){
            if (res.data[i].clothesId == that.data.detail_msg[j].clothesId){
                  that.setData({
                    shouc:false
                })
            }else{
              that.setData({
                shouc: true
              })
            }
          }
        }
        
      },
    })

  },
 
  onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView),
      hidden1: (!that.data.hidden1)
    })
  },
  // 图片预览1
  preview:function(e){
    console.log(this.data.detail_msg[0].imgSrc)
    wx.previewImage({
      current: e.target.dataset.src , // 当前显示图片的http链接
      urls: this.data.detail_msg[0].imgSrc // 需要预览的图片http链接列表
    })
  },
  // 图片预览2
  previews: function (e) {
    wx.previewImage({
      current: e.target.dataset.src, // 当前显示图片的http链接
      urls: this.data.detail_msg[0].detail_img // 需要预览的图片http链接列表
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})