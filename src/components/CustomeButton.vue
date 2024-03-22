<template>
    <button :class="[
      'w-full',
      backgroundColor,
      'text-white',
      'font-bold',
      'py-2',
      'px-4',
      'rounded-lg',
      'hover:bg-blue-600',
      'focus:outline-none',
      'focus:bg-blue-600'
    ]" :type="type" @click="onClick" :disabled="disabled">
      {{ label }}
    </button>
  </template>
  
  <script setup lang="ts">
  import type { PropType, ButtonHTMLAttributes } from 'vue';
  defineProps({
    label: String,
    type: {
      type: String as PropType<ButtonHTMLAttributes['type']>,
      default: 'submit'
    },
    backgroundColor: {
      type: String,
      default: 'bg-blue-500'
    },
    disabled: Boolean
  });
  const emit = defineEmits<{
    (e: 'onClick'): void
  }>()
  const onClick = () => {
    emit('onClick')
  }
  </script>
  
  <style scoped>
  /* Scoped styles */
  </style>