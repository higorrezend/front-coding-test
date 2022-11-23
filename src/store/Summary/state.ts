import { Countries, Global, Order } from '@/types/SummaryTypes'

export interface SummaryState {
  countries: Countries
  loading: boolean
  global?: Global,
  order: Order,
  search?: string
}

const countriesState: SummaryState = {
  countries: [],
  loading: false,
  order: Order.DEFAULT
}

export default countriesState
