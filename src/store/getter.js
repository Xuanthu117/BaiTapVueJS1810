export default {
  listData: (state) => state.listData,
  listHeader: (state) => state.listHeader,
  listDataLength: (state) => state.listData.length,
  currentStep: (state) => state.currentStep,
  articles: (state) => state.articles,
  formData: (state) => state.formData,
  PROVINCES: (state) => state.PROVINCES,
  PROVINCES_CHECKED: (state) =>
    state.PROVINCES.filter((provinces) => provinces.isChecked == true),
};
