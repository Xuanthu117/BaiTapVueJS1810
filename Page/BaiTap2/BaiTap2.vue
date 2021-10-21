<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="4" md="4">
          <div class="progressBar">
            <div class="indicator" :style="{ width: progress }"></div>
          </div>
          <div class="tab-header">
            <div
              class="tab-article"
              v-for="article in articles"
              :key="article.step"
              :class="{
                active: article.step >= currentStep,
                done: article.step < currentStep,
              }"
            >
              <div class="article-step">{{ article.step }}</div>
              <div class="article-name">{{ article.name }}</div>
            </div>
          </div>
          <v-container>
            <ValidationObserver v-slot="{ invalid }">
              <form v-show="currentStep == 1">
                <ValidationProvider
                  name="Name"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <v-row>
                    <v-col md="3">Name</v-col>
                    <v-col md="9">
                      <input
                        type="text"
                        class="input"
                        v-model="formData.name"
                      />
                      <small class="message-warn ">{{ errors[0] }}</small>
                    </v-col>
                  </v-row>
                </ValidationProvider>
                <ValidationProvider
                  name="Email"
                  rules="required|email"
                  v-slot="{ errors }"
                >
                  <v-row>
                    <v-col md="3">Your Email</v-col>
                    <v-col md="9">
                      <input
                        type="text"
                        class="input"
                        v-model="formData.email"
                      />
                      <small class="message-warn ">{{ errors[0] }}</small>
                    </v-col>
                  </v-row>
                </ValidationProvider>
                <v-col fluid align="right">
                  <v-btn @click="nextStep" :disabled="invalid">Tiếp tục</v-btn>
                </v-col>
              </form>
            </ValidationObserver>
            <ValidationObserver v-slot="{ invalid }">
              <form v-show="currentStep == 2">
                <ValidationProvider
                  name="Name"
                  rules="required|alpha"
                  v-slot="{ errors }"
                >
                  <v-row>
                    <v-col md="3">Company Name</v-col>
                    <v-col md="9">
                      <input
                        type="text"
                        class="input"
                        v-model="formData.companyName"
                      />
                      <small class="message-warn ">{{ errors[0] }}</small>
                    </v-col>
                  </v-row>
                </ValidationProvider>
                <ValidationProvider
                  name="Email"
                  rules="required"
                  v-slot="{ errors }"
                >
                  <v-row>
                    <v-col md="3">Number of Company employees</v-col>
                    <v-col md="9">
                      <input
                        type="number"
                        class="input"
                        v-model="formData.employees"
                      />
                      <small class="message-warn ">{{ errors[0] }}</small>
                    </v-col>
                  </v-row>
                </ValidationProvider>

                <v-col fluid align="right">
                  <v-btn @click="nextStep" :disabled="invalid">Tiếp tục</v-btn>
                </v-col>
              </form>
            </ValidationObserver>
            <ValidationObserver v-slot="{}">
              <form @submit.prevent="submit" v-show="currentStep == 3">
                <ValidationProvider>
                  <v-row> From where did you hear about us?</v-row>
                  <v-row>
                    <v-select :items="items" label="" solo></v-select>
                  </v-row>
                </ValidationProvider>
                <ValidationProvider rule="required">
                  <v-row>
                    <v-checkbox
                      v-model="formData.isAccepted"
                      :label="'I Accept terms and conditions'"
                    ></v-checkbox
                  ></v-row>
                  <v-col fluid align="right">
                    <v-btn @click="Submit" :disabled="!formData.isAccepted"
                      >Submit</v-btn
                    >
                  </v-col>
                </ValidationProvider>
              </form>
            </ValidationObserver>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Baitap2",

  data() {
    return {
      items: ["Friens", " Website", "NewsPaper", "Other"],
      formData: {
        name: "Nguy",
        email: "1@gmail.com",
        companyName: "aaa",
        employees: 0,
        source: "",
        isAccepted: false,
      },
      currentStep: 1,

      articles: [
        { step: 1, name: "About you" },
        { step: 2, name: "About your Company" },
        { step: 3, name: "Finishing Up" },
      ],
    };
  },
  computed: {
    progress: function() {
      return (this.currentStep / this.totalSteps) * 100 + "%";
    },
    totalSteps: function() {
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
      this.formData = {
        name: "",
        email: "",
        companyName: "",
        employees: 0,
        source: "",
        isAccepted: false,
      };
    },
  },
  watch: {},
};
</script>
