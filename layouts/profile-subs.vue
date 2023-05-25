<template>
  <LayoutNavbar class="!fixed top-0 bg-white bg-opacity-20" />

  <main class="relative min-h-screen w-screen bg-white pt-[3rem]">
    <slot />
    <div
      class="gradient absolute top-0 min-h-[73.1rem] w-screen sm:min-h-[80rem]"
    />
  </main>

  <LayoutFooter class="mt-[7.3rem]" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.gradient {
  background: linear-gradient(
    105.5deg,
    #b4e681 22.2%,
    #2420d1 91.55%
  ) !important;
}
</style>
