import type { RouteRecordRaw } from 'vue-router'
import { constantRoutes } from './dynamicRoutes'
import router from './index'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: () => {
      if (router.hasRoute('Home')) return { name: 'Home' }
      else return { name: 'Login' }
    },
  },
  ...constantRoutes,
]

export default routes
