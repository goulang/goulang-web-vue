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
// import "."
// <link rel="stylesheet" href="/static/editormd/css/editormd.min.css">

// <!-- <link rel="stylesheet" href="/static/editormd/examples/css/style.css" /> -->
// <link rel="stylesheet" href="/static/editormd/css/editormd.preview.min.css" />
// import "./static/editormd/css/editormd.css"
// import "./static/editormd/jquery.min.js"
// import "./static/editormd/editormd.min.js"
// import  VueQuillEditor from 'vue-quill-editor'
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
Vue.config.productionTip = false

Vue.use(iView)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
