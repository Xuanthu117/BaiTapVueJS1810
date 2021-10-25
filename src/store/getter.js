export default {
  listData: (state) => state.listData,
  listHeader: (state) => state.listHeader,
  listDataLength: (state) => state.listData.length,
  currentStep: (state) => state.currentStep,
  articles: (state) => state.articles,
  formData: (state) => state.formData,
  PROVINCES_CHECKED: (state) =>
    state.CURRENT_PROVINCES.filter((province) => province.isChecked === true),
};
