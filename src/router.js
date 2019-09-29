import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        needLogin: false
      }
    },
    {
      path: '/login',
      name: 'login',
      // component: Login
      // 这种写法可以免去开头导入包操作
      component: () => import('./views/Login.vue'),
      meta: {
        needLogin: false
      }
    },
    {
      path: '/houseInfo',
      name: 'houseInfo',
      component: () => import('./views/HouseInfo.vue'),
      meta: {
        needLogin: false
      }
    },
    {
      // 先登录在跳转
      path: '/addHouseInfo',
      name: 'addHouseInfo',
      component: () => import('./views/AddHouseInfo.vue'),
      meta: {
        needLogin: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue'),
      meta: {
        needLogin: true
      }
    }
  ],
  // 解决问题：跳转页面不在页面顶部
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }

})
