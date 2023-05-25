<template>
  <LayoutNavbar />

  <main
    class="container-big flex flex-col justify-between bg-white px-[11rem] pb-[4rem] xl:px-[7rem] lg:px-[5rem] md:px-[3rem] gap-[4rem]"
  >
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 8.6rem);
}
</style>
