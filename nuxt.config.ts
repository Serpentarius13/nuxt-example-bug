// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      apiBase: "https://6370f0240399d1995d87231f.mockapi.io/api/111",
    },
  },

  css: ["@/styles/main.scss"],
});
