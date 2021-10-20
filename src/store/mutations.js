export default {
  addList(state, listData) {
    state.listData = listData;
  },
  deleteElement(state) {
    state.listData = state.listData.slice(1, state.listData.length);
    console.log(state.listData.length);
  },
};
