<!-- App.vue -->
<template>
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="css">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
