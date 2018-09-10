// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // show:true,
    addressList:[],
    name:"",
  },
  add:function(){
    wx.navigateTo({
      url: '../addAddress/addAddress',
    })
  },
  change:function(e){

    console.log(e.currentTarget.dataset.name)
    var name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '../cgAddress/cgAddress?name='+name,
    })
  },
  chose_add:function(e){
    var that = this
    var addlists = []
    wx.getStorage({
      key: 'addressList',
      success: function (res) {
        console.log(res.data)
        // 传当前索引值的数据
        addlists.push(res.data[e.currentTarget.dataset.index])
        wx.setStorage({
          key: 'addLists',
          data: addlists,
        })
        console.log(that.data.name)
        if(that.data.name == "info"){
          wx.navigateBack({
          })
        } else if (that.data.name == "order"){
          wx.navigateBack({
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        name: options.name
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var that = this
    // console.log(that.data.addressList)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(){
    var that = this
    wx.getStorage({
      key: 'addressList',
      success: function (res) {
        console.log(res.data)
        that.setData({
          addressList: res.data
        })
        console.log(that.data.addressList)
      },
      fail: function () {
        that.setData({
          show: false
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