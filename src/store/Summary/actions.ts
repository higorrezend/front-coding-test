import { SummaryApiService } from '@/services/Covid19Api/SummaryApiService'
import { Summary } from '@/types/SummaryTypes'
import { Commit } from 'vuex'

export default {
  async getCountriesSumary ({ commit }: { commit: Commit }): Promise<void> {
    commit('TOGGLE_LOADING')
    try {
      const { Global, Countries }: Summary = await (new SummaryApiService()).getSummary()
      commit('SET_COUNTRIES', Countries)
      commit('SET_GLOBAL', Global)
    } catch (error) {
      commit('SET_ERROR', true)
    }
    commit('TOGGLE_LOADING')
  }
}
