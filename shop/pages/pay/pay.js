// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabname:"",
    tab1Nums:"",
    tab2Nums:"",
    tab3Nums: "",
    tab4Nums: "",
    tab5Nums: "",
    has1:true,
    has2:true,
    has3:true,
    has4:true,
    tab1: true, 
    tab2:false,
    tab3:false,
    tab4:false,
    tab5:false,
    status:"待付款",
    orderList:[],
    deliverList:[],
  },
tab1:function(){
  var that = this
  that.setData({
     tab1: true,
     tab2: false,
     tab3: false,
     tab4: false,
     tab5: false
   })
},
tab2: function () {
  var that = this
  that.setData({
    tab1: false,
    tab2: true,
    tab3: false,
    tab4: false,
    tab5: false
  })
},
tab3: function () {
  var that = this
  that.setData({
    tab1: false,
    tab2: false,
    tab3: true,
    tab4: false,
    tab5: false
  })
},
tab4: function () {
  var that = this
  that.setData({
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: true,
    tab5: false
  })
},
tab5: function () {
  var that = this
  that.setData({
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: true
  })
},
delete:function(e){
  console.log(e)
  var that = this
  wx.showModal({
    title: '提示',
    content: '确定删除吗？',
    success: function (sm) {
      if (sm.confirm) {
          wx.getStorage({
            key: 'orderList',
            success: function(res) {
              var orderLists = res.data
              orderLists.splice(e.currentTarget.dataset.index, 1)
              wx.setStorage({
                key: "orderList",
                data: orderLists
              })
              that.setData({
                orderList: orderLists,
                tab1Nums: res.data.length,
              })
            },
          })
        }
      }
    })
},
payNow:function(e){
  var that = this
  wx.showModal({
    title: '提示',
    content: '确定立即支付吗？',
    success: function (sm) {
      if (sm.confirm) {
          wx.getStorage({
            key: 'orderList',
            success: function (res) {
              var orderLists = res.data
              var deList = []
              var aa = orderLists[e.currentTarget.dataset.index]
              // 先拿出来
              deList.push(aa)
              // 再删除
              orderLists.splice(e.currentTarget.dataset.index, 1)
              wx.getStorage({
                key: 'deliverList',
                success: function(res) {
                  that.onShow()
                  var deLists = res.data
                  // 添加
                  deLists.push(aa)  
                  console.log(deLists)
                  wx.setStorage({
                    key: 'deliverList',
                    data: deLists,
                  })
                },
                fail:function(){
                  wx.setStorage({
                    key: 'deliverList',
                    data: deList,
                  })
                }
              })
              wx.setStorage({
                key: "orderList",
                data: orderLists
              })
              that.setData({
                orderList: orderLists,
                tab1Nums: res.data.length,
                has1:true
              })
            },
          })
        }else{
          console.log("用户点击了取消")
        }
      }
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.name)
    var that = this
    that.setData({
      tabname : options.name
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
  onShow: function () {
    var that = this
    // 待付款
    if (that.data.tabname == "obligation") {
      that.setData({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
        tab5: false,
      })
    }
    if (that.data.tabname == "deliver"){
      that.setData({
        tab1: false,
        tab2: true,
        tab3: false,
        tab4: false,
        tab5: false,
      })
    }
    if (that.data.tabname == "recriving") {
      that.setData({
        tab1: false,
        tab2: false,
        tab3: true,
        tab4: false,
        tab5: false,
      })
    }
    if (that.data.tabname == "evaluate") {
      that.setData({
        tab1: false,
        tab2: false,
        tab3: false,
        tab4: true,
        tab5: false,
      })
    }

  // 待付款
    wx.getStorage({
      key: 'orderList',
      success: function(res) {
        // console.log(res.data)
        if(res.data == ""){
          console.log("没有数据")
          that.setData({
            has1:true
          })
        }else{
          that.setData({
            orderList: res.data,
            tab1Nums: res.data.length,
            has1: false
          })
        }
        // console.log(that.data.orderList)
      },
    }) 
    // 待发货
    wx.getStorage({
      key: 'deliverList',
      success: function (res) {
        console.log(res.data)
        if (res.data == "") {
          console.log("没有数据")
          that.setData({
            has2: true
          })
        } else {
          that.setData({
            deliverList: res.data,
            tab2Nums: res.data.length,
            has2: false
          })
        }
        // console.log(that.data.orderList)
      },
    })  
    // 待收货
    wx.getStorage({
      key: 'deliverList',
      success: function (res) {
        console.log(res.data)
        if (res.data == "") {
          console.log("没有数据")
          that.setData({
            has3: true,
            has4:true
          })
        } else {
          that.setData({
            deliverList: res.data,
            tab3Nums: res.data.length,
            has3: false,
            tab4Nums: res.data.length,
            has4: false
          })
        }
        // console.log(that.data.orderList)
      },
    })  
  
  },
  // 跳转评价
  evaluate:function(){
    wx.navigateTo({
      url: '../evaluate/evaluate',
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