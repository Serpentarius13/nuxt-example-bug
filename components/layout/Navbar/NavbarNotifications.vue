<template>
  <div
    class="max-w-screen flex min-h-[50rem] w-[43rem] flex-col gap-[2.4rem] overflow-x-hidden rounded-semi-big bg-blue px-[2.8rem] py-[2.2rem] text-white"
  >
    <div class="flex items-center justify-between">
      <h2 class="heading-small">Уведомления</h2>

      <button @click="emit('close')">
        <NuxtIcon name="xmark" class="aspect-square w-[1.6rem]" />
      </button>
    </div>

    <div class="text-small relative flex gap-[2.5rem]">
      <button
        :class="[underlinedClass(notificationType === 'platform')]"
        @click="setTypePlatform"
      >
        Платформа
      </button>

      <button
        :class="[underlinedClass(notificationType === 'account')]"
        @click="setTypeAccount"
      >
        Аккаунт
      </button>

      <div
        class="absolute bottom-0 left-0 w-screen border-b-[1px] border-white border-opacity-[30%]"
      />
    </div>

    <ul
      class="mt-[0.7rem] flex max-h-[35rem] flex-col gap-[2.6rem] overflow-y-auto"
    >
      <li v-for="notification in notifications" :key="notification.id">
        <button
          class="group flex cursor-pointer items-center gap-[2rem] text-start"
        >
          <div
            class="flex aspect-square w-[4.6rem] items-center justify-center rounded-full bg-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.33366 1.16667C4.49104 0.956827 4.73803 0.833332 5.00033 0.833332H15.0003C15.2626 0.833332 15.5096 0.956827 15.667 1.16667L18.167 4.5C18.2752 4.64425 18.3337 4.81969 18.3337 5V16.6667C18.3337 17.3297 18.0703 17.9656 17.6014 18.4344C17.1326 18.9033 16.4967 19.1667 15.8337 19.1667H4.16699C3.50395 19.1667 2.86807 18.9033 2.39923 18.4344C1.93038 17.9656 1.66699 17.3297 1.66699 16.6667V5C1.66699 4.81969 1.72547 4.64425 1.83366 4.5L4.33366 1.16667ZM5.41699 2.5L3.33366 5.27778V16.6667C3.33366 16.8877 3.42146 17.0996 3.57774 17.2559C3.73402 17.4122 3.94598 17.5 4.16699 17.5H15.8337C16.0547 17.5 16.2666 17.4122 16.4229 17.2559C16.5792 17.0996 16.667 16.8877 16.667 16.6667V5.27778L14.5837 2.5H5.41699Z"
                fill="#212121"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.66699 5C1.66699 4.53976 2.04009 4.16667 2.50033 4.16667H17.5003C17.9606 4.16667 18.3337 4.53976 18.3337 5C18.3337 5.46024 17.9606 5.83333 17.5003 5.83333H2.50033C2.04009 5.83333 1.66699 5.46024 1.66699 5Z"
                fill="#212121"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.66634 7.5C7.12658 7.5 7.49967 7.8731 7.49967 8.33333C7.49967 8.99637 7.76307 9.63226 8.23191 10.1011C8.70075 10.5699 9.33663 10.8333 9.99967 10.8333C10.6627 10.8333 11.2986 10.5699 11.7674 10.1011C12.2363 9.63226 12.4997 8.99637 12.4997 8.33333C12.4997 7.8731 12.8728 7.5 13.333 7.5C13.7932 7.5 14.1663 7.8731 14.1663 8.33333C14.1663 9.4384 13.7274 10.4982 12.946 11.2796C12.1646 12.061 11.1047 12.5 9.99967 12.5C8.89461 12.5 7.8348 12.061 7.0534 11.2796C6.27199 10.4982 5.83301 9.4384 5.83301 8.33333C5.83301 7.8731 6.2061 7.5 6.66634 7.5Z"
                fill="#212121"
              />
            </svg>
          </div>

          <div class="flex flex-col gap-[0.2rem] text-white">
            <h6 class="text-small max-w-full overflow-clip">
              {{ notification.title }}
            </h6>
            <span class="text-smallest opacity-50 group-hover:opacity-100">
              {{ notification.date }}
            </span>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { INotification } from "~/features/types/notification.types";

type TNotificationType = "platform" | "account";

const notificationType = ref<TNotificationType>("platform");

const emit = defineEmits<{ close: [] }>();

const setTypePlatform = () => (notificationType.value = "platform");
const setTypeAccount = () => (notificationType.value = "account");

const notifications: INotification[] = [
  {
    title: "Абобус",
    description: "Вы читаете это говно?",
    date: new Date().toLocaleTimeString(),
    isRead: false,
    userId: 1,
    id: Math.random() * 10,
    createdAt: "123",
    updatedAt: "123",
  },
  {
    title: "Абобус",
    description: "Вы читаете это говно?",
    date: new Date().toLocaleTimeString(),
    isRead: false,
    userId: 1,
    id: Math.random() * 10,
    createdAt: "123",
    updatedAt: "123",
  },
  {
    title: "Абобус",
    description: "Вы читаете это говно?",
    date: new Date().toLocaleTimeString(),
    isRead: false,
    userId: 1,
    id: Math.random() * 10,
    createdAt: "123",
    updatedAt: "123",
  },
  {
    title: "Абобус",
    description: "Вы читаете это говно?",
    date: new Date().toLocaleTimeString(),
    isRead: false,
    userId: 1,
    id: Math.random() * 10,
    createdAt: "123",
    updatedAt: "123",
  },
  {
    title: "Абобус",
    description: "Вы читаете это говно?",
    date: new Date().toLocaleTimeString(),
    isRead: false,
    userId: 1,
    id: Math.random() * 10,
    createdAt: "123",
    updatedAt: "123",
  },
  {
    title: "Абобус",
    description: "Вы читаете это говно?",
    date: new Date().toLocaleTimeString(),
    isRead: false,
    userId: 1,
    id: Math.random() * 10,
    createdAt: "123",
    updatedAt: "123",
  },
  {
    title: "Абобус",
    description: "Вы читаете это говно?",
    date: new Date().toLocaleTimeString(),
    isRead: false,
    userId: 1,
    id: Math.random() * 10,
    createdAt: "123",
    updatedAt: "123",
  },
];

const underlinedClass = (isUnderlined: boolean) =>
  isUnderlined ? "underlined opacity-100" : "opacity-50";
</script>

<style scoped lang="scss">
.underlined {
  border-bottom: 2px solid white;
}
</style>
