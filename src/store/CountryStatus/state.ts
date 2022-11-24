import { Error } from '@/types/SummaryTypes'
import { CountryStatus } from '@/types/CountryStatusTypes'

export interface CountryCasesState {
  contryName?: string
  countryStatus: CountryStatus
  loading: boolean
  error: Error
}

export default {
  contryName: '',
  countryStatus: [],
  loading: false,
  error: {
    status: false
  }
}
