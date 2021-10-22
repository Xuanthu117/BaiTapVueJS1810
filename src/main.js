import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import store from "./store/store";
import VueRouter from "vue-router";
import vuetify from "../src/plugin/vuetify";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ValidationObserver } from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

import router from "../src/router/router";
new Vue({
  render: (h) => h(App),
  store,
  router,
  vuetify,
  el: "#app",
}).$mount("#app");
