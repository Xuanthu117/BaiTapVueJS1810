<template>
  <ul class="answer-error">
    <li v-for="error in errors.collect(ValueName)" :key="error.id">
      {{ error }}
    </li>
  </ul>
</template>

<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

export default {
  name: "validateerror",
  props: {
    ValueName: String,
  },
};
</script>
