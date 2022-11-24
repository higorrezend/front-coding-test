import { CountryCasesState } from './state'
import { Error } from '@/types/SummaryTypes'
import { CountryStatus } from '@/types/CountryStatusTypes'

export default {
  TOGGLE_LOADING (state: CountryCasesState): void {
    state.loading = !state.loading
  },
  SET_ERROR (state: CountryCasesState, error: Error): void {
    state.error = error
  },
  SET_COUNTRY_STATUS (state: CountryCasesState, countryStatus: CountryStatus): void {
    state.countryStatus = countryStatus
  },
  SET_CONTRY_NAME (state: CountryCasesState, contryName: string): void {
    state.contryName = contryName
  }
}
