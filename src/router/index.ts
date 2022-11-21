import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import countries, { COUNTRIES_ROUTER_NAME } from './routers/countries'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  countries,
  {
    path: '*',
    redirect: {
      name: COUNTRIES_ROUTER_NAME
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
