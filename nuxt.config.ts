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
        { property: 'og:image', content: 'https://bbtaipei.com/og-img.jpg' }
      ],
      link: [
        {
          rel: 'canonical', href: 'https://bbtaipei.com'
        },
        { 
          rel: 'icon', type: 'image/x-icon', href: '/favicon.png' 
        },
        { 
          rel: 'apple-touch-icon', href: '/favicon.png' 
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap'
  ],
  site: {
    url: 'https://bbtaipei.com',
  },
  // gtag: {
  //   id: '',
  //   config: {
  //     page_title: 'BBtaipei',

  //   }
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
