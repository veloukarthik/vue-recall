import { createStore } from 'vuex';

const store = createStore({
  state: { count: 0, items:['item 1', 'item 2', 'item 3'] },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => commit("increment"), 1000);
    },
    asyncDecrement({ commit }) {
      setTimeout(() => commit("decrement"), 1000);
    }
  },
});

export default store;
