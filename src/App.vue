<template>
  <div>
    <v-app>
      <!-- <Table :headerTitle="listHeader" /> -->
      <!-- <Home></Home> -->
      <BaiTap2></BaiTap2>
    </v-app>
  </div>
</template>

<script>
// import Home from "../Page/Home/Home.vue";
// import vButton from "../Page/BaiTap2/component/Button.vue";
import BaiTap2 from "../Page/BaiTap2/BaiTap2.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    // Home,
    // vButton,
    BaiTap2,
  },

  computed: {
    ...mapState({
      listHeader: (state) => state.listHeader,
    }),
    listDataLength: function() {
      return this.$store.getters.listDataLength;
    },
    nameButton: function() {
      return "Mở bài tập gần nhất";
    },
  },
  created() {},
  methods: {
    deleteElement: function() {
      this.$store.dispatch("deleteElement");
    },
    DummyFunction: function() {
      alert("ran");
    },
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
