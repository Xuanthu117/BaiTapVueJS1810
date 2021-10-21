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

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

import BaiTap2 from "../Page/BaiTap2/BaiTap2.vue";
import BaiTap1 from "../Page/BaiTap1/BaiTap1.vue";
const router = new VueRouter({
  routes: [
    { path: "/BaiTap1", component: BaiTap2 },
    { path: "/BaiTap1", component: BaiTap1 },
  ],
});
new Vue({
  render: (h) => h(App),
  store,
  router: router,
  vuetify,
}).$mount("#app");
