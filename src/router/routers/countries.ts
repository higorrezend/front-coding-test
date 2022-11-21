import Countries from '@/views/Countries.vue'

export const COUNTRIES_ROUTER_PATH = '/'
export const COUNTRIES_ROUTER_NAME = 'countries'

export default {
  path: COUNTRIES_ROUTER_PATH,
  name: COUNTRIES_ROUTER_NAME,
  component: Countries,
  meta: {
    title: 'Resumo de países'
  }
}
