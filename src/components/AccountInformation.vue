<!-- AccountInformation.vue -->
<template>
  <div>
    <h2>Step 2: Account Information</h2>
    <form @submit.prevent="nextStep">
      <div>
        <label for="username">Username:</label>
        <input id="username" type="text" v-model="formData.username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          v-model="formData.password"
          required
        />
      </div>
      <button @click.prevent="previousStep">Previous</button>
      <button type="submit">Next</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const formData = ref({
      username: "",
      password: "",
    });

    const router = useRouter();

    const previousStep = () => {
      router.push("/");
    };

    const nextStep = () => {
      router.push("/confirmation");
    };

    return { formData, previousStep, nextStep };
  },
});
</script>
