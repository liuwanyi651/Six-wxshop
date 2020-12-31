const {
  default: api
} = require("../../http/api");
//这个路径是你项目中的路径，别弄错咯
const WxParse = require("../../wxParse/wxParse.js")
// pages/topicDetails/topicDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options); 拿到传过来的id
    api.getTopicDetail(options.id).then((res) => {
      // console.log(res);
      // 格式：WxParse.wxParse(参数1, 参数2, 参数3, 参数4, 参数5);
      //       参数说明：
      // 参数1.bindName绑定的数据名(必填)
      // 参数2.type可以为html或者md(必填)
      // 参数3.data为传入的具体数据(必填)
      // 参数4.target为Page对象,一般为this(必填)
      // 参数5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
      WxParse.wxParse('arr', 'html', res.data.content, this)
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