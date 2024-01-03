// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'BB TAIPEI',
      meta: [
        { name: 'description', content: 'BB Taipei 台北夜間娛樂指標．萬象包羅．極致體驗．Award-winning nightclub in Taiwan with VOID Acoustic sound system. 訂位專線 / RSVP：+886-983-803-388 | BB Taipei' },
        { property: 'og:title', content: 'BB Taipei Taipei - 台北夜間娛樂指標 Nightclub in Taipei' },
        { property: 'og:description', content: 'BB Taipei 台北夜間娛樂指標．萬象包羅．極致體驗．Award-winning nightclub in Taiwan with VOID Acoustic sound system. 訂位專線 / RSVP：+886-983-803-388 | BB Taipei' },
        { property: 'og:image', content: '/OMNI_LOGO_WHITE_RGB.png' }
      ],
      link: [
        { 
          rel: 'icon', type: 'image/x-icon', href: '/favicon.png' 
        },
        { 
          rel: 'apple-touch-icon', href: '/favicon.png' 
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css",
        // },
      ],
      // script: [
      //   {
      //     src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js",
      //     type: "text/javascript",
      //   },
      // ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
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
})
