<template>
  <div class="container">
    <div class="content">
      <table class="table ">
        <thead>
          <tr>
            <td>STT</td>
            <td>Tên bài tập</td>
            <td>Mô tả</td>
            <td>Trạng thái</td>
            <td>...</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td class="bold">{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.status ? "Hoàn thành" : "Chưa hoàn thành" }}</td>
            <td><a :href="item.link">link</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState({
      data: (state) => state.ListHomeWork,
    }),
    listDataLength: function() {
      return 0;
    },
  },
  created() {},
  methods: {},
};
</script>
