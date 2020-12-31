// components/channel/channel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    channel:{type:Array}
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goSmallClass(e){
      console.log(e);
      let id = e.currentTarget.dataset.item.id
      wx.navigateTo({
        url:`/pages/smallCategory/smallCategory?id=${id}`,
      })
    },
  }
})
