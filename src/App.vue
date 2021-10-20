<template>
  <div id="app">
    <div class="">
      <h2>Danh sách</h2>
      <br />
      <!-- <small> Danh sách có {{ listDataLength }} bản ghi</small> -->
    </div>
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
    listDataLength: function() {
      console.log(this.$store.getter.listDataLength);
      return this.$store.getter.listDataLength;
    },
  },
  created() {},
};
</script>

<style>
@import "./assets/style.css";
</style>
