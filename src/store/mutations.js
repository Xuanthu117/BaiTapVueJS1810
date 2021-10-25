export default {
  addList(state, listData) {
    state.listData = listData;
  },
  deleteElement(state) {
    state.listData = state.listData.slice(1, state.listData.length);
    console.log(state.listData.length);
  },
  nextStep(state) {
    state.currentStep = state.currentStep + 1;
  },
  previousStep(state) {
    state.currentStep = state.currentStep - 1;
  },
  resetForm(state) {
    (state.currentStep = 1),
      (state.formData = {
        name: "",
        email: "",
        companyName: "",
        employees: 0,
        source: "",
        isAccepted: false,
      });
  },

  GET_PROVINCES(state, data) {
    state.CURRENT_PROVINCES = data;
    state.CHECKED_PROVINCES = data.map((a) => Object.assign({}, a));
  },

  REMOVE_PROVINCE(state, id) {
    state.CURRENT_PROVINCES.forEach((province) => {
      if (province.code == id) {
        province.isChecked = false;
      }
    });
  },
  SAVE_PROVINCE(state) {
    const a = state.CURRENT_PROVINCES.map((a) => Object.assign({}, a));
    state.CHECKED_PROVINCES = a;
  },
  CANCEL_PROVINCE(state) {
    const b = state.CHECKED_PROVINCES.map((a) => Object.assign({}, a));
    state.CURRENT_PROVINCES = b;
  },
};
// The issue originates from JS itself, as objects are passed by reference, not by value, so Vuex will point to the same object in memory.
