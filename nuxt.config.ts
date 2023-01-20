// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: [
    // PrimeFaces related stylesheets.
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: 'http://localhost:8080',
    },
  },
});
