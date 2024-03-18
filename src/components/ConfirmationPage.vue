// ConfirmationPage.vue
<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Step 3: Confirmation</h2>
    <p>Name: {{ formData.name }}</p>
    <p>Email: {{ formData.email }}</p>
    <p>Username: {{ formData.username }}</p>
    <p>Password: ********</p>
    <button @click.prevent="previousStep" class="btn">Previous</button>
    <button @click.prevent="submitForm" class="btn">Confirm</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const formData = store.state.formData;

    const previousStep = () => {
      router.go(-1); // Go back one step
    };

    const submitForm = () => {
      // Perform form submission logic
      console.log("Form submitted!");
    };

    return { formData, previousStep, submitForm };
  },
});
</script>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
