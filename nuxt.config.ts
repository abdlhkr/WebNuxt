
import { vuetifyConfiguration } from "virtual:vuetify-configuration"
import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['vuetify-nuxt-module'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css' // Bootstrap CSS'i ekler
  ],
  build: {
    transpile: ['bootstrap'] // JavaScript bileşenleri için
  }
})
css: [
  'vuetify/styles'
]
