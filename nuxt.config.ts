// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/supabase"],
  compatibilityDate: "2024-09-22",
  runtimeConfig: {},
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
    },
  },
})