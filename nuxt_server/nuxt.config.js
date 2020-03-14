
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'daroach.net Gagan Daroach personally hosted web services. A passionate programmer and admirer of the internet.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Condensed|Ubuntu+Mono'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ['@/assets/styles/global.scss'],
  // css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-133695142-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  Why couldn't i get this to work? 2020-03-11 Gagan
  */
  axios: {
    baseURL: 'https://api.daroach.net',
    debug: false,
    headers: { Authorization: 'Basic ZGVlcGFrY2hvcHJhOmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6' }
  },

  /**
   * to override default bootstrap stylings
   * i got this from: https://bootstrap-vue.js.org/docs/#nuxtjs-module
   */
  bootstrapVue: {
    bootstrapCSS: false, //  Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  // https://nuxtjs.org/guide/routing#middleware
  router: {
    middleware: 'post_hit'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === 'vue-loader'
      )
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    }
  }
}
