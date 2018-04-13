// pages/work/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imageUrl:"../../imags/push.png",
   videoUrl:"../../videos/w.mp4",
   text_content:"json文件负责配置ActionBar颜色，我们只需要在里面添加如下代码即可，下图有参数说明！",
   imgUrls: [
     'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
     'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
     'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
   ],
   indicatorDots: true,
   autoplay: true,
   interval: 3000,
   duration: 2000,
   circular:true,
   src: '',
   inputValue: '',
   danmuList: [
     {
       text: '第 1s 出现的弹幕',
       color: '#ff0000',
       time: 1
     },
     {
       text: '第 3s 出现的弹幕',
       color: '#ff00ff',
       time: 3
     }]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  confirm:function(){
    wx.showToast({
      title: 'json解析异常',
      icon: 'none',
      image: '',
      duration: 2000,
      mask: false,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log("你好");
  console.log(options.test);
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
  
  },

  getRandomColor: function () {
    let rgb = []
  for (let i = 0 ; i < 3; ++i){
  let color = Math.floor(Math.random() * 256).toString(16)
  color = color.length == 1 ? '0' + color : color
  rgb.push(color)
}
return '#' + rgb.join('')
},


  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
   
  
    bindInputBlur: function(e) {
      this.inputValue = e.detail.value
    },
    bindButtonTap: function() {
      var that = this
      wx.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: ['front', 'back'],
        success: function (res) {
          that.setData({
            src: res.tempFilePath
          })
        }
      })
    },
    bindSendDanmu: function () {
      this.videoContext.sendDanmu({
        text: this.inputValue,
        color:this.getRandomColor()
      })
    }
  
})