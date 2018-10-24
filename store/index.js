import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },
    actions: {
      increment({commit}){
        commit("INCREMENT")
      },
      decrement({commit}){
        commit("DECREMENT")
      }
    },
    mutations: {
      // 加1
      INCREMENT(state) {
        state.count++;
      },
      // 减1
      DECREMENT(state) {
        state.count--
      }
    }
  })
}
