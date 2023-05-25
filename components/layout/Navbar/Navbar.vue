<template>

  <header
    class="sticky top-0 flex min-h-[8.6rem] w-screen items-center justify-center z-[200] bg-white  "
  >
    <div class="container flex justify-between">
      <div class="flex items-center gap-[1.4rem]">
        <NuxtLink to="/"> <CommonLogo /> </NuxtLink>

        <!-- select -->
      </div>

      <div class="flex items-center gap-[12rem] lg:hidden">
        <nav>
          <LayoutNavbarLinks />
        </nav>
        <LayoutNavbarButtons />
      </div>

      <label class="nav-burger z-[420] hidden lg:flex">
        <input type="checkbox" class="hidden" @change="checkInput" />
        <span />
        <span />
        <span />
      </label>
    </div>

    <LayoutNavbarMobile
    :style="burgerMenuStyleComputed"
    class="nav-mobile transition-standard hidden lg:flex"
  />
  </header>
</template>

<script setup lang="ts">


const isBurgerOpened = ref<boolean>(false);

function checkInput(event: Event) {
  const { checked } = event.target as HTMLInputElement;



  isBurgerOpened.value = checked;
}

const burgerMenuStyleComputed = computed<{
  opacity: number;
  transform: string;
}>(() => {
  if (isBurgerOpened.value) return { opacity: 1, transform: "translate(0)" };
  else return { opacity: 0, transform: "translateX(-100%)" };
});
</script>

<style scoped lang="scss">
.nav {
  &-burger {
    @apply relative  hidden h-[3rem] w-[2rem] cursor-pointer flex-col justify-center gap-[0.4rem];
    @screen lg {
      @apply flex;
    }
    span {
      @apply w-[2rem] border-b-2 border-black transition-all;
    }

    input:checked ~ span {
      @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
      &:nth-child(2) {
        @apply rotate-45;
      }

      &:nth-child(3) {
        @apply -rotate-45;
      }

      &:nth-child(4) {
        @apply translate-y-full rotate-180 opacity-0;
      }
    }
  }
}
</style>
