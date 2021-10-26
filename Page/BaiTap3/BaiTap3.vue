<template>
  <v-row align="center">
    <v-col fluid>
      <List></List>
      <Chips></Chips>
    </v-col>
  </v-row>
</template>
<script>
import List from "./component/Lists.vue";
import Chips from "./component/Chips.vue";
export default {
  name: "BaiTap3",
  components: { List, Chips },

  methods: {},
  computed: {},
};
</script>
<style scoped>
html,
body {
  font-family: Noto, Arial;
}
</style>
