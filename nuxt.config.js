
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Divs and devs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A new web development bureau in the makng.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ],
    script: [
      { src: 'https://unpkg.com/typewriter-effect@latest/dist/core.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7e5ded' },
  /*
  ** Global CSS
  */
  css: [
    "~/assets/main.scss"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/global-components.js',
    'plugins/filters.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    "@nuxt/components",
    "@nuxt/content"
  ],
  components: true,
  strapi: {
    url: "https://admin.divsanddevs.nl/"
  },
  markdownit: {
  preset: 'default',
  linkify: true,
  breaks: true,
  injected: true,
  },
  styleResources: {
    scss: ['./assets/brand.scss']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
