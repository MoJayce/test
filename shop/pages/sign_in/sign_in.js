// pages/sign_in/sign_in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integral:10,
    integrals: 0,
    signIn:"签到",
    qd:true,
    date:0,
    tab1:true,
    tab2:false,
    jifen:true,
    gets:false,
    times:"",
    geting:[
      {
        "integral": 10,
      },
       {
        "integral": 10,
      },
      {
        "integral": 10,
       },
       {
         "integral": 10,
      },
      {
        "integral": 10,
       },
       {
         "integral": 10,
      },
      {
        "integral": 10,
       },
       {
         "integral": 10,
      },
      {
        "integral": 10,
       },
       {
         "integral": 10,
      },
      {
        "integral": 10,
       },
       {
         "integral": 10,
      },
      {
        "integral": 10,
       },
       {
         "integral": 10,
      },
      {
        "integral": 10,
      }
    ],
  },
// 积分
tab1:function(){
  this.setData({
    tab1:true,
    tab2:false,
    jifen:true,
    gets:false,
  })
},
// 签到记录
tab2: function () {
  this.setData({
    tab2: true,
    tab1:false,
    jifen: false,
    gets: true,
  })
},
// 点击签到
  signing:function(){
    var that =this
    console.log(that.data.signIn)
    if (that.data.signIn == "已签到"){
      wx.showToast({
        title: '亲，今天您已经签到过了哦~',
        icon:"none"
      })
        return
    }
    // 判断逻辑
    var dd = Date.parse(new Date()) / 1000    //当前时间
    var dda = Date.parse(new Date().toLocaleDateString()) / 1000  //当前日期的0点
    var ddb = dda + 86400  //当前日期的24点，也就是第二天的0点
    var timedfs = (ddb - dd)*1000  //转换为毫秒
    // var ttms = 15000
 
    console.log(timedfs) //时间差
    var timer = setInterval(function () {
      clearInterval(timer)
      that.setData({
        signIn: "签到",
        qd: true
      })
    }, timedfs)
    var siginer = {
      "sigined":"签到",
      "time":dd,
      "date":that.data.date + 1,
      "integrals": that.data.integrals +10
    }
    var siginlist = []
    siginlist.push(siginer)
    wx.getStorage({
      key: 'timeout',
      success: function(res) {
        console.log(res.data)
        var siginlists = res.data
        siginlists.push(siginer)
        wx.setStorage({
          key: 'timeout',
          data: siginlists,
        })
        that.setData({
          signIn: "已签到",
          integrals: that.data.integrals + 10,
          date: that.data.date + 1,
          qd:false
        })
        timer
      },fail:function(){
          wx.setStorage({
            key: 'timeout',
            data: siginlist,
          })
          that.setData({
            signIn: "已签到",
          integrals: that.data.integrals + 10,
            qd: false,
            date: that.data.date + 1
          })
        timer
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.getStorage({
      key: 'timeout',
      success: function (res) {
        // console.log(res.data)
        var timer = setInterval(function () {
          // clearInterval(timer)
          that.setData({
            signIn: "签到",
            qd: true
          })
          timedfs = 0
        }, timedfs)
          that.setData({
            date: res.data[res.data.length - 1].date,
            integrals: res.data[res.data.length - 1].integrals,
            signIn: "已签到",
            qd: false
          })
       
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