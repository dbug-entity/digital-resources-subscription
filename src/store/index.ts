// store/index.ts
import { createStore } from "vuex";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  subscriptionPlan: string;
}

interface State {
  formData: FormData;
}

export default createStore<State>({
  state: {
    formData: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      subscriptionPlan: "",
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
  },
  actions: {},
  modules: {},
});
