<template>
  <div class="dropdown-select" v-show="provincesChecked.length > 0">
    <div class="province-items">
      <div
        class="province-item"
        v-for="province in provincesChecked"
        :key="province.id"
      >
        <span class="text">{{ province.name }}</span>
        <v-icon @click.stop="removeThisProvince(province.code)" :small="true"
          >mdi-close</v-icon
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Chips",

  methods: {
    removeThisProvince(id) {
      this.$store.dispatch("REMOVE_PROVINCE", id);
    },
  },
  computed: {
    ...mapGetters({
      provincesChecked: "PROVINCES_CHECKED",
    }),
  },
};
</script>
