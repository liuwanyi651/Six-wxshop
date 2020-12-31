const { default: api } = require("../../http/api");

// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[
     {
      icon:'balance-list-o',
      name:'我的订单',
      path:''
     },
     {
      icon:'medal-o',
      name:'优惠券',
      path:''
     },
     {
      icon:'bill-o',
      name:'礼品卡',
      path:''
     },
     {
      icon:'like-o',
      name:'我的收藏',
      path:''
     },
     {
      icon:'eye-o',
      name:'我的足迹',
      path:''
     },
     {
      icon:'vip-card-o',
      name:'会员福利',
      path:''
     },
     {
      icon:'location-o',
      name:'地址管理',
      path:''
     },
     {
      icon:'chat-o',
      name:'账号安全',
      path:''
     },
     {
      icon:'phone-o',
      name:'联系客服',
      path:''
     },
     {
      icon:'question-o',
      name:'帮助中心',
      path:''
     },
     {
      icon:'notes-o',
      name:'意见反馈',
      path:''
     }
    ],
    userInfo:"",
  },
  getUser(e){
    let userInfo = e.detail.userInfo
    console.log(e.detail.userInfo); //拿到微信登录用户信息
    wx.setStorageSync('userInfo', JSON.stringify(userInfo)) //存键和值
    if(userInfo){
      // 用户允许登录
      wx.login({
        success(res){
          console.log(res);//拿到code
          api.login(res.code).then((res)=>{
            console.log(res); //拿到openid
          })
        }
      })
    }else{
      // 用户拒绝登录
      wx.showToast({
        title: '授权登录失败',
        icon: 'none',
        duration: 2000
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 读取用户基本信息
     let userInfo = wx.getStorageSync('userInfo')
     if(userInfo){
       // 更新userInfo的状态
       this.setData({
         userInfo:JSON.parse(userInfo)
       })
      //  console.log(this.data.userInfo);
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