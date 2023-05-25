<template>
  <nav class="flex items-center gap-[3.2rem]">
    <ClientOnly>
      <CommonLoading size="24" v-if="store.isLoading" />
      <template v-else-if="store.user">
        <button @click="openNotifications">
          <NuxtIcon
            name="bell"
            class="'w-[2rem] aspect-square text-black opacity-30 hover:opacity-100"
          />
        </button>
        <CommonProfileAvatar />
      </template>

      <template v-else>
        <NuxtLink to="/register" class="borderline-transparent icon">
          <NuxtIcon name="sign-up" />
        </NuxtLink>

        <NuxtLink to="/login" class="borderline-transparent icon">
          <NuxtIcon name="sign-in" />
        </NuxtLink>
      </template>
    </ClientOnly>

    <LayoutNavbarNotifications
      class="absolute bottom-0 right-[8%] translate-y-[100%]"
      v-if="isNotificationsOpened"
      @close="closeNotifications"
    />
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/useUserStore";

const store = useUserStore();

const isNotificationsOpened = ref<boolean>(false);

const openNotifications = () => (isNotificationsOpened.value = true);
const closeNotifications = () => (isNotificationsOpened.value = false);
</script>

<style scoped lang="scss">
.icon {
  @apply flex aspect-square w-[4rem]  items-center justify-center rounded-full hover:border-opacity-100;
}
</style>
