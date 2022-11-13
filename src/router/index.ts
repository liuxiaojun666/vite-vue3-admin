import { afterEach, beforeEach } from './router-each'
import { createRouter, createWebHistory } from 'vue-router'
import constantRoutes from './constantRoutes'
export { asyncRoutes } from './dynamicRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
})

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name) router.removeRoute(name)
  })
  constantRoutes.forEach((route) => {
    router.addRoute(route)
  })
}

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
