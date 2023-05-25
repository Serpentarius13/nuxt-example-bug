<template>
  <footer
    class="clipped flex min-h-[66rem] w-screen bg-[#191D1F] pb-[8.6rem] pt-[14.1rem]"
  >
    <div
      class="container flex flex-grow flex-col justify-between md:gap-[6rem]"
    >
      <div class="flex items-start gap-[17.5rem] md:flex-col md:gap-[3rem]">
        <NuxtLink to="/">
          <h3 class="heading borderline-bottom text-white">XSLAB Courses</h3>
        </NuxtLink>

        <nav>
          <ul
            class="grid grid-cols-2 gap-x-[14rem] gap-y-[1.8rem] xl:grid-cols-1"
          >
            <li v-for="link in footerLinks" :key="link.text">
              <NuxtLink
                :to="link.to"
                class="text-big lowercase text-white opacity-30 hover:opacity-100"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex w-full justify-between sm:flex-col sm:gap-[3rem]">
        <div
          class="text-medium flex max-w-[23.2rem] flex-col gap-[1.8rem] text-white"
        >
          <span>Санкт-Петербург, Средний проспект 32/A строение 1</span>

          <a
            :href="`tel:${tel
              .replace(')', '')
              .replace('(', '')
              .split(' ')
              .join('')}`"
          >
            {{ tel }}
          </a>
        </div>

        <div
          class="text-medium flex flex-col items-end gap-[1.8rem] text-white sm:items-start"
        >
          <span class="borderline-bottom">Пользовательское соглашение</span>

          <a :href="`mailto:${email}`">
            {{ tel }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
type TFooterLink = { to: string; text: string };

const tel = "+7 (999) 380 23-23";
const email = "commons@xslab.ru";

const footerLinks: TFooterLink[] = [
  {
    to: "/",
    text: "Оформить подписку",
  },

  {
    to: "/",
    text: "Новости проекта",
  },
  {
    to: "/",
    text: "Работать с нами",
  },
  {
    to: "/",
    text: "Как работает сервис",
  },
  {
    to: "/",
    text: "Конфиденциальность",
  },

  {
    to: "/",
    text: "Каталог курсов",
  },
  {
    to: "/",
    text: "Договор оферты",
  },

  {
    to: "/",
    text: "Подписки",
  },
];
</script>

<style scoped lang="scss">
.clipped {
  position: relative;

  @apply overflow-x-hidden;
  &::before {
    content: "";
    @apply absolute -top-[128vw] left-1/2 h-[130vw] w-[130vw] -translate-x-1/2 rounded-full bg-white;
  }
}
</style>
