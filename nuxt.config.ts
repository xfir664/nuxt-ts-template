// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@pinia/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./app", import.meta.url)),
      },
    },
  },
  // alias: {
  //   "@": "./",
  // },
  css: ["@/assets/styles/main.scss"],
  devtools: { enabled: true },
});
