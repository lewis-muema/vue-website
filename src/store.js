import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    parentName: null,
  },
  mutations: {
    changeParentName(state, payload) {
      state.parentName = payload.pName;
    },
  },
  actions: {},
});
