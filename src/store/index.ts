// store/index.ts
import { createStore } from "vuex";

interface FormData {
  name: string;
  email: string;
  username: string;
  password: string;
}

interface State {
  formData: FormData;
}

export default createStore<State>({
  state: {
    formData: {
      name: "",
      email: "",
      username: "",
      password: "",
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
