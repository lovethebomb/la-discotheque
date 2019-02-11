module.exports = {
  mode: 'universal',
  modern: true,

  serverMiddleware: ['~/api'],

  /*
  ** Headers of the page
  */
  head: {
    title: 'La Discothèque - Discogs collection viewer',
    htmlAttrs: {
      lang: 'en'
    },
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
  ** Customize the progress bar color
  */
  loading: { color: '#0053ff' },

  css: [
    '~assets/css/globals.css',
    '~assets/css/fonts.css',
    '~assets/css/grid.css'
  ],

  /*
  ** Plugins
  */
  plugins: [{ src: '~plugins/fathom.js', ssr: false }],
  module: {
    rules: [
      {
        test: /\.postcss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {},
        'postcss-nested': {}
      },
      preset: {
        stage: 2
      }
    }
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
