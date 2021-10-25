<template>
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
            <input type="text" class="input" v-model="data.name" />
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
            <input type="text" class="input" v-model="data.email" />
            <small class="message-warn ">{{ errors[0] }}</small>
          </v-col>
        </v-row>
      </ValidationProvider>
      <v-col fluid align="right">
        <v-btn @click="nextStep" :disabled="invalid">Tiếp tục</v-btn>
      </v-col>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Form1",
  props: {},
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
  },
};
</script>
