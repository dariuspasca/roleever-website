export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'theme-color', content: '#8e1500' },
      { name: 'msapplication-TileColor', content: '#da532c' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#9d9d9d',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/exi6ibq.css',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/vue-js-modal', mode: 'client' },
    '~/plugins/vue-click-outside',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/prismic',
    '@nuxtjs/device',
    '@nuxtjs/toast',
    'cookie-universal-nuxt',
  ],
  /*
   ** Prismic configuration
   */
  prismic: {
    endpoint: 'https://roleeverwebsite2020.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  /*
   ** nuxt-i18n configuration
   */
  i18n: {
    strategy: 'prefix_except_default',
    baseUrl: 'https://roleever.com',
    defaultLocale: 'en',
    seo: true,
    lazy: true,
    langDir: '/locales/',
    locales: [
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
      },
      {
        name: 'Italiano',
        code: 'it',
        iso: 'it-IT',
        file: 'it.json',
      },
    ],
    detectBrowserLanguage: {
      // If enabled, a cookie is set once a user has been redirected to his
      // preferred language to prevent subsequent redirections
      // Set to false to redirect every time
      useCookie: true,
      // Set `SameSite=None; Secure` to allow cross-domain use of the cookie (required when app is
      // embedded in an iframe).
      cookieCrossOrigin: false,
      // Set to override the default domain of the cookie. Defaults to host of the site.
      cookieDomain: null,
      // Cookie name
      cookieKey: 'i18n_redirected',
      // Sets the `Secure` flag for the cookie.
      cookieSecure: false,
      // Set to always redirect to value stored in the cookie, not just once
      alwaysRedirect: true,
      // If no locale for the browsers locale is a match, use this one as a fallback
      fallbackLocale: null,
    },
  },
  /*
   ** vue-toast configuration
   */
  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  router: {
    linkExactActiveClass: 'exact-active-link',
  },
  // Netlify reads a 404.html, Nuxt will load as an SPA
  generate: {
    fallback: '404.html',
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
