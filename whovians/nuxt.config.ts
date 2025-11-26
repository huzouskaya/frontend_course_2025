export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Open Sans': [400, 700],
        'Montserrat': true,
      }
    }]
  ],

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
