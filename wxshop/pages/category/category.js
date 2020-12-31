const {
  default: api
} = require("../../http/api")

// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [],
    flag: 0,
    list: {}
  },
  // 点击去到大分类商品
  goClassGoods(e) {
    // 这时候没有点击 为undefined 默认传居家的id
    let id = 0
    if (e == undefined) {
      id = 1005000
      this.setData({
        flag: 0
      })
    } else {
      // 当e有值时候
      id = e.currentTarget.dataset.item.id
      this.setData({
        flag: e.currentTarget.dataset.index
      })
    }
    //获取右边现在分类数据
    api.categoryNow(id).then((res) => {
      this.setData({
        list: res.data
      })
    })
  },
  // 点击商品 跳转到小分类
  goSmallClass(e){
    // console.log(e);
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url:`/pages/smallCategory/smallCategory?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取左边分类列表数据
    api.categoryList().then((res) => {
        this.setData({
          categoryList: res.categoryList
        })
      }), 
      this.goClassGoods()





  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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