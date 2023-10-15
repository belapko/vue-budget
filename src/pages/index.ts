import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('./welcome/ui/WelcomePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./about/ui/AboutPage.vue')
  }
]
