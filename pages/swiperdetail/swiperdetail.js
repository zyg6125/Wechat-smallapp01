// pages/swiperdetail/swiperdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    webviewUrl: "https://www.baidu.com/index.php?tn=monline_3_dg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.test)
    wx.setNavigationBarTitle({
      title: '百度',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    if (options.test == 1) {
      this.setData({ webviewUrl: "http://www.sina.com.cn/" })
      wx.setNavigationBarTitle({
        title: '新浪',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    console.log(this.webviewUrl+"")
    } else if (options.test == 2){
      this.setData({ webviewUrl: "https://mp.weixin.qq.com" })
      wx.setNavigationBarTitle({
        title: '微信',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
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