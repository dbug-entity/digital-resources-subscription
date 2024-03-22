// store/index.ts
import { defineStore } from "pinia";

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

const useFormDataStore = defineStore('formData', {
  state: (): {formData: FormData} => ({
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
  }),
  actions: {
    updateFormData(payload: Partial<FormData>) {
      this.formData = { ...this.formData, ...payload };
    },
  },
});

export default useFormDataStore;


