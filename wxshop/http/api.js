const fly = require('./index')

export default {
  //获取首页数据
  getHome() {
    return fly.get(`index/index`)
  },
  // 获取专题数据 参数:page:请求页数
  getTopic(page){
    return fly.get(`topic/listaction?page=${page}`)
  },
  // 获取专题详情数据 参数:id:专题id
  getTopicDetail(id){
    return fly.get(`topic/detailaction?id=${id}`)
  }
}