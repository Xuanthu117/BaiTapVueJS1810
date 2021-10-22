<template>
  <div class="progressBar">
    <div class="indicator" :style="{ width: progressWidth }"></div>
  </div>
</template>
<script>
export default {
  name: "progressBar",
  props: {
    progress: Number,
  },
  computed: {
    progressWidth: function() {
      console.log(this.progress);
      return this.progress * 100 + "%";
    },
  },
  created: function() {},
};
</script>
