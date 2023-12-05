import colors from 'vuetify/es5/util/colors'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-demo',
    title: 'nuxt-demo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/VueTelInput.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-sweetalert2'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://devapi.spworldwide.co.uk',
  },
  router: {
    middleware: ['auth'],
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/',
    },
    strategies: {
      customStrategy:{
        scheme: '~/schemes/customScheme.js',
        token: {
          property: 'accessToken',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' },
          logout: false,
        },
        
      },
      local: {
        token: {
         property:'accessToken',
          global: true,
          required: true,
          type: 'Bearer',
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' },

          logout: false,
        },
      },
      auth0: {
       
        domain: 'dev-qnp0f5mz53x3ok47.us.auth0.com',
        clientId: '8EBkmdwOr64xgrQHLOOPcixqSm01vAX0',
        audience: ''
      },
      discord: {
        clientId: '1171309047480332308',
        clientSecret: 'wVm6zmufZRHKrzEgyiOwCbt_SYKbl9Cm'
      },
      github: {
        clientId: 'ff51071093e299708dd3',
        clientSecret: '7e9a863983b0d9f66f242842db26552d856e55dd'
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}'
        },
        clientId: '1053310902462573',
        scope: ['public_profile', 'email']
      },
      google: {
        clientId:
          '694316142059-11vcj3vv3udndihdrn00mpdi9s0fhkh5.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'token id_token',
        grantType: 'authorization_code',
        // accessType: 'offline',
        redirectUri: 'http://localhost:3000',
        // endpoints: {
        //   token: false, // 'https://oauth2.googleapis.com/tokeninfo', // your backend url to resolve your auth with google and give you the token back
        //   userInfo: 'http://localhost:8000/auth/user/' // your endpoint to get the user info after you received the token
        // },
      },
      social: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: undefined,
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: false,
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: 'token',
        grantType: 'authorization_code',
        accessType: 'offline',
        // redirectUri: undefined,
        // logoutRedirectUri: undefined,
        clientId:
          '694316142059-11vcj3vv3udndihdrn00mpdi9s0fhkh5.apps.googleusercontent.com',
        scope: ['openid', 'profile', 'email'],
        state: 'state_' + new Date().getTime(),
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        // autoLogout: false
      },
    },
  },
}
