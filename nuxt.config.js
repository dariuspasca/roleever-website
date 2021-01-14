export default {
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
    ],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css', '~/assets/fonts/gitan.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/vue-click-outside',
    '~/plugins/maz-ui',
    { src: '~/plugins/vue-chartjs', mode: 'client' },
    { src: '~/plugins/vue-hcaptcha', mode: 'client' },
    { src: '~/plugins/vue-js-modal', mode: 'client' },
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
    '@nuxt/content',
    '@nuxtjs/device',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    'nuxt-i18n',
    'nuxt-svg-loader',
    '@nuxtjs/google-analytics',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    [
      'nuxt-modernizr',
      {
        'feature-detects': ['img/webp'],
        options: ['setClasses'],
      },
    ],
    '@nuxtjs/sitemap',
  ],
  env: {
    /*
      Url to S3 bucket
      Currently both in dev and prod the bucket is the same
    */
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://roleever-public.s3.eu-west-3.amazonaws.com'
        : 'https://roleever-public.s3.eu-west-3.amazonaws.com',
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
      useCookie: true,
      cookieKey: 'not_cthulhu',
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
   ** @nuxtjs/sitemap configuration
   */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.roleever.com',
    exclude: [],
    routes: [],
  },
  /*
   ** @nuxtjs/google-analytics configuration
   */
  googleAnalytics: {
    id: 'UA-121790592-1',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool =
          process.env.NODE_ENV === 'development' ? '#source-map' : ''
      }
    },
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'maz-ui',
            styleLibraryName: 'css',
          },
        ],
      ],
    },
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  router: {
    linkExactActiveClass: 'exact-active-link',
  },
  generate: {
    fallback: false,
    routes: ['/', '404'],
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
