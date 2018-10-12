import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 这里已经进行全局注入,因此任何组件不需要二次引入,可以直接使用,this.$store
import store from './vuex/index'
import './registerServiceWorker'
import './assets/scss/index.scss';  
import './assets/iconfont/iconfont.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
