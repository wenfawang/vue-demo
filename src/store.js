import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    include: [],
  },
  mutations: {
    includeAdd(state, payload) {
      state.include.push(payload);
    },
    includeMinus(state, payload) {
      state.include.splice(state.include.findIndex(item => item === payload), 1);
    },
  },
  actions: {},
});
