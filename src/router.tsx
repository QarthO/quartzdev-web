import { createRouter } from '@tanstack/react-router'

import { NotFound } from './app/__root'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  return createRouter({
    defaultNotFoundComponent: NotFound,
    routeTree,
    scrollRestoration: true,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
