import Vue from 'vue'
import { SummaryState } from './state'
import { Countries, Global, Order } from '@/types/SummaryTypes'

export default {
  SET_COUNTRIES (state: SummaryState, countries: Countries): void {
    state.countries = countries
  },
  TOGGLE_LOADING (state: SummaryState): void {
    state.loading = !state.loading
  },
  SET_GLOBAL (state: SummaryState, global: Global): void {
    state.global = global
  },
  SET_ORDER (state: SummaryState, order: Order): void {
    state.order = order
  },
  SET_SEARCH (state: SummaryState, search: string): void {
    Vue.set(state, 'search', search)
  },
  SET_ERROR (state: SummaryState, error: boolean): void {
    state.error = error
  }
}
