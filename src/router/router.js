import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import BaiTap1 from "../../Page/BaiTap1/BaiTap1.vue";
import Home from "../../Page/Home/Home.vue";
import BaiTap2 from "../../Page/BaiTap2/BaiTap2.vue";
import BaiTap3 from "../../Page/BaiTap3/BaiTap3.vue";
export const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home",
      description: "Home",
    },
  },
  {
    path: "/BaiTap1",
    component: BaiTap1,
    meta: {
      title: "Bài tập 1",
      description: "Bài tập 1",
    },
  },
  {
    path: "/BaiTap2",
    component: BaiTap2,
    meta: {
      title: "Bài tập 2",
      description: "Form Validate with Vuejs",
    },
  },
  {
    path: "/BaiTap3",
    component: BaiTap3,
    meta: {
      title: "Bài tập 3",
      description: "Form multi check",
    },
  },
];

export const router = new VueRouter({
  routes,
});

export default router;
