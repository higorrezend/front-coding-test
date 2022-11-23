import { SummaryApiService } from '@/services/Covid19Api/SummaryApiService'
import { Summary } from '@/types/SummaryTypes'
import { Commit } from 'vuex'
import { SummaryState } from './state'

export default {
  async getSumaryDataFromApi ({ commit }: { commit: Commit }): Promise<void> {
    commit('TOGGLE_LOADING')
    try {
      const { Global, Countries }: Summary = await (new SummaryApiService()).getSummary()
      commit('SET_COUNTRIES', Countries)
      commit('SET_GLOBAL', Global)
    } catch (error) {
      commit('SET_ERROR', true)
    }
    commit('TOGGLE_LOADING')
  },
  loadMoreCountries ({ state, commit }: { commit: Commit, state: SummaryState }): void {
    commit('SET_PER_PAGE', state.perPage + 10)
  }
}
