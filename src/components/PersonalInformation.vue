// PersonalInformation.vue
<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Step 1: Personal Information</h2>
    <form @submit.prevent="nextStep">
      <div class="mb-4">
        <label for="name" class="block">Name:</label>
        <input
          id="name"
          type="text"
          v-model="formData.name"
          required
          class="input"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block">Email:</label>
        <input
          id="email"
          type="email"
          v-model="formData.email"
          required
          class="input"
        />
      </div>
      <button type="submit" class="btn">Next</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const formData = ref(store.state.formData);

    const nextStep = () => {
      store.commit("updateFormData", formData.value);
      router.push("/account-information");
    };

    return { formData, nextStep };
  },
});
</script>

<style scoped>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
