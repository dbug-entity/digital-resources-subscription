<template>
  <div class="bg-blue-900 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center text-black mb-8">Completion</h2>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-4">
          Thank you for your submission!
        </h3>
        <p class="mb-4">Your subscription has been successfully processed.</p>
        <p class="mb-4">
          Please check your email for further instructions on how to access your
          subscription or any next steps.
        </p>
        <button
          @click="redirectToHome"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
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

    const redirectToHome = () => {
      // Perform form submission logic
      router.push("/");
    };

    return { formData, previousStep, redirectToHome };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
}

.text-black {
  color: #fff;
}

.bg-blue-900 {
  background-color: #284276;
}
</style>
