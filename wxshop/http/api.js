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
  },
  // 获取分类列表数据 get
  categoryList(){
      return fly.get(`category/indexaction`)
    },
  // 获取当前分类数据 get  参数:id:分类id
  categoryNow(id){
    return fly.get(`category/currentaction?id=${id}`)
  },
  // 获取首页分类导航数据 get 参数id: 分类导航id
  categoryNav(id){
    return fly.get(`category/categoryNav?id=${id}`)
  },
  // 获取分类导航下的商品 get 参数id: 分类导航id
  goodsList(id){
    return fly.get(`goods/goodsList?categoryId=${id}`)
  },
  // 登录 (post): /login 参数是wx.login获取到的code
  login(code){
    return fly.post(`/login`,{code})
  }
}