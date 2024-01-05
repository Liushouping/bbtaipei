// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'BB TAIPEI',
      meta: [
        { name: 'description', content: 'BB Taipei (Blue Balls Taipei) 最狂韓風派對 空降嘉賓 + K bounce炸到底' },
        { property: 'og:title', content: 'BB TAIPEI' },
        { property: 'og:description', content: 'BB Taipei (Blue Balls Taipei) 最狂韓風派對 空降嘉賓 + K bounce炸到底' },
        { property: 'og:image', content: 'https://bbtaipei.com/og-img.jpeg' }
      ],
      link: [
        { 
          rel: 'icon', type: 'image/x-icon', href: '/favicon.png' 
        },
        { 
          rel: 'apple-touch-icon', href: '/favicon.png' 
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js",
          type: "text/javascript",
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
    // '@bluesyoung/nuxt3-lazy-load',
    // 'nuxt-swiper',
    // '@stefanobartoletti/nuxt-social-share',
    // '@vueuse/nuxt',
    // 'nuxt-gtag'
  ],
  // '@bluesyoung/nuxt3-lazy-load': {
    
  // },
  // gtag: {
  //   id: 'AW-11363750698',
  //   config: {
  //     page_title: 'Oxi Website',

  //   }
  // },
  // swiper: {
  // },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    
  ],
})
