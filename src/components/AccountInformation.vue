<template>
  <!-- Main container -->
  <div class="bg-blue-900 min-h-screen flex items-center justify-center">
    <!-- Content container -->
    <div class="container mx-auto px-4 py-8">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-center text-black mb-8">
        Payment Information
      </h2>

      <!-- Payment details form -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-4">Payment Details</h3>
        <form @submit.prevent="nextStep">
          <!-- Card Number Input -->
          <div class="mb-4">
            <label for="cardNumber" class="block font-medium mb-1"
              >Card Number:</label
            >
            <input
              type="text"
              id="cardNumber"
              v-model="formData.cardNumber"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
            />
          </div>
          <!-- Expiry Date and CVV Input -->
          <div class="grid grid-cols-2 gap-4 mb-4">
            <!-- Expiry Date Input -->
            <div>
              <label for="expiryDate" class="block font-medium mb-1"
                >Expiry Date:</label
              >
              <input
                type="text"
                id="expiryDate"
                v-model="formData.expiryDate"
                required
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
            <!-- CVV Input -->
            <div>
              <label for="cvv" class="block font-medium mb-1">CVV:</label>
              <input
                type="text"
                id="cvv"
                v-model="formData.cvv"
                required
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
              />
            </div>
          </div>
        </form>
      </div>

      <!-- Previous and Next Buttons -->
      <div class="mt-10 flex justify-start">
        <!-- Previous Button -->
        <div class="mr-4">
          <button
            @click="previousStep"
            class="btn-grey w-full bg-gray-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Previous
          </button>
        </div>
        <!-- Next Button -->
        <div>
          <button
            @click="nextStep"
            class="btn w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    // Vuex store and router
    const store = useStore();
    const router = useRouter();
    // Form data
    const formData = ref(store.state.formData);

    // Function to navigate to previous step/page
    const previousStep = () => {
      router.go(-1); // Go back one step
    };

    // Function to navigate to next step/page
    const nextStep = () => {
      store.commit("updateFormData", formData.value);
      router.push("/confirmation");
    };

    return { formData, previousStep, nextStep };
  },
});
</script>

<style scoped>
/* Scoped styles */
.container {
  max-width: 600px; /* Set maximum width */
}

.text-black {
  color: #fff; /* Text color */
}

.bg-blue-900 {
  background-color: #284276; /* Background color */
}
</style>
