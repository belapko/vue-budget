import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name: 'Authentication',
    component: () => import('./authentication/ui/AuthenticationPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./about/ui/AboutPage.vue')
  }
]
