import { Countries, Global, Order } from '@/types/SummaryTypes'

export interface SummaryState {
  countries: Countries
  loading: boolean
  error: boolean
  global?: Global,
  order: Order,
  search?: string
}

const countriesState: SummaryState = {
  countries: [],
  loading: false,
  error: false,
  order: Order.ALPHABETICAL_ASC
}

export default countriesState
