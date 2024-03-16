<!-- PersonalInformation.vue -->
<template>
  <div>
    <h2>Step 1: Personal Information</h2>
    <form @submit.prevent="nextStep">
      <div>
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="formData.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="formData.email" required />
      </div>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const formData = ref({
      name: "",
      email: "",
    });

    const router = useRouter();

    const nextStep = () => {
      router.push("/account-information");
    };

    return { formData, nextStep };
  },
});
</script>
