import { SUMMARY_PER_PAGE_NUMBER } from '@/constants/summary'
import { Countries, Global, Order, Error } from '@/types/SummaryTypes'

export interface SummaryState {
  countries: Countries
  loading: boolean
  error: Error
  global?: Global
  order: Order
  search?: string
  page: number
  perPage: number
}

const countriesState: SummaryState = {
  countries: [],
  loading: false,
  error: {
    status: false
  },
  order: Order.ALPHABETICAL_ASC,
  page: 1,
  perPage: SUMMARY_PER_PAGE_NUMBER
}

export default countriesState
