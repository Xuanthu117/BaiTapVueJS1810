<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="4" md="4">
          <progressBar :progress="progress"></progressBar>
          <Tab></Tab>
          <v-container>
            <Form1 :formData="formData"></Form1>
            <Form2 :formData="formData"></Form2>
            <Form3 :formData="formData"></Form3>
          </v-container>
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
      formData: {
        name: "Nguy",
        email: "1@gmail.com",
        companyName: "aaa",
        employees: 0,
        source: "",
        isAccepted: false,
      },
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
  methods: {
    gotoStep: function(step) {
      this.currentStep = step;
    },
    backStep: function() {
      this.currentStep = this.currentStep - 1;
    },
    nextStep: function() {
      this.currentStep = this.currentStep + 1;
    },
    Submit: function() {
      console.log(this.formData);
    },
    Reset: function() {
      this.$store.dispatch("ResetForm");
    },
  },
  watch: {},
};
</script>
