import Vue from 'vue'
import Router from 'vue-router'
import firstpage from '../components/firstpage/firstpage.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/firstpage'
    },
    {
      path: '/firstpage',
      component: firstpage
    }
  ]
})
