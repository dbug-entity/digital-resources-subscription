<template>
  <div class="bg-blue-900 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center text-black mb-8">
        Confirmation
      </h2>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold mb-4">Summary</h3>
        <div class="mb-4">
          <p><span class="font-semibold">Name:</span> {{ formData.name }}</p>
          <p><span class="font-semibold">Email:</span> {{ formData.email }}</p>
          <p>
            <span class="font-semibold">Password:</span> {{ formData.password }}
          </p>
        </div>
        <div class="mb-4">
          <p>
            <span class="font-semibold">Selected Plan:</span>
            {{ formData.subscriptionPlan }}
          </p>
        </div>
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
        <div class="mb-4">
          <input
            type="checkbox"
            id="terms"
            v-model="termsAccepted"
            class="mr-2"
          />
          <label for="terms" class="text-sm"
            >I accept the
            <a href="#" class="underline">terms and conditions</a>.</label
          >
        </div>
        <button
          @click="confirm"
          :disabled="!termsAccepted"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Confirm
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

    const submitForm = () => {
      // Perform form submission logic
      console.log("Form submitted!");
    };

    return { formData, previousStep, submitForm };
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
