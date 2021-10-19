<template>
  <div class="container">
    <div class="header">
      <b> Danh sách</b>
      <small>
        Số bản ghi: <span class="">{{ data.length }}</span> bản ghi.</small
      >
    </div>
    <div class="content">
      <div class="list-header">
        <div v-for="item in header" :key="item.name">{{ item.name }}</div>
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
const link = "https://jsonplaceholder.typicode.com/posts";
export default {
  name: "List",
  data() {
    return {
      header: [
        {name: "Id"},
        {name: "UserId"},
        {name: "title"},
        {name: "description"},
      ],
    };
  },
  computed: {
    data() {
      return this.$store.state.listData;
    },
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
          // console.log(self.$store.state.listData);
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
