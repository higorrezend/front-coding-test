import Vue from 'vue'
import Vuex from 'vuex'
import Summary from './Summary'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Summary
  }
})
