
import CountryConfirmedCases from '@/views/CountryConfirmedCases/index.vue'

export const COUNTRY_CONFIRMED_CASES_ROUTER_PATH = '/country-confirmed-cases/:country'
export const COUNTRY_CONFIRMED_CASES_ROUTER_NAME = 'country-confirmed-cases'

export default {
  path: COUNTRY_CONFIRMED_CASES_ROUTER_PATH,
  name: COUNTRY_CONFIRMED_CASES_ROUTER_NAME,
  component: CountryConfirmedCases,
  meta: {
    title: 'Últimos casos confirmados do país'
  }
}
