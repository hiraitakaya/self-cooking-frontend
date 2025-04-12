// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  components: [{ path: "~/components/presentational", pathPrefix: false }],
  devtools: { enabled: true },
});
