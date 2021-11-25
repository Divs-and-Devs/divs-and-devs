
export default {
  target: "static",
  generate: {
    devtools: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Divs & devs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Divs & Devs' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Divs & Devs' },
      { hid: 'og:name', name: 'og:name', content: 'Divs & Devs' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Divs & Devs' },
      { hid: 'og:image', name: 'og:image', content: 'https://divsanddevs.nl/meta-image.png' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://divsanddevs.nl/meta-image.png' },
      { hid: 'description', name: 'description', content: 'A new web development bureau in the making.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand&display=swap' }
    ],
    script: [
      { src: 'https://unpkg.com/typewriter-effect@latest/dist/core.js' },
      {
        type: "application/json+ld",
        json: {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Divs & Devs",
          "legalName": "Divs & Devs B.V.",
          "url": "http://www.divsanddevs.nl",
          "logo": "https://divsanddevs.nl/logo_512.png",
          "foundingDate": "2021",
          "founders": [
            {
              "@type": "Person",
              "name": "Roy Ermers"
            },
            {
              "@type": "Person",
              "name": "Daan Voskens"
            }],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Heikestraat 14",
            "addressRegion": "Noord Brabant",
            "postalCode": "5386 LA",
            "addressCountry": "Netherlands"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "[+31 6 13759487]",
            "email": "info@divsanddevs.nl"
          }
        }
      }
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
    "~/assets/scss/main.scss"
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
  buildModules: [],
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
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },
  styleResources: {
    scss: ['./assets/scss/brand.scss']
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
