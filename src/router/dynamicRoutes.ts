import type { RouteRecordName, RouteRecordRaw } from 'vue-router'

interface RouteFile {
  default: RouteRecordRaw
  parentRouteName?: RouteRecordName
  isAsyncRoute?: boolean
}

const constantRoutes: RouteRecordRaw[] = []
const asyncRoutes: RouteRecordRaw[] = []
const routeFiles = import.meta.glob<RouteFile>('../views/**/router.config.ts', {
  as: 'route',
  eager: true,
})

const routeMapByName = new Map()
// 子路由类型
type subRoute = [RouteRecordName, RouteRecordRaw]
// 子路由数组
const subRoutes: subRoute[] = []

for (const routePath in routeFiles) {
  const routeFileExport = routeFiles[routePath]
  const {
    default: route,
    parentRouteName,
    isAsyncRoute = true,
  } = routeFileExport
  if (parentRouteName) {
    subRoutes.push([parentRouteName, route])
  } else {
    ;(isAsyncRoute ? asyncRoutes : constantRoutes).push(route)
  }
  routeMapByName.set(route.name, route)
}

subRoutes.forEach(([parentRouteName, route]) => {
  const parentRoute = routeMapByName.get(parentRouteName)
  if (!parentRoute) {
    if (import.meta.env.DEV) {
      console.warn(
        `parentRouteName: ${parentRouteName as string} is not found.`
      )
    }
    return
  }
  parentRoute.children = parentRoute.children || []
  parentRoute.children.push(route)
})

export { asyncRoutes, constantRoutes }
