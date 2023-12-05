// https://nuxt.com/docs/api/configuration/nuxt-config
import { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
 
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  runtimeConfig: {
    // local:{
    //   baseURL: process.env.BASE_URL,
    //   secret: process.env.AUTH_SECRET,
    // },
    passport: {
      baseUrl: process.env.PASSPORT_BASE_URL,
      clientId: process.env.PASSPORT_CLIENT_ID,
      clientSecret: process.env.PASSPORT_CLIENT_SECRET,
  }
  },
  auth: {
    globalAppMiddleware: true
   },
  
  devtools: {enabled:true},
 
})
