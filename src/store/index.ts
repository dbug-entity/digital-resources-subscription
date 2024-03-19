// store/index.ts
import { createStore } from "vuex";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  subscriptionPlan: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
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
      cardNumber: "",
      expiryDate: "",
      cvv: "",
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
