<template>
  <ul class="dropdown-list">
    <li class="dropdown-item" v-for="item in datas" :key="item.id">
      <label>
        <input type="checkbox" v-model="item.isChecked" />
        <img src="../../../src/assets/checkbox.svg" v-show="item.isChecked" />
        <img
          src="../../../src/assets/checkbox_uncheck.svg"
          v-show="!item.isChecked"
        />
        {{ item.name }}
      </label>
    </li>
  </ul>
</template>
<script>
export default {
  name: "List",
  props: { datas: Array },
};
</script>
