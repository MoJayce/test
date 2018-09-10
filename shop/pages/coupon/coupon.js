// pages/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"",
      homes:false,
      infos:false,
    couponList:[
      {
      "coupons":30,
      "man":300,
      "date":10
      },
      {
        "coupons": 20,
        "man": 200,
        "date": 5
      }
      ],
    windowHeight: 654,
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    countDownDay: 0,
    countDownHour: 0,
    countDownMinute: 0,
    countDownSecond: 0,

  },
  tocoupon:function(){
   wx.navigateTo({
     url: '../coupon/coupon?name=home',
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    that.setData({
      windowHeight: wx.getStorageSync('windowHeight')
    })
    // console.log(options.name)
    that.setData({
      name:options.name
    })
    let name = that.data.name
    // console.log(name)
    if(name == "home"){
        that.setData({
            homes:false,
            infos:true
        })
    }
     if (name == "info") {
      that.setData({
        homes: true,
        infos: false
      })
    } 

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
    // 倒计时
    // var totalSecond = 1769184000 - Date.parse(new Date()) / 1000;

    // var interval = setInterval(function () {
    //   // 秒数
    //   var second = totalSecond;

    //   // 天数位
    //   var day = Math.floor(second / 3600 / 24);
    //   var dayStr = day.toString();
    //   if (dayStr.length == 1) dayStr = '0' + dayStr;

    //   // 小时位
    //   var hr = Math.floor((second - day * 3600 * 24 ) / 3600);
    //   var hrStr = hr.toString();
    //   if (hrStr.length == 1) hrStr = '0' + hrStr;

    //   // 分钟位
    //   var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
    //   var minStr = min.toString();
    //   if (minStr.length == 1) minStr = '0' + minStr;

    //   // 秒位
    //   var sec = second - day * 3600 * 24 - hr * 3600 - min * 60;
    //   var secStr = sec.toString();
    //   if (secStr.length == 1) secStr = '0' + secStr;

    //   this.setData({
    //     countDownDay: dayStr,
    //     countDownHour: hrStr,
    //     countDownMinute: minStr,
    //     countDownSecond: secStr,
    //   });
    //   totalSecond--;
    //   if (totalSecond < 0) {
    //     clearInterval(interval);
    //     wx.showToast({
    //       title: '活动已结束',
    //     });
    //     this.setData({
    //       countDownDay: '00',
    //       countDownHour: '00',
    //       countDownMinute: '00',
    //       countDownSecond: '00',
    //     });
    //   }
    // }.bind(this), 1000);

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