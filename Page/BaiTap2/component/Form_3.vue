<template>
  <ValidationObserver v-slot="{}">
    <form v-show="currentStep == 3">
      <ValidationObserver v-slot="{}">
        <form @submit.prevent="submit" v-show="currentStep == 3">
          <ValidationProvider>
            <v-row> From where did you hear about us?</v-row>
            <v-row>
              <v-select
                v-model="data.source"
                :items="items"
                label=" From where did you hear about us?"
                menu-props="auto"
                hide-details
                single-line
              ></v-select>
            </v-row>
          </ValidationProvider>
          <ValidationProvider rule="required">
            <v-row>
              <v-checkbox
                v-model="data.isAccepted"
                :label="'I Accept terms and conditions'"
              ></v-checkbox
            ></v-row>
            <v-col fluid align="right">
              <v-btn @click="resetFrom">Reset</v-btn>
              <v-btn @click="Submit" :disabled="!data.isAccepted">Submit</v-btn>
            </v-col>
          </ValidationProvider>
        </form>
      </ValidationObserver>
    </form>
  </ValidationObserver>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Form1",
  props: {
    formData: Object,
  },
  data() {
    return {
      items: ["Friends", " Website", "NewsPaper", "Other"],
    };
  },
  computed: {
    ...mapState({
      currentStep: (state) => state.currentStep,
      data: (state) => state.formData,
    }),
  },
  methods: {
    Submit: function() {
      console.log(this.formData);
    },
    resetFrom: function() {
      this.$store.dispatch("resetForm");
    },
  },
};
</script>
