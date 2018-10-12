import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 首页模块
import HomeStore from "./store_modules/homeStore"
// 登陆模块
import LoginStore from "./store_modules/loginStore"
// 注册模块
import RegisterStore from "./store_modules/registerStore"
export default new Vuex.Store({
  modules: {
    // 下面的命名方式是经过推敲的,通过Redux中实践出来的,因此最好这样子规范命名
    home: HomeStore,
    // 登陆模块
    login: LoginStore,
    register:RegisterStore

  }
})
