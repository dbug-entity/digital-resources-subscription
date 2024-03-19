// PersonalInformation.vue
<template>
  <div class="bg-blue-900 min-h-screen flex items-center justify-center">
    <div
      class="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row md:items-center"
    >
      <img
        :src="imagePath"
        alt="Image"
        class="object-cover w-full h-auto rounded-lg md:w-1/2 md:h-full"
      />

      <div class="w-full px-4 md:w-1/2 md:px-8">
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
      router.push("/subscription");
    };

    return { formData, nextStep, imagePath: require("@/assets/5500661.jpg") };
  },
});
</script>

<style scoped>
.bg-blue-900 {
  background-color: #284276;
}
</style>
