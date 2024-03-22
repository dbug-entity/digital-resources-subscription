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
          <input type="checkbox" id="terms" v-model="termsAccepted" class="mr-2" />
          <label for="terms" class="text-sm">
            I accept the
            <a href="#" class="underline">terms and conditions</a>.
          </label>
        </div>
        <!-- Confirm button -->
        <Button label="Confirm" backgroundColor="bg-blue-500" :onClick="confirm" :disabled="!termsAccepted" />
      </div>

      <!-- Previous button -->
      <div class="mt-10 flex justify-start">
        <div class="mr-4">
          <Button label="Previous" backgroundColor="bg-gray-400" :onClick="previousPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useFormDataStore from "@/stores/index";
import Button from "@/components/CustomeButton.vue";
import { useRouter } from "vue-router";

const formDataStore = useFormDataStore();
const router = useRouter();
// Form data and terms acceptance
const formData = formDataStore.formData;
const termsAccepted = ref(false);

// Function to navigate to the previous step/page
const previousPage = () => {
  router.go(-1); // Go back one step
};

// Function to confirm the submission
const confirm = () => {
  // Perform form submission logic
  router.push("/completion");
};

</script>

<style scoped>
/* Scoped styles */
.container {
  max-width: 600px;
  /* Set maximum width */
}

.text-black {
  color: #fff;
  /* Text color */
}

.bg-blue-900 {
  background-color: #284276;
  /* Background color */
}
</style>