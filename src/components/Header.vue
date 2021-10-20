<template>
  <div class="list-header">
    <div class="header-text" v-for="item in listHeader" :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Headers",
  computed: {
    // try mapState
    ...mapState({
      listHeader: (state) => state.listHeader,
    }),
  },
};
</script>
