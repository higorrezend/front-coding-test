import VueRouter, { Route } from 'vue-router'

const TITLE_BASE = 'Covidômetro'

export default (router: VueRouter): void => {
  router.beforeEach(async (to: Route, _: Route, next) => {
    const title: string = to?.meta?.title
    document.title = createPageTitle(title)
    return next()
  })
}

const createPageTitle = (title: string) => {
  if (title) {
    return `${title} - ${TITLE_BASE}`
  }
  return TITLE_BASE
}
