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
        <Button label="Back to Home" backgroundColor="bg-blue-500" :onClick="redirectToHome" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import Button from "@/components/CustomeButton.vue"

const router = useRouter();

const redirectToHome = () => {
  // Perform form submission logic
  router.push("/");
};
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