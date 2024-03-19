// PersonalInformation.vue
<template>
  <div class="bg-blue-900 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-black">
      <h2 class="text-2xl font-semibold mb-6 text-center">
        Add Personal Information
      </h2>
      <form @submit.prevent="nextStep">
        <div class="mb-4">
          <label for="firstName" class="block font-medium mb-1">Name:</label>
          <input
            type="text"
            id="firstName"
            v-model="formData.name"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block font-medium mb-1">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>
        <div class="mb-4">
          <label for="phoneNumber" class="block font-medium mb-1"
            >Password:</label
          >
          <input
            type="tel"
            id="phoneNumber"
            v-model="formData.password"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Next
        </button>
      </form>
    </div>
  </div>
  <!-- <div>
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
  </div> -->
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

.button {
  --😀: #644dff;
  --😀😀: #4836bb;
  --😀😀😀: #654dff63;
  cursor: pointer;
  width: 184px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.125em;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
  background: var(--😀);
  border: 2px solid var(--😀😀);
  border-radius: 0.75rem;
  box-shadow: 0 8px 0 var(--😀😀);
  transform: skew(-10deg);
  transition: all 0.1s ease;
  filter: drop-shadow(0 15px 20px var(--😀😀😀));
}

.button:active {
  letter-spacing: 0px;
  transform: skew(-10deg) translateY(8px);
  box-shadow: 0 0 0 var(--😀😀😀);
}
.bg-blue-900 {
  background-color: #284276;
}
</style>
