import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import getters from "./getter.js";
import mutations from "./mutations";
import actions from "./actions";

export default new Vuex.Store({
  state: {
    listData: [],
    listHeader: [
      { name: "Id" },
      { name: "UserId" },
      { name: "Title" },
      { name: "Description" },
    ],
  },
  getters,
  mutations,
  actions,
});
