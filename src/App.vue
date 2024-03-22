<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container mx-auto">
    <RouterView />
  </div>
</template>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  background-color: #284276;
}
</style>