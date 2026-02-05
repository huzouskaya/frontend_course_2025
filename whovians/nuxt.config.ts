// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-svgo'
  ],

  googleFonts: {
    families: {
      'Open Sans': [400, 700],
      'Montserrat': true,
    }
  },

  runtimeConfig: {
    public: {
      yandexMapsApiKey: process.env.YANDEX_MAPS_API_KEY
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})