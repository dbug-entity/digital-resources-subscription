<template>
    <div :class="[
      'cursor-pointer bg-white rounded-lg shadow-md p-6',
      {
        'border-green-500 border-4': isSelected,
      }
    ]" @click="selectPlan">
      <h3 class="text-lg font-semibold text-center mb-4">{{ planName }}</h3>
      <ul class="text-sm mb-4">
        <li v-for="feature in features" :key="feature">{{ feature }}</li>
      </ul>
      <p class="text-lg font-bold text-center mb-4">{{ price }}</p>
      <button @click.stop="selectPlan"
        class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Select
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from 'vue';
  import useFormDataStore from '@/stores';
  
  const props = defineProps({
    planName: String,
    price: String,
    features: Array<string>,
  });
  
  const formDataStore = useFormDataStore();
  const formData = ref(formDataStore.formData);
  
  const isSelected = computed(() => formData.value.subscriptionPlan === props.planName);
  
  const selectPlan = () => {
    if (!props.planName) return
    formData.value.subscriptionPlan = props.planName;
    formDataStore.updateFormData({ subscriptionPlan: props.planName });
  };
  </script>