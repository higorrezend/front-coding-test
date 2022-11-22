import Vue from 'vue'
import pt from 'vuetify/src/locale/pt'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: {
      pt
    },
    current: 'pt'
  },
  icons: {
    iconfont: 'md'
  },
  theme: {
    themes: {
      light: {
        primary: '#ED6161',
        secondary: '#4F4544',
        accent: '#EF6060',
        error: '#b71c1c'
      }
    }
  }
})
