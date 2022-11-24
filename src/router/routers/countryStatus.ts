
import CountryStatus from '@/views/CountryStatus/index.vue'

export const COUNTRY_STATUS_ROUTER_PATH = '/country-status/:country'
export const COUNTRY_STATUS_ROUTER_NAME = 'country-status'

export default {
  path: COUNTRY_STATUS_ROUTER_PATH,
  name: COUNTRY_STATUS_ROUTER_NAME,
  component: CountryStatus,
  meta: {
    title: 'Últimos casos confirmados do país'
  }
}
