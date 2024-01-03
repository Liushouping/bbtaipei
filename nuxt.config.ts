// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'OMNI Nightclub Taipei - 台北夜間娛樂指標 Nightclub in Taipei',
      // meta: [
      //   { name: 'description', content: 'Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味' },
      //   { property: 'og:title', content: 'OXI Oyster & Wine Live House | Taipei' },
      //   { property: 'og:description', content: 'Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味' },
      //   { property: 'og:image', content: '/images/welcome_3.webp' }
      // ],
      // link: [
      //   { 
      //     rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' 
      //   },
      //   { 
      //     rel: 'apple-touch-icon', href: '/favicon.svg' 
      //   },
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css",
      //   },
      // ],
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
