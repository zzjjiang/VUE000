import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 组件状态
    count: 0
  },
  mutations: {
    increase () {
      this.state.count++
    }
  },
  actions: {

  }
})
