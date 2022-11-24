import { SummaryApiService } from '@/services/Covid19Api/SummaryApiService'
import { Error, Summary } from '@/types/SummaryTypes'
import { Commit, Dispatch } from 'vuex'
import { SummaryState } from './state'
import { SUMMARY_PER_PAGE_NUMBER } from '@/constants/summary'
import {
  GET_SUMMARY_DATA_ERROR_ID,
  GET_SUMMARY_DATA_ERROR_TITLE,
  GET_SUMMARY_DATA_ERROR_MESSAGE,
  PROCESS_SUMMARY_DATA_ERROR_ID,
  PROCESS_SUMMARY_DATA_ERROR_TITLE,
  PROCESS_SUMMARY_DATA_ERROR_MESSAGE
} from '@/constants/errors'

const processSummaryDataError = (): Error => {
  const error: Error = {
    id: PROCESS_SUMMARY_DATA_ERROR_ID,
    status: true,
    title: PROCESS_SUMMARY_DATA_ERROR_TITLE,
    message: PROCESS_SUMMARY_DATA_ERROR_MESSAGE
  }
  return error
}

const getSummaryDataError = (): Error => {
  const error: Error = {
    id: GET_SUMMARY_DATA_ERROR_ID,
    status: true,
    title: GET_SUMMARY_DATA_ERROR_TITLE,
    message: GET_SUMMARY_DATA_ERROR_MESSAGE
  }
  return error
}

export default {
  async getSummaryDataFromApi ({ commit, dispatch }: { commit: Commit, dispatch: Dispatch }): Promise<void> {
    commit('TOGGLE_LOADING')
    try {
      const summary: Summary = await (new SummaryApiService()).getSummary()
      dispatch('processSummaryData', summary)
    } catch (error) {
      commit('SET_ERROR', getSummaryDataError())
    }
    commit('TOGGLE_LOADING')
  },
  processSummaryData ({ commit }: { commit: Commit }, { Global, Countries }: Summary): void {
    commit('SET_GLOBAL', Global)
    if (Countries) {
      commit('SET_COUNTRIES', Countries)
    } else {
      commit('SET_ERROR', processSummaryDataError())
    }
  },
  loadMoreCountries ({ state, commit }: { commit: Commit, state: SummaryState }): void {
    commit('SET_PER_PAGE', state.perPage + SUMMARY_PER_PAGE_NUMBER)
  }
}
