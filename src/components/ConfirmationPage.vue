<template>
  <!-- Main container -->
  <div class="bg-blue-900 min-h-screen flex items-center justify-center">
    <!-- Content container -->
    <div class="container mx-auto px-4 py-8">
      <!-- Title -->
      <h2 class="text-3xl font-bold text-center text-black mb-8">
        Confirmation
      </h2>

      <!-- Summary section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-4">Summary</h3>
        <!-- User information -->
        <div class="mb-4">
          <p><span class="font-semibold">Name:</span> {{ formData.name }}</p>
          <p><span class="font-semibold">Email:</span> {{ formData.email }}</p>
          <p>
            <span class="font-semibold">Password:</span> {{ formData.password }}
          </p>
        </div>
        <!-- Selected subscription plan -->
        <div class="mb-4">
          <p>
            <span class="font-semibold">Selected Plan:</span>
            {{ formData.subscriptionPlan }}
          </p>
        </div>
        <!-- Payment details -->
        <div class="mb-4">
          <p><span class="font-semibold">Payment Details</span></p>
          <p>
            <span class="font-semibold">Card Number:</span>
            {{ formData.cardNumber }}
          </p>
          <p>
            <span class="font-semibold">Expiry Date:</span>
            {{ formData.expiryDate }}
          </p>
          <p><span class="font-semibold">CVV:</span> {{ formData.cvv }}</p>
        </div>
        <!-- Terms and conditions acceptance -->
        <div class="mb-4">
          <input
            type="checkbox"
            id="terms"
            v-model="termsAccepted"
            class="mr-2"
          />
          <label for="terms" class="text-sm">
            I accept the
            <a href="#" class="underline">terms and conditions</a>.
          </label>
        </div>
        <!-- Confirm button -->
        <button
          @click="confirm"
          :disabled="!termsAccepted"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Confirm
        </button>
      </div>

      <!-- Previous button -->
      <div class="mt-10 flex justify-start">
        <div class="mr-4">
          <button
            @click="previousStep"
            class="btn-grey w-full bg-gray-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Previous
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
    // Form data and terms acceptance
    const formData = store.state.formData;
    const termsAccepted = ref(false);

    // Function to navigate to the previous step/page
    const previousStep = () => {
      router.go(-1); // Go back one step
    };

    // Function to confirm the submission
    const confirm = () => {
      // Perform form submission logic
      router.push("/completion");
    };

    return { formData, previousStep, confirm, termsAccepted };
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
