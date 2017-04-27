import Vue from 'vue'
import router from 'vue-router'
import VueResource from 'vue-resource'
import app from './App'

Vue.use(VueResource)

new Vue({
  el:'#app',
  router,
  templete: '<app/>',
  components:{app}
})

