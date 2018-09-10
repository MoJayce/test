// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setAdd:true,
    setAdds:false,
    distribution:"包邮",
    times:"",
    orderTime:"",
    integral:10,
    integraling: 0, 
    integraled:0,
    discount:0,
    value:"",
    goods_price:0,
    pay_money:0,
    goodsList:[],
    addlist:[],
    name:"",
  },

// 添加地址
  add_address:function(){
      wx.navigateTo({
        url: '../address/address?name=order',
      })
  },
  // 增加数量
  addCount(e) {
    var that = this
    const index = e.currentTarget.dataset.index;
    let goodsList = that.data.goodsList;
    let num = goodsList[index].goodsNums;
    num = num + 1;
    console.log(num)
    if (num == goodsList[index].inventory + 1) {
      wx.showToast({
        title: '就那么几件了~',
        icon: 'none',
      })
      return false;
    }
    goodsList[index].goodsNums = num;
    that.setData({
      goodsList: goodsList
    });
    wx.getStorage({
      key: 'goodsList',
      success: function (res) {
        console.log(res.data)
        var goodsList = res.data
        for (var i = 0; i < goodsList.length; i++) {
          delete goodsList[i].goodsNums
          goodsList[i].goodsNums = num
          // console.log(goodsList[i].goodsNums)

          wx.setStorage({
            key: 'goodsList',
            data: goodsList,
          })
        }
      },
    })
    that.getTotalPrice();
  },
  // 计算总价
  getTotalPrice() {
    let goodsList = this.data.goodsList;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < goodsList.length; i++) {         // 循环列表得到每个数据
      if (goodsList[i].select) {                   // 判断选中才会计算价格
        total += goodsList[i].goodsNums * goodsList[i].price;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      goodsList: goodsList,
      totalPrice: total.toFixed(2)
    });
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let goodsList = this.data.goodsList;
    let num = goodsList[index].goodsNums;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    goodsList[index].goodsNums = num;
    this.setData({
      goodsList: goodsList
    });
    wx.getStorage({
      key: 'goodsList',
      success: function (res) {
        console.log(res.data)
        var goodsList = res.data
        for (var i = 0; i < goodsList.length; i++) {
          delete goodsList[i].goodsNums
          goodsList[i].goodsNums = num
          console.log(goodsList[i].goodsNums)
          wx.setStorage({
            key: 'goodsList',
            data: goodsList,
          })
        }
      },
    })
    this.getTotalPrice();
  }, 
  // 输入框监听事件
  listenInput: function (e) {
    var that = this
    var goodsNums = e.detail.value
    // that.setData({
    //   inputValue: e.detail.value,
    // })
    console.log(goodsNums)
    if (parseInt(e.detail.value) == "") {
      that.setData({
        goodsNums: 1,
      })
    }
    for (var i = 0; i < that.data.goodsList.length; i++) {
      if (parseInt(e.detail.value) > that.data.goodsList[i].inventory) {
        wx.showToast({
          title: '数量超出范围~',
          icon: 'none',
        })
        that.setData({
          value: 1,
        })
        return false
      } else {
        that.setData({
          value: e.detail.value,
        })
      }
    }
    that.getTotalPrice();
  },
  wx_pay:function(){
    var that = this
    //获取当前时间戳
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    // console.log("当前时间戳为：" + timestamp);

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
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    //分
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    //秒
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    // console.log("下单时间：" + Y + "-" + M + "-" + D + "-" + h + ":" + m + ":" + s);
    that.setData({
      times: Y + M  + D  + h + m + s,
      orderTime: Y+"-"+M+"-"+D+"-"+h+":"+m+":"+s
    })
    // console.log("支付")
    if (that.data.setAdd == true){
      wx.showToast({
        title: '还没选地址呢，寄到火星去吗~',
        icon: "none"
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '立即支付吗？',
        success: function (sm) {
          if (sm.confirm) {
            // paid 已支付
            wx.getStorage({
              key: 'goodsList',
              success: function(res) {
                var goodsLists = res.data
                for(var i=0;i<goodsLists.length;i++){
                  if (goodsLists[i].select == true) {
                  var delists = []
                  delists.push(goodsLists[i])
                  // 需以这种数据形式传过去，不然订单列表页面渲染会出错误
                  // 取随机数生成订单号
                  var Num = "";
                  for (var i = 0; i < 6; i++) {
                    Num += Math.floor(Math.random() * 10);
                  }
                  var orderId = that.data.times + Num
                  // console.log(that.data.totalPrice)
                  // 设置地址数据
                  var oList = [{
                    "user_name": that.data.addlist[0].user_name,
                    "user_phone": that.data.addlist[0].user_phone,
                    "user_district": that.data.addlist[0].user_district,
                    "region": that.data.addlist[0].region,
                    "orderId": orderId,
                    "orderTime": that.data.orderTime,
                    "totalPrice": that.data.totalPrice,
                    "clothesOrder": delists
                  }]
                  var deliverLists = []
                  deliverLists.push(oList)
                  console.log(delists)
                  
                    wx.getStorage({
                      key: 'deliverList',
                      success: function(res) {
                        var deliverlists = res.data
                        deliverlists.push(oList)
                        wx.setStorage({
                          key: 'deliverList',
                          data: deliverlists,
                        })
                      },fail:function(){
                        wx.setStorage({
                          key: 'deliverList',
                          data: deliverLists,
                        })
                      }
                    })
                   
                    goodsLists.splice(goodsLists[i], 1)
                    wx.setStorage({
                      key: "goodsList",
                      data: goodsLists
                    })
                  }
                }
                console.log(goodsLists)
              },
            })

            // wx.showToast({
            //   title: '好的已选择目的地：火星250号~',
            //   icon: "none"
            // })
          } else if (sm.cancel) {
             // unpaid 待支付
            var orderList=[]
            // 取随机数生成订单号
            var Num = "";
            for (var i = 0; i < 6; i++) {
              Num += Math.floor(Math.random() * 10);
            } 
            var orderId = that.data.times + Num
            // console.log(that.data.totalPrice)
            // 设置地址数据
            for (var i = 0; i < that.data.addlist.length;i++){
                var oList = [{
                  "user_name": that.data.addlist[i].user_name,
                  "user_phone": that.data.addlist[i].user_phone,
                  "user_district": that.data.addlist[i].user_district,
                  "region": that.data.addlist[i].region,
                  "orderId": orderId,
                  "orderTime": that.data.orderTime,
                  "totalPrice": that.data.totalPrice,
                  "clothesOrder": that.data.goodsList
                }]
          }
            // 将两组数据连起来
            orderList.push(oList)
            console.log(orderList)
            // 先读取是否有数据，不然如果有多个未支付的订单会被后来的覆盖
            wx.getStorage({
              key: 'orderList',
              success: function(res) {
                var orderLists = res.data
                orderLists.push(oList)
                // orderLists.push(orderList)
                wx.setStorage({
                  key: 'orderList',
                  data: orderLists,
                })
              },
              fail: function () {
                // 没缓存的话然后存起来
                wx.setStorage({
                  key: 'orderList',
                  data: orderList,
                })
              }
            })
            wx.showToast({
              title: '您的包裹消失在二次元空间了~',
              icon: "none"
            })
            // wx.navigateBack({
              
            // })  
            } 
          }
        })
     
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name:options.name
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:function() {
    var that = this
    var goodsList = []
    var orderLists = []
    var lists = {}
    // 判断是购物车的数据
    if (that.data.name == "order") {
      wx.getStorage({
        key: 'goodsList',
        success: function (res) {
          var goodsLists = res.data
          for (var i = 0; i < goodsLists.length;i++){
            if (goodsLists[i].select == true){
              // console.log(goodsLists[i])
              goodsList.push(goodsLists[i])
                that.setData({
                  goodsList: goodsList
                })
            }
          }
          that.getTotalPrice();
        }
      })
    } else {
      // 立即购买的数据
      wx.getStorage({
        key: 'payList',
        success: function (res) {
          console.log(res.data)
          if (res.data != "") {
            // console.log("没有")
            that.setData({
              nothing: false
            })
          }
          var goodsListArr = [];
          goodsListArr.push(res.data)
          for (var i = 0; i < goodsListArr.length; i++) {
            that.setData({
              goodsList: goodsListArr[i],
              value: goodsListArr[i][i].goodsNums
            })
          }
          that.getTotalPrice();
          console.log(that.data.value)
          console.log(that.data.goodsList)
        }
      })
    }
    wx.getStorage({
      key: 'addLists',
      success: function (res) {
        that.setData({
          addlist: res.data,
          setAdd: false,
          setAdds: true
        })
        if (res.data == "") {
          that.setData({
            setAdd: true,
            setAdds: false
          })
        }
        that.getTotalPrice();
        console.log(that.data.addlist)
      },
      fail: function () {
        that.setData({
          setAdd: true,
          setAdds: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})