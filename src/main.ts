import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
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
