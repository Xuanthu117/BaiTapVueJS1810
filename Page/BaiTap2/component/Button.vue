<template>
  <button class="btn" @click="actions" :disabled="isDisabled">
    {{ name }}
  </button>
</template>
<script>
export default {
  name: "vButton",
  props: {
    name: String,
    color: String,
    actions: Function,
    isDisabled: Boolean,
  },
};
</script>
