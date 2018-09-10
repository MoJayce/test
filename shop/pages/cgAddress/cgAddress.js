// pages/cgAddress/cgAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_name: "",
    user_phone: "",
    user_district: "",
    user_mail: "",
    region: ['请选择', '请选择', '请选择'],
    customItem: '全部',
    addressList: [],
    NewAddress:[],
    name:'',
  },
bindRegionChange: function (e) {
  var that = this
  console.log('picker发送选择改变，携带值为', e.detail.value)
  that.setData({
    region: e.detail.value
  })
},
   // 获取输入信息
  user_name: function (e) {
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
  save: function () {
    var that = this
    var NewAddress = []
    // that.data.addressList.user_name = that.data.user_name
    // that.data.addressList.user_phone = that.data.user_phone
    // that.data.addressList.user_district = that.data.user_district
    // that.data.addressList.region = that.data.region
    // that.data.addressList.user_mail = that.data.user_mail
    if (that.data.user_name == "") {
      wx.showToast({
        title: '请填写联系人',
        icon: 'none'
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
    var list = {
      "user_name": that.data.user_name,
      "user_phone": that.data.user_phone,
      "user_district": that.data.user_district,
      "region": that.data.region,
      "user_mail": that.data.user_mail
    }
    NewAddress.push(list)
    that.setData({
      NewAddress: NewAddress
    })
    wx.getStorage({
      key: 'addressList',
      success: function (res) {
        var addressLists = res.data
        addressLists.push(list)

        wx.setStorage({
          key: "addressList",
          data: NewAddress
        })
        wx.navigateBack({

        })
      }
    })
  
    console.log(that.data.user_name)
  },
  // 取消按钮
  cancle: function () {
    wx.navigateBack({
    })
  },
  removeAddress: function (e){
    var that = this
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success: function (sm) {
        if (sm.confirm) {
          // 用户点击了确定 可以调用删除方法了
            console.log(e)
            wx.getStorage({
              key: 'addressList',
              success: function (res) {
                var addressLists = res.data
                // addressLists.push(list)
                addressLists.splice(addressLists.indexOf(e.currentTarget.dataset.name), 1)
                wx.setStorage({
                  key: "addressList",
                  data: addressLists
                })
                wx.navigateBack({
                      url:'../address/address'
                })
              },
              fail: function () {
                wx.setStorage({
                  key: "addressList",
                  data: address
                })
              }
            })
            wx.getStorage({
              key: 'addLists',
              success: function (res) {
                var addressList = res.data
                // addressLists.push(list)
                addressList.splice(addressList.indexOf(e.currentTarget.dataset.name), 1)
                wx.setStorage({
                  key: "addLists",
                  data: addressList
                })
              }
            })
        } else if (sm.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    // console.log(options.name)
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      name: options.name
    })
    // console.log(options.name)
    wx.getStorage({
      key: 'addressList',
      success: function (res) {
        var addrs = res.data
        console.log(addrs)
        for(var i=0;i<addrs.length;i++){
          if (addrs[i].user_name == options.name) {
            console.log("获取过来的是" + addrs[i].user_name)
            that.setData({
              user_name: addrs[i].user_name,
              user_phone:addrs[i].user_phone,
              region: addrs[i].region,
              user_district: addrs[i].user_district,
              user_mail: addrs[i].user_mail
            })
            console.log(that.data.addressList)
          }
        }
      }
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
      wx.navigateBack({
        url:'../info/info'
      })
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