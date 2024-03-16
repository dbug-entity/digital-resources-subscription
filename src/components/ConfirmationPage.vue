<!-- Confirmation.vue -->
<template>
  <div>
    <h2>Step 3: Confirmation</h2>
    <p>Name: {{ formData.name }}</p>
    <p>Email: {{ formData.email }}</p>
    <p>Username: {{ formData.username }}</p>
    <p>Password: ********</p>
    <button @click.prevent="previousStep">Previous</button>
    <button @click.prevent="submitForm">Confirm</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const formData = ref({
      name: "",
      email: "",
      username: "",
      password: "",
    });

    const router = useRouter();

    const previousStep = () => {
      router.push("/account-information");
    };

    const submitForm = () => {
      // Perform form submission logic
      console.log("Form submitted!");
    };

    return { formData, previousStep, submitForm };
  },
});
</script>
