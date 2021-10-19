import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import getters from './getter.js';
import mutations from './mutations';
import actions from './actions';

export default new Vuex.Store({
  state: {
    listData: [],
  },
  getters,
  mutations,
  actions,
});
