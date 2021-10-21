<template>
  <div class="">
    <Headers :headeTitles="listHeader"></Headers>
    <Lists></Lists>
  </div>
</template>
<script>
import Headers from "./Header.vue";
import Lists from "./Lists.vue";
import { mapState } from "vuex";
export default {
  name: "Table",
  components: { Headers, Lists },
  computed: {
    ...mapState({
      listHeader: (state) => state.listHeader,
    }),
  },
  methods: {
    deleteArray: function() {
      this.$store.dispatch("deleteElement");
    },
  },
};
</script>
