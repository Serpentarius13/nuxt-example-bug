<template>123 <button @click="store.logout">Logout</button></template>

<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

definePageMeta({ layout: "default", auth: "user" });

const store = useUserStore();
</script>

<style scoped lang="scss"></style>
