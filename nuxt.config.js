export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ppixl',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" },
      // { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" },
      // { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'milligram',
    '@assets/style.css',

    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'@/plugins/whitelabeling',ssr:false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
