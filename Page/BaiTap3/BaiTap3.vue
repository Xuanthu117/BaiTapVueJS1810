<template>
  <v-container align="center">
    <v-row align="center">
      <v-col md="4">
        <div class="dropdown">
          <div
            @click="showDropdown"
            class="dropdown-select"
            :class="{ open: isExpanded }"
          >
            <div class="province-list">
              <div
                v-if="provincesChecked.length === 0"
                class="province-placeholder"
              >
                Chọn tỉnh thành
                <v-icon class="icon" x-small>mdi-chevron-down</v-icon>
              </div>

              <Chips :datas="provincesChecked"></Chips>
            </div>
          </div>
          <div class="dropdown-box" v-show="isExpanded">
            <List :datas="CURRENT_PROVINCES"></List>
            <div v-show="CURRENT_PROVINCES.length == 0">No data available</div>
            <div class="dropdown-button">
              <button
                class="button save"
                @click="saveProvince"
                :disabled="!isStateChange"
              >
                Đồng ý
              </button>
              <button class="button cancel" @click="cancelProvince">Hủy</button>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapState } from "vuex";

import List from "./component/Lists.vue";
import Chips from "./component/Chips.vue";
export default {
  name: "BaiTap3",
  components: { List, Chips },
  data() {
    return { checkbox: true, isExpanded: false, isStateChange: false };
  },
  methods: {
    showDropdown: function() {
      this.isExpanded = true;
    },
    closeDropdown: function() {
      this.isExpanded = false;
      this.isStateChange = false;
    },
    fetchData() {
      this.$store.dispatch("GET_PROVINCE");
    },

    saveProvince: function() {
      this.$store.dispatch("SAVE_PROVINCE");
      this.closeDropdown();
    },
    cancelProvince: function() {
      this.$store.dispatch("CANCEL_PROVINCE");
      this.closeDropdown();
    },
  },
  computed: {
    ...mapState(["CURRENT_PROVINCES", "CHECKED_PROVINCES"]),
    ...mapGetters({
      provincesChecked: "PROVINCES_CHECKED",
    }),
  },
  created() {
    this.fetchData();
  },
  watch: {
    provincesChecked: function(val, old) {
      if (val.length !== old.length) {
        this.isStateChange = true;
      } else {
        this.isStateChange = false;
      }
    },
  },
};
</script>
<style scoped>
html,
body {
  font-family: Noto, Arial;
}
</style>
