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
      {
        hid: 'description',
        name: 'description',
        content: 'Fancy Discogs-powered collection viewer'
      },
      { name: 'og:type', content: 'website' },
      {
        name: 'og:author',
        content: 'Lucas Heymès @ltb_lucas, Inês Durão inesdurao.me'
      },
      { name: 'theme-color', content: '#212223' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        vmid: 'json-ld',
        innerHTML: `{
        "@context": "http://schema.org/",
        "@type": "CreativeWork",
        "name": "disco.lucas.computer - a fancy Discogs collection viewer",
        "image": "https://disco.lucas.computer/img/icon.jpg",
        "url": "https://disco.lucas.computer",
        "author": [
          {
            "@context": "http://schema.org/",
            "@type": "Person",
            "name": "Lucas Heymès",
            "jobTitle": "Front-End Engineer & Computer Whisperer",
            "email": "hey[at]lucas.computer",
            "image": "https://www.lucas.computer/img/lucas-heymes-face.jpg",
            "url": "https://www.lucas.computer",
            "sameAs": [
              "https://github.com/lovethebomb",
              "https://twitter.com/ltb_lucas",
              "https://www.linkedin.com/in/lucasheymes"
            ],
            "memberOf": {
              "@context": "http://schema.org/",
              "@type": "Organization",
              "name": "Îlot Réseau",
              "description": "A small island within the sea of networks.",
              "foundingDate": "2011-05-11",
              "image": "https://www.ilotreseau.net/img/ilotreseau-logo.svg",
              "url": "https://www.ilotreseau.net"
            }
          },
          {
            "@context": "http://schema.org/",
            "@type": "Person",
            "name": "Inês Durão",
            "email": "hello[at]inesdurao.me",
            "image": "https://www.inesdurao.me/ines-durao-face.jpg",
            "url": "https://www.inesdurao.me",
            "sameAs": [
              "https://dribbble.com/inesdurao",
              "https://www.behance.net/sealungs",
              "https://www.linkedin.com/in/inesdurao/"
            ],
            "memberOf": {
              "@context": "http://schema.org/",
              "@type": "Organization",
              "name": "Îlot Réseau",
              "description": "A small island within the sea of networks.",
              "foundingDate": "2011-05-11",
              "image": "https://www.ilotreseau.net/img/ilotreseau-logo.svg",
              "url": "https://www.ilotreseau.net"
            }
          }
        ]
      }`,
        type: 'application/ld+json'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0053ff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/globals.css',
    '~assets/css/fonts.css',
    '~assets/css/grid.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/composition-api'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    'nuxt-typed-vuex'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    // '@nuxtjs/dotenv'
  ],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {}
      }
    },
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
    transpile: [/typed-vuex/]
  }
}
