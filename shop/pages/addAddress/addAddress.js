// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name: "",
    user_phone: "",
    user_district:"",
    user_mail:"",
    region: ['请选择', '请选择', '请选择'],
    customItem: '全部',
    address:[],
    list:{}
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
    console.log(this.data.region.length)
  },
  // 获取输入信息
  user_name:function(e){
      var that = this
      that.setData({
        user_name: e.detail.value
      })
  },
  user_phone: function (e) {
    var that = this
    that.setData({
      user_phone: e.detail.value
    })
  },
  user_district: function (e) {
    var that = this
    that.setData({
      user_district: e.detail.value
    })
  }, 
  user_mail: function (e) {
    var that = this
    that.setData({
      user_mail: e.detail.value
    })
  },
  // 保存按钮
  save:function(){
    var that = this
    // console.log(that.data.region[0])
    if (that.data.user_name == ""){
        wx.showToast({
          title: '请填写联系人',
          icon:'none'
        })
        return
    }
    if (that.data.user_phone == "") {
      wx.showToast({
        title: '请填写手机号码',
        icon: 'none'
      })
      return
    } 
    if (that.data.region[0] == "请选择") {
      wx.showToast({
        title: '请填写地区',
        icon: 'none'
      })
      return
    }
    if (that.data.region[1] == "全部") {
      wx.showToast({
        title: '请填写完整地区',
        icon: 'none'
      })
      return
    }
    if (that.data.region[2] == "全部") {
      wx.showToast({
        title: '请填写完整地区',
        icon: 'none'
      })
      return
    }
    if (that.data.user_district == "") {
      wx.showToast({
        title: '请填写详细地址',
        icon: 'none'
      })
      return
    }
  
    if (that.data.user_mail == "") {
      wx.showToast({
        title: '请填写邮编',
        icon: 'none'
      })
      return
    }
    var address = []
    var list = {
      "user_name": that.data.user_name,
      "user_phone": that.data.user_phone,
      "user_district": that.data.user_district,
      "region":that.data.region,
      "user_mail": that.data.user_mail
    }
    address.push(list)
    that.setData({
      address:address
    })
    // console.log(6666666)

    wx.getStorage({
      key: 'addressList',
      success: function(res) {
        var addressLists = res.data
        addressLists.push(list)

        wx.setStorage({
          key: "addressList",
          data: addressLists
        })

      },
      fail:function(){
        wx.setStorage({
          key: "addressList",
          data: address
        })
      }
    })
    wx.navigateBack({
    })
  },
  // 取消按钮
  cancle:function(){
    wx.navigateBack({
    })
  },
  //用户选择收货地址
  chooseAddress: function () {
    var that = this;
    if (wx.chooseAddress) {
      wx.chooseAddress({
        success: function (res) {
          // console.log(JSON.stringify(res));
          // console.log(res);
          that.setData({
            "user_name": res.userName,
            "user_phone": res.telNumber,
            // "add_provinceName": res.provinceName,
            // "add_cityName": res.cityName,
            // "add_countyName": res.countyName,
            "user_district": res.detailInfo,
            "user_mail": res.postalCode,
            "region": [res.provinceName,res.cityName, res.countyName],
            //具体收货地址显示
            flag: false,

          })
        },
        fail: function (err) {
          console.log(JSON.stringify(err));
          console.info("收货地址授权失败");
          wx.showToast({
            title: '授权失败，您将无法进行下单支付;重新授权请删除小程序后再次进入',
            icon: 'success',
            duration: 20000
          })
        }
      })
    } else {
      console.log('当前微信版本不支持chooseAddress');
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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