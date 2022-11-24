import { countryStatusState } from './state'
import { Error } from '@/types/SummaryTypes'
import { CountryStatus } from '@/types/CountryStatusTypes'

export default {
  TOGGLE_LOADING (state: countryStatusState): void {
    state.loading = !state.loading
  },
  SET_ERROR (state: countryStatusState, error: Error): void {
    state.error = error
  },
  SET_COUNTRY_STATUS (state: countryStatusState, countryStatus: CountryStatus): void {
    state.countryStatus = countryStatus
  },
  SET_CONTRY_NAME (state: countryStatusState, contryName: string): void {
    state.contryName = contryName
  }
}
