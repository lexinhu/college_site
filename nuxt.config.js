module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '小湖学院 - Java视频|HTML5视频|前端视频|Python视频|大数据视频',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '小湖学院,IT在线视频教程,Java视频,HTML5视频,前端视频,Python视频,大数据视频' },
      { name: 'description', content: '小湖学院是国内领先的IT在线视频学习平台、职业教育平台。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
    { src: '~/plugins/element-ui-plugin.js', ssr: false },
    { src: '~/plugins/vue-qriously-plugin.js', ssr: true }
  ]
}

