import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 数据存储在内存中，刷新网页后消失
export default new Vuex.Store({
  state: {
    // inRegister用来处理点击头条栏的登录/注册用的
    isRegister: false,
    // addHouseInfotoHouseList
    HouseList: []
  },
  mutations: {
    //chIsReg:点击头条栏的注册会有个true值给isRegister
    // PageTopBar->store->loginId
    chIsReg (state, value) {
      state.isRegister = value
    },
    show (state,value) {
      state.HouseList.push(value)
    }
  },
  actions: {

  }
})
