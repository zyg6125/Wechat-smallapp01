// pages/marketsupport/marketsupport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: {
      image: "../../imags/support-banner.jpg",
      title: "9个项目 全力支持4大招生环节",
      subTitle: "——覆盖整个招生周期 保证各环节有力实施——"
    },
    modulesBrief: [
      {
        title: "01 市场活动",
        list: [
          '一元班市场营销活动分享', '学科宣传视频'
        ]
      },
      {
        title: "02 家长会",
        list: [
          '招生家长会PPT', '精选师范DEMO课'
        ]
      },
      {
        title: "03 前台",
        list: [
          '入学测评系统', '纸质宣传品'
        ]
      },
      {
        title: "04 升班",
        list: [
          '北京高思学校升班策划经验', '全年升班学科宣传视频'
        ]
      }
    ],
    modulesContent: [
      {
        title: '市场活动',
        main: [
          {
            listTitle: '一元班市场营销活动分享',
            text: '北京几大培训学校已成功进行的“1元班”，未来也许是每个机构需要的，还不知道怎么推？高思，作为“1元班”创立者，跟您详细分享整场营销活动首末。',
            listImageUrl: '../../imags/list-image-01.jpg',
          },
          {
            listTitle: '学科宣传视频',
            text: '精心设计的学科介绍微视频，学科的特色一览无遗的呈现在家长面前，您可以在微信朋友圈传播分享，也可以在前台、户外进行展示',
            listImageUrl: '../../imags/list-image-01.jpg',
          }
        ]
      },
      {
        title: '家长会',
        main: [
          {
            listTitle: '招生家长会',
            text: '家长会难开？爱学习提供直观展示产品特色的家长会PPT，您可以在此基础上，结合本地情况，轻松策划家长会',
            listImageUrl: '../../imags/list-image-02.jpg',
          },
          {
            listTitle: '精选示范课',
            text: '亲眼看到的好才是真的好！专门打造的、浓缩各学科精华的示范课内容，搭配详细的说明视频，轻松打造让家长眼前一亮的示范课。',
            listImageUrl: '../../imags/list-image-02.jpg',
          }
        ]
      },
      {
        title: '纸质宣传品',
        main: [
          {
            listTitle: '招生家长会',
            text: '· 四个学科九个年级招生简章\n &emsp;&emsp;· 四个学科精美海报、单页\n&emsp;&emsp;· 微信交作业介绍单页',
            listImageUrl: '../../imags/list-image-01.jpg',
          },
          {
            listTitle: '入学测评系统',
            text: '前台到访的潜在学生家长数量，高思多年的招生利器“入学测评”，现在与大家共享。帮家长明确报班需求，帮前台轻松搞定咨询。',
            listImageUrl: '../../imags/list-image-01.jpg',
          }
        ]
      },
      {
        title: '升班策划经验',
        main: [
          {
            listTitle: '招生家长会',
            text: '北京高思学校升班策划经验。 要做好“招”生，更要做好“留”生。高思5年发展至5万学员，现将多年成功升班经验与大家分享。',
            listImageUrl: '../../imags/list-image-01.jpg',
          },
          {
            listTitle: '全年升班学科宣传视频',
            text: '招生季，朋友圈里发一下，通过视频形式，简单易懂的让家长体验下学期的精彩课程。学科视频已帮助高思多次成功“在线推广”。',
            listImageUrl: '../../imags/list-image-01.jpg',
          }
        ]
      }
    ],
    style01listImage01: '../../imags/list-image-01.jpg',
    modulesContentListTitleIcon: "../../imags/list-title-icon.jpg",
    videoList: [
      {
        url: "https://video.aixuexi.com/video.mp4",
        text: '《这个暑假学点啥？三年级-高斯数学》'
      },
      {
        url: "https://video.aixuexi.com/video.mp4",
        text: '《这个暑假学点啥？四年级-思泉语文》'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '营销支持',
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