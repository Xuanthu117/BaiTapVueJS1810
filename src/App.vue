<template>
  <div id="app">
    <div class="container">
      <div
        class=""
        style="display:flex; flex-direction:row; justify-content:space-between; align-items:center"
      >
        <div class="header">
          <b>Danh sách</b>
          <small> Danh sách có {{ listDataLength }} bản ghi</small>
        </div>

        <button class="btn" @click="deleteElement">Delete element</button>
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
  methods: {
    deleteElement: function() {
      this.$store.dispatch("deleteElement");
    },
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
