import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    count: 0,
    Courses: [],
  },
  mutations: {
    setCount(state, value) {
      state.count = value;
    },
    setCourses(state, value) {
      state.Courses.push(value)
      // state.Courses = value
    },
    deleteCourse(state, value) {
      state.Courses.splice(value, 1)
    }
  },
  actions: {
    addAction(context) {
      context.commit('setCount', this.getters.getCount + 1)
    },
    delAction(context) {
      context.commit('setCount', this.getters.count - 1)
    },
    // addCourses(context, value) {
    //   context.commit('setCourses', this.state.Courses.push(value))
    //   console.log(this.state.Courses);
    // }
  },
  getters: {
    getCount(state) {
      return state.count
    },
    //or
    count: state => state.count,
    Courses: state => state.Courses,
  },
  modules: {}
})