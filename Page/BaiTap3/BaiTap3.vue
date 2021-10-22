<template>
  <v-container align="center">
    <v-row align="center">
      <v-col md="4">
        <v-card>
          <div class="dropdown">
            <div @click="showDropdown" class="dropdown-select">
              <div class="province-list">
                <div
                  v-if="provincesChecked.length == 0"
                  class="province-placeholder"
                >
                  Chọn tỉnh thành
                </div>
                <div class="province-items">
                  <div
                    class="province-item"
                    v-for="province in provincesChecked"
                    :key="province.id"
                  >
                    <small class="text">{{ province.name }}</small>
                    <v-icon
                      @click.stop="removeThisProvince(province.code)"
                      :x-small="true"
                      >mdi-close</v-icon
                    >
                  </div>
                </div>
              </div>
              <v-icon>mdi-chevron-down</v-icon>
            </div>
            <div class="dropdown-box" v-show="isExpanded">
              <ul class="dropdown-list">
                <li
                  class="dropdown-item"
                  v-for="province in provinces"
                  :key="province.id"
                >
                  <v-checkbox
                    v-model="province.isChecked"
                    dense
                    :hide-details="true"
                    :label="province.name"
                  >
                  </v-checkbox>
                </li>
              </ul>
              <div class="dropdown-button">
                <v-btn small @click="closeDropdown">Đồng ý</v-btn>
                <v-btn small @click="closeDropdown" dense>Hủy</v-btn>
              </div>
            </div>
          </div>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "BaiTap3",
  data() {
    return { checkbox: true, isExpanded: false };
  },
  methods: {
    showDropdown: function() {
      this.isExpanded = !this.isExpanded;
    },
    fetchData() {
      this.$store.dispatch("GET_PROVINCE");
      console.log(this.provinces);
    },
    removeThisProvince(id) {
      console.log(id);
      this.$store.dispatch("REMOVE_PROVINCE", id);
    },
    closeDropdown: function() {
      this.isExpanded = false;
    },
  },
  computed: {
    ...mapState({
      provinces: (state) => state.PROVINCES,
      provincesChecked: function() {
        return this.$store.getters.PROVINCES_CHECKED;
      },
      provincesAccept: function() {
        this.isExpanded = false;
      },
      provincesCancle: function() {
        this.isExpanded = false;
      },
    }),
  },
  created() {
    this.fetchData();
  },
};
</script>
<style scoped></style>
