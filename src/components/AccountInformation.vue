// AccountInformation.vue
<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Step 2: Account Information</h2>
    <form @submit.prevent="nextStep">
      <div class="mb-4">
        <label for="username" class="block">Username:</label>
        <input
          id="username"
          type="text"
          v-model="formData.username"
          required
          class="input"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block">Password:</label>
        <input
          id="password"
          type="password"
          v-model="formData.password"
          required
          class="input"
        />
      </div>
      <button @click.prevent="previousStep" class="btn">Previous</button>
      <button type="submit" class="btn">Next</button>
    </form>
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

    const nextStep = () => {
      store.commit("updateFormData", formData.value);
      router.push("/confirmation");
    };

    return { formData, previousStep, nextStep };
  },
});
</script>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
