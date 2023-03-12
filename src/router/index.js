import Home from '@/components/views/Home'
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
    
  ]
})
