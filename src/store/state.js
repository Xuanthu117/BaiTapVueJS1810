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
      status: false,
      link: "/BaiTap2",
    },
  ],
  currentStep: 1,
  formData: {
    name: "Nguy",
    email: "1@gmail.com",
    companyName: "aaa",
    employees: 0,
    source: "",
    isAccepted: false,
  },
  articles: [
    { step: 1, name: "About you" },
    { step: 2, name: "About your Company" },
    { step: 3, name: "Finishing Up" },
  ],
};
