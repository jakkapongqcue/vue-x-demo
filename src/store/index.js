import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    add(state, value) {
      state.count = value;
    }
  },
  actions: {
    addAction(context){
      context.commit('add', this.state.count+1)
    },
    delAction(context){
      context.commit('add', this.state.count+1)
    },
  },
  modules: {}
})