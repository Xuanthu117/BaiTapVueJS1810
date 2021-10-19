<template>
  <div id="app">
    <List :headerTitle='[
        { name: "Id" },
        { name: "UserId" },
        { name: "title" },
        { name: "desc1ription" },
      ]' />
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    List,
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
