// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      // { name: "pic0", url: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
      { name: "pic0", url: "../../imags/viewpager0.png" },
      { name: "pic1", url: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
      { name: "pic2", url: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 2000,
    circular: true,
  },
  click(params) {
    console.log(params.target.dataset.picurl)
    var param = params.target.dataset.picurl;
    var test;
    if (param == "pic0") {
      // wx.navigateTo({
      //  // url: '../work/home?test=123',
      //   url: '../swiperdetail/swiperdetail?test=123',
      // })
      test = 0;
    } else if (param == "pic1") {

      test = 1;
    } else if (param == "pic2") {
      test = 2;
    }

    wx.navigateTo({
      url: '../swiperdetail/swiperdetail?test=' + test,
    })
  },
  skiptoduo:function(){
    wx.switchTab({
      url: '/pages/teachmaterial/teachmaterial',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '首页',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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