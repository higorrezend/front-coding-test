import Summary from '@/views/Summary/index.vue'
import countryConfirmedCases from '@/router/routers/countryConfirmedCases'

export const SUMMARY_ROUTER_PATH = '/'
export const SUMMARY_ROUTER_NAME = 'summary'

export default {
  path: SUMMARY_ROUTER_PATH,
  name: SUMMARY_ROUTER_NAME,
  component: Summary,
  meta: {
    title: 'Resumo de países'
  },
  children: [
    countryConfirmedCases
  ]
}
