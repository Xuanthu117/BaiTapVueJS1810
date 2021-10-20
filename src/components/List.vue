<template>
  <div class="container">
    <div class="header">
      <b> Danh sách</b>
    </div>
    <div class="content">
      <Headers></Headers>
      <Lists></Lists>
    </div>
  </div>
</template>
<script>
import Headers from "./Header.vue";
import Lists from "./Lists.vue";
export default {
  name: "List",
  components: { Headers, Lists },
};
</script>
