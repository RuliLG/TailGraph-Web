export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'TailGraph | Generate your OG Images using TailwindCSS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Free API to generate open graph images for social network using the power of TailwindCSS.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' }
    ],
    script: [
      { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'FYNLBUNB', defer: true }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3685E2' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    './plugins/aos.client.js',
    './plugins/v-select.client.js',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  buildModules: ['@nuxtjs/tailwindcss'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
