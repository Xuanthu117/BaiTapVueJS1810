<template>
  <div class="province-items">
    <div class="province-item" v-for="province in datas" :key="province.id">
      <span class="text">{{ province.name }}</span>
      <v-icon @click.stop="removeThisProvince(province.code)" :small="true"
        >mdi-close</v-icon
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Chips",
  props: {
    datas: Array,
  },
  methods: {
    removeThisProvince(id) {
      this.$store.dispatch("REMOVE_PROVINCE", id);
    },
  },
};
</script>
