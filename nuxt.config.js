export default {
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
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'TailGraph | Generate branded social images using TailwindCSS'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Free API to generate open graph images for social network using the power of TailwindCSS.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://og.tailgraph.com/og?title=Presenting%20TailGraph&titleTailwind=text-white%20font-bold%20text-5xl%20px-4%20text-left%20max-w-2xl&text=Free%20API%20to%20generate%20images%20for%20Twitter%20and%20Facebook%20using%20TailwindCSS.&textTailwind=mx-auto%20mt-8%20max-w-md%20text-white%20text-2xl%20text-left%20w-full%20max-w-2xl%20px-4&bgTailwind=bg-gradient-to-r%20from-teal-500%20to-blue-500&footer=tailgraph.com&footerTailwind=text-base%20mb-8%20text-center%20font-semibold%20text-orange-100'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'TailGraph | Generate branded social images using TailwindCSS'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TailGraph | Generate branded social images using TailwindCSS'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Free API to generate open graph images for social network using the power of TailwindCSS.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://og.tailgraph.com/og?title=Presenting%20TailGraph&titleTailwind=text-white%20font-bold%20text-5xl%20px-4%20text-left%20max-w-2xl&text=Free%20API%20to%20generate%20images%20for%20Twitter%20and%20Facebook%20using%20TailwindCSS.&textTailwind=mx-auto%20mt-8%20max-w-md%20text-white%20text-2xl%20text-left%20w-full%20max-w-2xl%20px-4&bgTailwind=bg-gradient-to-r%20from-teal-500%20to-blue-500&footer=tailgraph.com&footerTailwind=text-base%20mb-8%20text-center%20font-semibold%20text-orange-100'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://og.tailgraph.com/og?title=Presenting%20TailGraph&titleTailwind=text-white%20font-bold%20text-5xl%20px-4%20text-left%20max-w-2xl&text=Free%20API%20to%20generate%20images%20for%20Twitter%20and%20Facebook%20using%20TailwindCSS.&textTailwind=mx-auto%20mt-8%20max-w-md%20text-white%20text-2xl%20text-left%20w-full%20max-w-2xl%20px-4&bgTailwind=bg-gradient-to-r%20from-teal-500%20to-blue-500&footer=tailgraph.com&footerTailwind=text-base%20mb-8%20text-center%20font-semibold%20text-orange-100'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'TailGraph | Generate branded social images using TailwindCSS'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
      { rel: 'canonical', href: 'https://tailgraph.com/' }
    ],
    script: [
      { src: 'https://ferret.tailgraph.com/script.js', 'data-site': 'FYNLBUNB', defer: true }
    ],
    htmlAttrs: {
      lang: 'en'
    }
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
