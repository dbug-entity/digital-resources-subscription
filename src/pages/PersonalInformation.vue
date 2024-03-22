<template>
  <!-- Main container -->
  <div class="bg-blue-900 min-h-screen flex flex-col items-center justify-center">
    <!-- Top text -->
    <div class="top-text text-white text-3xl text-center font-bold pb-8 mb-8">
      Online subscription for digital resource library
    </div>

    <!-- Personal Information form -->
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-4 md:mx-auto flex flex-col md:flex-row md:items-center">
      <!-- Adjusted padding -->
      <!-- Image -->
      <img :src="imagePath" alt="Image" class="object-cover w-full h-auto rounded-lg md:w-1/2 md:h-full" />

      <!-- Form -->
      <div class="w-full px-4 md:w-1/2 md:px-8 py-4 md:py-0">
        <h2 class="text-2xl font-semibold mb-6 text-center">
          Add Personal Information
        </h2>
        <form @submit.prevent="nextPage">
          <!-- Name input -->
          <div class="mb-4">
            <label for="firstName" class="block font-medium mb-1">Name:</label>
            <input type="text" id="firstName" v-model="formData.name" required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white" />
          </div>
          <!-- Email input -->
          <div class="mb-4">
            <label for="email" class="block font-medium mb-1">Email:</label>
            <input type="email" id="email" v-model="formData.email" required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white" />
          </div>
          <!-- Password input -->
          <div class="mb-4">
            <label for="password" class="block font-medium mb-1">
              Password:
            </label>
            <input type="password" id="password" v-model="formData.password" required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white" />
          </div>
          <!-- Next button -->
          <Button type="submit" label="Next" backgroundColor="bg-blue-500" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useFormDataStore from "@/stores/index";
import { useRouter } from "vue-router";
import Button from "@/components/CustomeButton.vue"
import imagePath from "@/assets/5500661.jpg"

// Pinia store and router
const formDataStore = useFormDataStore();
const router = useRouter();
// Form data
const formData = ref(formDataStore.formData);

// Function to navigate to next step
const nextPage = () => {
  formDataStore.updateFormData(formData.value);
  router.push("/subscription");
};

</script>

<style scoped>
/* Scoped styles */
.bg-blue-900 {
  background-color: #284276;
  display: flex;
  /* Makes the container a flex container */
  flex-direction: column;
}

.top-text {
  /* Added styles for top text */
  padding: 1rem;
}
</style>