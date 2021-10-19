<template>
  <div id="app">
    <List />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: auto;
  max-width: 1024px;
}
html {
  background-color: #f6f7f2;
  font-family: "Helvetica Neue", Helvetica, Arial;
}
.list {
  padding: 0;
  overflow: unset;
}
.userId {
  text-align: center;
  width: 50px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.id {
  text-align: center;
  width: 75px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-weight: bold;
  width: 30%;
  padding: 3px;
  display: flex;
  align-items: center;
  text-align: left;
}
.description {
  font-weight: normal;
  width: calc(100% - 30% - 125px);
  padding: 3px;
  text-align: left;
}
.list-item {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  justify-content: center;
}

.list-header {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  justify-content: center;
}
.list-header > div {
  font-weight: bold;
}
.btn {
  background-color: green;
  color: white;
  border-radius: 3px;
  border: none;
  padding: 5px;
  height: 30px;
  cursor: pointer;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 15px;
}
</style>
