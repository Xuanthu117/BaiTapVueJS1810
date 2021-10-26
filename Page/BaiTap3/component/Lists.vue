<template>
  <div class="dropdown">
    <div
      @click="showDropdown"
      class="dropdown-select"
      :class="{ open: isExpanded }"
    >
      <div class="province-placeholder">
        Chọn tỉnh thành
        <v-icon class="icon" x-small>mdi-chevron-down</v-icon>
      </div>
    </div>
    <div class="dropdown-box" v-show="isExpanded">
      <ul class="dropdown-list">
        <li
          class="dropdown-item"
          v-for="item in CURRENT_PROVINCES"
          :key="item.id"
        >
          <label>
            <input
              type="checkbox"
              :checked="item.isChecked"
              @change="changeItem(item.code)"
            />
            <img
              src="../../../src/assets/checkbox.svg"
              v-show="item.isChecked"
            />
            <img
              src="../../../src/assets/checkbox_uncheck.svg"
              v-show="!item.isChecked"
            />
            {{ item.name }}
          </label>
        </li>
      </ul>
      <div v-show="CURRENT_PROVINCES.length == 0" class="empty-list">
        No data available
      </div>
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
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "List",
  data() {
    return { isExpanded: false, isStateChange: false };
  },
  props: { datas: Array },
  methods: {
    fetchData() {
      this.$store.dispatch("GET_PROVINCE");
    },
    changeItem(code) {
      this.isStateChange = true;
      this.$store.dispatch("CHANGE_PROVINCE_CHECK", code);
    },
    closeDropdown: function() {
      this.isExpanded = false;
      this.isStateChange = false;
    },
    showDropdown: function() {
      this.isExpanded = true;
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
    ...mapState(["CURRENT_PROVINCES"]),
  },

  created() {
    this.fetchData();
  },

  watch: {
    provincesChecked: function(val, old) {
      if (this.isExpanded) {
        if (val.length !== old.length) {
          this.isStateChange = true;
        } else {
          this.isStateChange = false;
        }
      } else {
        this.isStateChange = false;
      }
    },
  },
};
</script>
