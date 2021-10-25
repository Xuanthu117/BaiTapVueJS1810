<template>
  <div>
    <v-app>
      <v-container align="flex-start" justify="center">
        <router-view></router-view>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  components: {},

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

<style lang="scss">
@import "./assets/style.scss";
</style>
