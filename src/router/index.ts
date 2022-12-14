import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import beforeEach from './beforeEach'
import summary, { SUMMARY_ROUTER_NAME } from './routers/summary'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  summary,
  {
    path: '*',
    redirect: {
      name: SUMMARY_ROUTER_NAME
    }
  }
]

const router = new VueRouter({
  routes
})

beforeEach(router)

export default router
