<template>
  <v-container>
    <v-row>
      <v-col fluid align="left">
        <h2>Danh sách bài tập</h2>
        <p>Intern: Nguyễn Xuân Thu</p>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col md="" align="center">
        <v-simple-table fixed-header>
          <template v-slot:default>
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
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
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
