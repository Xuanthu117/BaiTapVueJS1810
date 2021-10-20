<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <b>Danh sách</b>

        <small> Danh sách có {{ listDataLength }} bản ghi</small>
      </div>
      <Table :headerTitle="listHeader" />
    </div>
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
    listDataLength: function() {
      return this.$store.getters.listDataLength;
    },
  },
  created() {},
};
</script>

<style>
@import "./assets/style.css";
</style>
