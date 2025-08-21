// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@pinia/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  alias: {
    "@": "./",
  },
  css: [
    "@/assets/styles/main.scss", 
  ],
  devtools: { enabled: true },
});
