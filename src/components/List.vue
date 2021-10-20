<template>
  <div class="container">
    <div class="header">
      <b> Danh sách</b>
    </div>
    <div class="content">
      <Headers :headeTitles="listHeader"></Headers>
      <Lists></Lists>
    </div>
  </div>
</template>
<script>
import Headers from "./Header.vue";
import Lists from "./Lists.vue";
import { mapState } from "vuex";
export default {
  name: "List",
  components: { Headers, Lists },
  computed: {
    // try mapState
    ...mapState({
      listHeader: (state) => state.listHeader,
    }),
  },
};
</script>
