export default {
  listData: [],
  listHeader: [
    { name: "Id" },
    { name: "UserId" },
    { name: "Title" },
    { name: "Description" },
  ],
  ListHomeWork: [
    {
      id: 1,
      name: "Bài tập 1",
      description: " Làm quen với Vuex và axios",
      status: true,
      link: "/BaiTap1",
    },
    {
      id: 2,
      name: "Bài tập 2",
      description: "vue-Router và form Validate",
      status: true,
      link: "/BaiTap2",
    },
    {
      id: 3,
      name: "Bài tập 3",
      description: "dropdown checkbox",
      status: true,
      link: "/BaiTap3",
    },
  ],
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    companyName: "",
    employees: 0,
    source: "Friends",
    isAccepted: false,
  },
  articles: [
    { step: 1, name: "About you" },
    { step: 2, name: "About your Company" },
    { step: 3, name: "Finishing Up" },
  ],
  NEW_PROVINCES: [],
  CURRENT_PROVINCES: [],
  IS_STATE_CHANGE: false,
};
