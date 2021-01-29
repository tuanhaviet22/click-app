// import axios from 'axios'
// const dynamicRoutes = async () => {
//   const posts = await axios.get('http://127.0.0.1:8000/api/post')
//   const routesPost = posts.data.map((post) => {
//     return {
//       route : `/post/${post.post_id}`,
//       payload : post
//     }
//   });
//   return routesPost
// }
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Goldkarat - Nâng tầm đẳng cấp'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color : "#fdb866",
    height : "3px"
  },
  ssr : true,
  target: 'server',
  router: {
    base: '/',
    extendRoutes (routes, resolve) {
      routes.push(
        {
          name: 'post-slug-id',
          path: '/:slug-p:id',
          component: resolve(__dirname, 'pages/post/_id.vue')
        }
      )
    }
  },
  // generate: {
  //   routes: dynamicRoutes
  // },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/zipped.css',
    '@/node_modules/swiper/swiper.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://goldkarat.tuanha.asia',
    headers : {
      // Authorization: "Bearer 612LT8gJZHM1obd1C8jmF7ZAiLKLxnLdjyebd7uHjFblS7PbR63WDIXgbZHG3weUwZhKhELVIvsurDfp"
    }
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    host: '0.0.0.0',
  },
  mode: "universal",
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
