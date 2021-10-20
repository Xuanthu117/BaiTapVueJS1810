<template>
  <div id="app">
    <List :headerTitle="listHeader" />
  </div>
</template>

<script>
import List from "./components/List.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    List,
  },
  computed: {
    ...mapState({
      listHeader: (state) => state.listHeader,
    }),
  },
  created() {},
};
</script>

<style>
@import "./assets/style.css";
</style>
