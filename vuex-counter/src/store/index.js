import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
  mutations: {
    setCounter(state, payload) {
      state.counter = payload;
    },
  },
  actions: {
    incrementCounter({ commit, state }) {
      console.log(state.counter);
      commit("setCounter", state.counter + 1);
    },
    decrementCounter({ commit, state }) {
      console.log(state.counter);
      commit("setCounter", state.counter - 1);
    },
  },
});
