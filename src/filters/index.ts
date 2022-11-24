import Vue from 'vue'
import DateFilter from './DateFilter'
import NumberFilter from './NumberFilter'

Vue.filter('number', NumberFilter)
Vue.filter('date', DateFilter)

export default {}
