Page({
  data: {
    nickName:"",
    avatarUrl:"",
    has1:false,
    had1:"",
    has2: false,
    had2: "",
  },
  my_coupon: function () {
    wx.navigateTo({
      url: '../coupon/coupon?name=info',
    })
  },
  my_collect:function(){
    wx.navigateTo({
      url: '../collect/collect',
    })
  },
  my_address:function(){
    wx.navigateTo({
      url: '../address/address?name=info',
    })
  },
  toOrder:function(){
    wx.navigateTo({
      url: '../pay/pay?name=obligation',
    })
  },
  getUserInfo: function () {
    var that = this
    _getUserInfo();
    function _getUserInfo() {
      //需要正式版才能使用此接口
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
  },
  // 待付款
  obligation:function(){
    wx.navigateTo({
      url: '../pay/pay?name=obligation',
    })
  },
  deliver: function () {
    wx.navigateTo({
      url: '../pay/pay?name=deliver',
    })
  },
  recriving:function(){
    wx.navigateTo({
      url: '../pay/pay?name=recriving',
    })
  },
  evaluate:function(){
    wx.navigateTo({
      url: '../pay/pay?name=evaluate',
    })
  },
  onLoad: function () {
  
  },
  onShow:function(){
    var that = this
    // 待付款
    wx.getStorage({
      key: 'orderList',
      success: function(res) {
        console.log(res.data)
        if(res.data.length == 0){
          that.setData({
            has1: false
          })
        }else{
          console.log(res.data.length)
          that.setData({
            has1: true,
            had1: res.data.length
          })
        }
      },
    })
    // 待发货
    wx.getStorage({
      key: 'deliverList',
      success: function (res) {
        console.log(res.data)
        if (res.data.length == 0) {
          that.setData({
            has2: false,
            has3: false,
            has4: false
          })
        } else {
          console.log(res.data.length)
          that.setData({
            has2: true,
            has3: true,
            has4: true,
            had2: res.data.length,
            had3: res.data.length,
            had4: res.data.length
          })
        }
      },
    })
  }
})