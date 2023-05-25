<template>
  <form @submit.prevent="handleSubmit" class="z-[1000] relative">
    <input name="email" />
    <input name="password" />

    <button type="submit">submit form</button>
  </form>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

definePageMeta({ auth: "guest", layout: "profile-subs" });

const store = useUserStore();
const router = useRouter();

const handleSubmit = async (e: Event) => {
  await store.login({ email: "user123@mail.ru", password: "1234567" });

  new Promise((r) => setTimeout(r, 400)).then(() => router.push("/"));
};
</script>

<style scoped lang="scss"></style>
