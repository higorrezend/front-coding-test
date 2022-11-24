import { Error } from '@/types/SummaryTypes'
import { Commit } from 'vuex'
import {
  GET_SUMMARY_DATA_ERROR_ID,
  GET_SUMMARY_DATA_ERROR_TITLE,
  GET_SUMMARY_DATA_ERROR_MESSAGE
} from '@/constants/errors'
import { CountryStatusConfirmedApiService } from '@/services/Covid19Api/CountryStatusConfirmedApiService'
import { CountryStatus } from '@/types/CountryStatusTypes'

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
  async getCountryStatusConfirmedDataFromApi ({ commit }: { commit: Commit }, countryName: string): Promise<void> {
    commit('TOGGLE_LOADING')
    try {
      const countryStatus: CountryStatus = await (new CountryStatusConfirmedApiService()).getCountryStatusConfirmed(countryName)
      commit('SET_COUNTRY_STATUS', countryStatus)
      commit('SET_CONTRY_NAME', countryStatus[0].Country)
    } catch (error) {
      commit('SET_ERROR', getSummaryDataError())
    }
    commit('TOGGLE_LOADING')
  },
  clearCountryStatus ({ commit }: { commit: Commit }): void {
    commit('SET_COUNTRY_STATUS', {})
    commit('SET_CONTRY_NAME', '')
    commit('SET_ERROR', { status: false })
  }
}
