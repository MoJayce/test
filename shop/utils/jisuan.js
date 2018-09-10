// // 减
// reduce: function(e) {
//   var that = this
//   console.log(that.data.value)
//   if (that.data.value > 1) {
//     that.setData({
//       value: that.data.value - 1,
//       disabled: false,
//       disableda: false,
//     })
//   }
//   if (that.data.value == 1) {
//     wx.showToast({
//       title: '数量超出范围~',
//       icon: 'none',
//     })
//     that.setData({
//       disabled: true,
//       value: 1
//     })
//     return false
//   }
//   console.log(that.data.disabled)
// }
// module.exports = {
//   reduce: reduce(e)
// }