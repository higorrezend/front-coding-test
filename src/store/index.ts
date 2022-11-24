import Vue from 'vue'
import Vuex from 'vuex'
import Summary from './Summary'
import CountryStatus from './CountryStatus'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Summary,
    CountryStatus
  }
})
