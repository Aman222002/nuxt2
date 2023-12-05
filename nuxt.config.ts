import { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: false,

  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  runtimeConfig: {
    local: {
      baseURL: process.env.BASE_URL,
      secret: process.env.AUTH_SECRET,
    },
  },
  auth: {
    baseURL: process.env.BASE_URL || "",
    provider: {
      type: "local",
      name: "credentials",
      id: "localprovider",
      endpoints: {
        signIn: { path: "auth/login", method: "post" },
        signOut: { path: "auth/logout", method: "post" },
        getSession: { path: "auth/user", method: "get" },
      },

      pages: {
        login: "/login",
      },
      token: {
        signInResponseTokenPointer: "/accessToken",
        type: "Bearer",
      },

      // type: 'local',
      // trustHost: false,
      // defaultProvider: undefined,
      // addDefaultCallbackUrl: true
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
  },
});
