<template>
  <ul class="list">
    <li class="list-item" v-for="item in Datas" :key="item.id">
      <div class="id">{{ item.id }}</div>
      <div class="userId">{{ item.userId }}</div>
      <div class="title">{{ item.title }}</div>
      <div class="description">{{ item.body }}</div>
    </li>
  </ul>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Lists",
  computed: {
    ...mapState({
      Datas: (state) => state.listData,
    }),
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch("getList");
    },
  },
};
</script>
