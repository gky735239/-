import Vue from 'vue'
import VueRouter from 'vue-router'

import firstpage from './firstpage'

// 声明使用vue的扩展插件
Vue.use(VueRouter)

// 创建router对象
let router = new VueRouter()
// 映射路由
router.map({
  '/goods': {
    component: firstpage
  }
})
// 启动路由
router.start(app, '#app')
// 请求默认路由
router.go('/goods')
