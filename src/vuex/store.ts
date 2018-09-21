import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    attention : true,
  },
  mutations: {
    //切换关注的状态
    // handleAttention: state => !state.attention
    handleAttention(state){
      state.attention = !state.attention;
    },
  },
  actions: {

  }
})
