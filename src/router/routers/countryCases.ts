
import CountryCases from '@/views/CountryCases/index.vue'

export const COUNTRY_CASES_ROUTER_PATH = '/country-cases/:country'
export const COUNTRY_CASES_ROUTER_NAME = 'country-cases'

export default {
  path: COUNTRY_CASES_ROUTER_PATH,
  name: COUNTRY_CASES_ROUTER_NAME,
  component: CountryCases,
  meta: {
    title: 'Últimos casos confirmados do país'
  }
}
