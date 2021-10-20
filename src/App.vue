<template>
  <div id="app">
    <Table :headerTitle="listHeader" />
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Table,
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
