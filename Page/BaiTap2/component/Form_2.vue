<template>
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
            <input type="text" class="input" v-model="data.companyName" />
            <small class="message-warn ">{{ errors[0] }}</small>
          </v-col>
        </v-row>
      </ValidationProvider>
      <ValidationProvider name="Email" rules="required" v-slot="{ errors }">
        <v-row>
          <v-col md="3">Number of Company employees</v-col>
          <v-col md="9">
            <input type="number" class="input" v-model="data.employees" />
            <small class="message-warn ">{{ errors[0] }}</small>
          </v-col>
        </v-row>
      </ValidationProvider>

      <v-col fluid align="right">
        <v-btn @click="backStep">Quay lai</v-btn>
        <v-btn @click="nextStep" :disabled="invalid">Tiếp tục</v-btn>
      </v-col>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Form1",
  computed: {
    ...mapState({
      data: (state) => state.formData,
      currentStep: (state) => state.currentStep,
    }),
  },
  methods: {
    nextStep: function() {
      this.$store.dispatch("nextStep");
    },
    backStep: function() {
      this.$store.dispatch("backStep");
    },
  },
};
</script>
