import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './components/global.vue'

Vue.config.productionTip = false
Vue.prototype.GLOBAL = global
// 在执行路由跳转之前，先判断目标路由是否要登录
router.beforeEach( (to, from, next)=>{
  if (to.meta.needLogin) {
    // 判断sessionStorag里面是否有数据，即是否登录
    if (window.sessionStorage.data) {
      next()
    } else {
      next('/login')
    }
  }
  else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 挂载#app
