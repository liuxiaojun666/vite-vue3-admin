import type { RouteRecordName, RouteRecordRaw } from 'vue-router'
import router, { asyncRoutes } from '@/router'

const lazyRoutes: RouteRecordRaw[] = []
const parentRouteNameKey = Symbol('RouteRecordNameKey')

// 添加异步路由
export function addAsyncRoutes(
  routes: RouteRecordRaw[] = asyncRoutes,
  parentRouteName?: RouteRecordName
) {
  routes.forEach((route) => {
    if (!route.name) throw new Error('路由必须有 name')
    // 懒加载路由，保存父路由的 name
    if (route.meta?.lazy) {
      route.meta[parentRouteNameKey] = parentRouteName
      return lazyRoutes.push(route)
    }
    // 已经添加过的路由，不再重复添加
    if (route.name && router.hasRoute(route.name)) return
    // 有父路由，添加到父路由下
    if (parentRouteName) router.addRoute(parentRouteName, route)
    // 没有父路由，添加到根路由下
    else router.addRoute(route)
    // 递归添加子路由
    if (route.children?.length) addAsyncRoutes(route.children, route.name)
  })
}

// 添加一个懒路由
export function addLazyRoute(routeName: RouteRecordName) {
  if (router.hasRoute(routeName)) return
  lazyRoutes.some((route) => {
    if (route.name !== routeName) return false
    const parentRouteName = route.meta?.[parentRouteNameKey]
    parentRouteName ? router.addRoute(route) : router.addRoute(route)
    return true
  })
}
