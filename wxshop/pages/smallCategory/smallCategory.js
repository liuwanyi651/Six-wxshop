const {
  default: api
} = require("../../http/api");

// pages/smallCategory/smallCategory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: [],
    active: 0,
    list: []
  },

onClick(e) {
  wx.showLoading({
    title: '加载中……',
  })
    console.log(e)
    //  获取分类导航下的商品
    let id =this.data.navData[e.detail.index].id
    api.goodsList(id).then((res) => {
      // console.log(res);
      this.setData({
        list: res.data
      })
    })
    wx.hideLoading()
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取到头部分类导航的数据
    // console.log(options.id);
    // console.log(options.index);
    
    api.categoryNav(options.id).then((res) => {
      res.navData.map((item, index) => {
        if (item.id == Number(options.id)) {
          this.setData({
            active: index / 1,
          })
        }
      })
      this.setData({
        navData: res.navData,
      })
    })
    let id =options.id
    api.goodsList(id).then((res) => {
      this.setData({
        list: res.data
      })
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