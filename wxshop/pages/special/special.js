
const {
  default: api
} = require("../../http/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    topiclist:[],
  },
  // 得到get请求专题的数据
  getTopic(){
    wx.showLoading({
      title: '加载中',
    })
    // this.data.page++
    api.getTopic(this.data.page).then((res)=>{
      // console.log(res);
      // concat 拼接 页数  默认是只有4条数据
      this.data.topiclist=this.data.topiclist.concat(res.data)
      this.setData({
        topiclist:this.data.topiclist
      })
    })
    // console.log(this.data.topiclist);
    wx.hideLoading()
  },
  // 点击去到专题详情页面
  goTopicDetails(e){
    console.log(e);
    let id= e.currentTarget.dataset.item.id
    console.log(id);
    wx.navigateTo({
      url: `/pages/topicDetails/topicDetails?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopic()
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
    this.data.page++ //触底后页面增加
    this.getTopic()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})