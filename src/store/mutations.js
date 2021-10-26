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
    data.forEach((element) => {
      element.isChecked = false;
    });
    state.CURRENT_PROVINCES = data;
    state.CHECKED_PROVINCES = data.map((a) => Object.assign({}, a));
    state.IS_STATE_CHANGE = false;
  },

  REMOVE_PROVINCE(state, id) {
    state.CURRENT_PROVINCES.forEach((province) => {
      if (province.code == id) {
        province.isChecked = false;
      }
    });
    const obj0 = state.CURRENT_PROVINCES.map((a) => Object.assign({}, a));
    state.CHECKED_PROVINCES = obj0;
    state.IS_STATE_CHANGE = false;
  },
  SAVE_PROVINCE(state) {
    const obj1 = state.CURRENT_PROVINCES.map((a) => Object.assign({}, a));
    state.CHECKED_PROVINCES = obj1;

    state.IS_STATE_CHANGE = false;
  },
  CANCEL_PROVINCE(state) {
    const obj2 = state.CHECKED_PROVINCES.map((a) => Object.assign({}, a));
    state.CURRENT_PROVINCES = obj2;
    state.IS_STATE_CHANGE = false;
  },
  CHANGE_PROVINCE_CHECK(state, code) {
    state.CURRENT_PROVINCES.forEach((item) => {
      if (item.code == code) {
        item.isChecked = !item.isChecked;
      }
    });
  },
};
