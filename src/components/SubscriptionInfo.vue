<template>
  <div class="bg-blue-900 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center text-black mb-8">
        Subscription Plan Selection
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Basic Plan -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-center mb-4">Basic</h3>
          <ul class="text-sm mb-4">
            <li>Access to basic features</li>
            <li>Limited support</li>
            <li>No customization options</li>
          </ul>
          <p class="text-lg font-bold text-center mb-4">$9.99/month</p>
          <button
            @click="selectPlan('Basic')"
            class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Select
          </button>
        </div>

        <!-- Standard Plan -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-center mb-4">Standard</h3>
          <ul class="text-sm mb-4">
            <li>Access to standard features</li>
            <li>Email support</li>
            <li>Customization options</li>
          </ul>
          <p class="text-lg font-bold text-center mb-4">$19.99/month</p>
          <button
            @click="selectPlan('Standard')"
            class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Select
          </button>
        </div>

        <!-- Premium Plan -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-center mb-4">Premium</h3>
          <ul class="text-sm mb-4">
            <li>Access to premium features</li>
            <li>24/7 support</li>
            <li>Advanced customization options</li>
          </ul>
          <p class="text-lg font-bold text-center mb-4">$29.99/month</p>
          <button
            @click="selectPlan('Premium')"
            class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const formData = ref(store.state.formData);

    const previousStep = () => {
      router.go(-1); // Go back one step
    };

    const selectPlan = (plan: string) => {
      formData.value.subscriptionPlan = plan;
      store.commit("updateFormData", formData.value);
      router.push("/account-information");
    };

    return { formData, previousStep, selectPlan };
  },
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.text-black {
  color: #fff;
}

.bg-blue-900 {
  background-color: #284276;
}
</style>
