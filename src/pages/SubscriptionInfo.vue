<template>
  <div class="bg-blue-900 min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-center text-black mb-8">
        Subscription Plan Selection
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SubscriptionPlanCard v-for="plan in plans" :key="plan.planName" :planName="plan.planName" :price="plan.price"
          :features="plan.features" />
      </div>
      <div class="mt-10 flex justify-start">
        <div class="mr-4">
          <Button label="Previous" backgroundColor="bg-gray-400" :onClick="previousPage" />
        </div>
        <div>
          <Button label="Next" backgroundColor="bg-blue-500" :onClick="nextPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubscriptionPlanCard from '@/components/subscriptionPlanCard.vue';
import Button from "@/components/CustomeButton.vue"
import { useRouter } from 'vue-router';
import { ref } from 'vue'
const router = useRouter();

const plans = ref([
  {
    planName: "Basic",
    price: "$9.99/month",
    features: ['Access to basic features', 'Limited support', 'No customization options']
  },
  {
    planName: "Standard",
    price: "$19.99/month",
    features: ['Access to standard features', 'Email support', 'Customization options']
  },
  {
    planName: "Premium",
    price: "$29.99/month",
    features: ['Access to premium features', '24/7 support', 'Advanced customization options']
  }
]);

const previousPage = () => {
  router.go(-1);
};

const nextPage = () => {
  router.push('/account-information');
};

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
