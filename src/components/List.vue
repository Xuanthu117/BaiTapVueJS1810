<template>
  <div class="container">
    <div class="header">
      <b> Danh sách</b>
      <small>
        Số bản ghi: <span class="">{{ data.length }}</span> bản ghi.
      </small>
    </div>
    <div class="content">
      <div class="list-header">
        <div class="header-text" v-for="item in headerTitle" :key="item.name">
          {{ item.name }}
        </div>
      </div>
      <ul class="list">
        <li class="list-item" v-for="item in data" :key="item.id">
          <div class="id">{{ item.id }}</div>
          <div class="userId">{{ item.userId }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="description">{{ item.body }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
const link = "https://jsonplaceholder.typicode.com/posts";

export default {
  name: "List",
  props: {
    headerTitle: Array,
  },
  computed: {
    ...mapState({
      data: (state) => state.listData,
    }),
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const self = this;
      axios
        .get(link)
        .then(function(response) {
          self.$store.dispatch("addList", response.data);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {});
    },
  },
};
</script>
