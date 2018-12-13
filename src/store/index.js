import Vue from 'vue'
import vuex from 'vuex'
import counter from './counter'

Vue.use(vuex)

const store = new vuex.Store({
  modules: {
    counter: counter
  }
})

export default store