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
          <tr v-for="item in datas" :key="item.id">
            <td>{{ item.id }}</td>
            <td class="bold">{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.status ? "Hoàn thành" : "Chưa hoàn thành" }}</td>
            <td>
              <router-link v-bind:to="item.link">
                link
              </router-link>
            </td>
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
  data() {
    return {
      headers: [
        {
          text: "STT",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Tên bài tập", value: "name" },
        { text: "Mô tả", value: "description" },
        { text: "trạng thái", value: "status" },
        { text: "link", value: "link" },
      ],
    };
  },
  computed: {
    ...mapState({
      datas: (state) => state.ListHomeWork,
    }),
    listDataLength: function() {
      return 0;
    },
  },
  created() {},
  methods: {},
};
</script>
