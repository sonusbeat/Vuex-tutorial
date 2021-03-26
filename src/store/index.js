import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1000
  },
  mutations: {
    increase(state, payload) {
      state.counter = state.counter + payload;
    },
    decrease(state, payload) {
      if(state.counter > 0) state.counter = state.counter - payload;
    }
  },
  actions: {
    increaseAction({ commit }, number) {
      commit('increase', number);
    },
    decreaseAction({ commit }, number) {
      commit('decrease', number);
    },
    buttonAction({ commit }, object) {
      if (object.state) {
        commit('increase', object.number);
      } else {
        commit('decrease', object.number);
      }
    }
  },
  modules: {
  }
})
