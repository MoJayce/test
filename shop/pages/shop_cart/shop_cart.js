Page({
  data: {
    jiesuan:false,
    nothing:false,
    // value:"",
    startX: 0, //开始坐标
    startY: 0,
    orderLists: [],
    goodsList:[],
    lists:{},
    selectAllStatus: false,
    totalPrice: 0, 
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
  // 全选
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let goodsList = this.data.goodsList;
    for (let i = 0; i < goodsList.length; i++) {
      goodsList[i].select = selectAllStatus;            // 改变所有商品状态
      wx.getStorage({
        key: 'goodsList',
        success: function (res) {
          // 从当前列表追加
          var newList = res.data
          for(var j=0;j<newList.length;j++){
            newList[j].select = selectAllStatus
            wx.setStorage({
              key: 'goodsList',
              data: newList,
            })
          }
        },
      })
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      goodsList: goodsList
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  // 单选框
  selectList(e) {
    var that = this
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let goodsList = that.data.goodsList;                    // 获取购物车列表
    const select = goodsList[index].select;         // 获取当前商品的选中状态
    goodsList[index].select = !select;              // 改变状态
    // 判断当前选中传入订单页面
    if (goodsList[index].select == true){
        wx.getStorage({
          key: 'goodsList',
          success: function(res) {
            // 从当前列表追加
            var newList = res.data
            newList[index].select = true
            // console.log(res.data[index].select)
            wx.setStorage({
              key: 'goodsList',
              data: newList,
            })
          },
        })
    }else{
      wx.getStorage({
        key: 'goodsList',
        success: function (res) {
          // 从当前列表删除当前数据
          var newList = res.data
          res.data[index].select = false
          // console.log(res.data[index].select)
          wx.setStorage({
            key: 'goodsList',
            data: newList,
          })
        },
      })
    }
    that.setData({
      goodsList: goodsList
    });
    that.getTotalPrice();                           // 重新获取总价
  },

  toOrder:function(){
    var that =this
 
        wx.navigateTo({
          url: '../order/order?name=order',
        })
  },
  // 增加数量
  addCount(e) {
    var that = this
    const index = e.currentTarget.dataset.index;
    let goodsList = that.data.goodsList;
    let num = goodsList[index].goodsNums;
    num = num + 1;
    if (num == goodsList[index].inventory+1){
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
      success: function(res) {
        console.log(res.data)
        var goodsList = res.data
        // 增加当前点击的
        goodsList[index].goodsNums = num
          wx.setStorage({
            key: 'goodsList',
            data: goodsList,
          })
      },
    })
    that.getTotalPrice();
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
        // 减少当前点击的
          goodsList[index].goodsNums = num
          wx.setStorage({
            key: 'goodsList',
            data: goodsList,
          })
      },
    })
    this.getTotalPrice();
  }, 
  // 输入框监听事件
  listenInput: function (e) {
    var that = this    
    const index = e.currentTarget.dataset.index;
    let goodsList = that.data.goodsList;
    let num = goodsList[index].goodsNums;
     var goodsNum = e.detail.value
     that.setData({
       goodsNum: num
     })
    console.log(num)
  },
// onload页面加载
  onLoad: function () {
  
  },
  /**
 * 生命周期函数--监听页面显示
 */
  onShow: function () {
    var that = this
    if (that.data.goodsList == 0) {
      // console.log("没有")
      that.setData({
        nothing: true
      })
    }
    var goodsList = []
    var orderLists = []
    var lists = {}
    wx.getStorage({
      key: 'goodsList',
      success: function (res) {
        // console.log(res.data)
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
            goodsList: goodsListArr[i]
          })
        }
        // console.log(that.data.goodsList)
        that.getTotalPrice()
      }
    })
  },


  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    // console.log(e)
    //开始触摸时 重置所有删除
    this.data.goodsList.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      goodsList: this.data.goodsList
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.goodsList.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      goodsList: that.data.goodsList
    })
  },
  /**
  * 计算滑动角度
  * @param {Object} start 起点坐标
  * @param {Object} end 终点坐标
  */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  del: function (e) {
    var that = this
    // console.log(e)
    // 删除当前索引值的标签
    wx.showModal({
    title: '提示',
    content: '确定要删除吗？',
    success: function (sm) {
    if (sm.confirm) {
      wx.getStorage({
        key: 'goodsList',
        success: function (res) {
            var goodsLists = res.data
            // console.log(goodsLists)
            var clothes =  e.currentTarget.dataset.clothes
            // var index = e.currentTarget.dataset.index
            // index = clothes
            // console.log(clothes)
            // addressLists.push(list)
            goodsLists.splice(e.currentTarget.dataset.index, 1)
            wx.setStorage({
              key: "goodsList",
              data: goodsLists
            })
            that.setData({
              goodsList: goodsLists
            })
            that.getTotalPrice()
            // that.onShow()
            }
          })
          }else if (sm.cancel) {
              console.log('用户点击取消')
            }
          }
        })
  // this.data.goodsList.splice(e.currentTarget.dataset.index, 1)
  that.getTotalPrice();
  // 删除后重新赋值
  // this.setData({
  //   goodsList: goodsList
  // })
  }
})