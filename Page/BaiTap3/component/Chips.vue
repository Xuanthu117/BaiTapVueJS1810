<template>
  <div class="province-items">
    <div class="province-item" v-for="province in datas" :key="province.id">
      <small class="text">{{ province.name }}</small>
      <v-icon
        @click.stop="removeThisProvince(province.code)"
        :x-small="true"
        size="14"
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
