<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col>
          <h4>{{ title }}</h4>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="4" md="4">
          <progressBar :progress="progress"></progressBar>
          <Tab></Tab>
          <v-card elevation="4">
            <v-container>
              <v-col fluid>
                <Form1></Form1>
                <Form2></Form2>
                <Form3></Form3>
              </v-col>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import progressBar from "../../Page/BaiTap2/component/progressBar.vue";
import Tab from "../../Page/BaiTap2/component/Tab.vue";
import Form1 from "../../Page/BaiTap2/component/Form_1.vue";
import Form2 from "../../Page/BaiTap2/component/Form_2.vue";
import Form3 from "../../Page/BaiTap2/component/Form_3.vue";

import { mapState } from "vuex";
export default {
  name: "BaiTap2",
  components: { progressBar, Tab, Form1, Form2, Form3 },
  data() {
    return {
      title: "BaiTap2",
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles,
      currentStep: (state) => state.currentStep,
    }),

    progress: function() {
      return (this.currentStep - 1) / this.articles.length;
    },
    totalStep: function() {
      return this.articles.length;
    },
  },
  methods: {},
  watch: {},
};
</script>
