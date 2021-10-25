import axios from "axios";
export default {
  getList({ commit }) {
    const link = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(link)
      .then(function(response) {
        commit("addList", response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  },
  deleteElement({ commit }) {
    commit("deleteElement");
  },
  nextStep({ commit }) {
    commit("nextStep");
  },
  previousStep({ commit }) {
    commit("previousStep");
  },
  resetForm({ commit }) {
    commit("resetForm");
  },
  GET_PROVINCE({ commit }) {
    const link = "https://provinces.open-api.vn/api/";
    axios
      .get(link)
      .then(function(response) {
        commit("GET_PROVINCES", response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {});
  },
  REMOVE_PROVINCE({ commit }, provinceID) {
    commit("REMOVE_PROVINCE", provinceID);
  },
  SAVE_PROVINCE({ commit }) {
    commit("SAVE_PROVINCE");
  },
  CANCEL_PROVINCE({ commit }) {
    commit("CANCEL_PROVINCE");
  },
};
