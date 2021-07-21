import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    setCount(state, value) {
      state.count = value;
    }
  },
  actions: {
    addAction(context) {
      context.commit('setCount', this.getters.getCount + 1)
    },
    delAction(context) {
      context.commit('setCount', this.getters.getCount - 1)
    },
  },
  getters: {
    getCount(state) {
      return state.count
    }
  },
  modules: {}
})