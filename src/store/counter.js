
export default {
  state:{
    count: 0
  },
  mutations: {
    increase(state){
      state.count ++ 
    },
    decrease(state){
      state.count --
    }
  },
  actions: {
    increase(context) {
      context.commit('increase')
    },
    decrease(context){
      context.commit('decrease')
    }
  }
}