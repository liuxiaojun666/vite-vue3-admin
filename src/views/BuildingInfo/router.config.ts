import type { RouteRecordName, RouteRecordRaw } from 'vue-router'
const route: RouteRecordRaw = {
  path: '/BuildingInfo',
  name: 'BuildingInfo',
  component: () => import('./BuildingInfo.vue'),
  meta: { title: '楼栋信息', code: 'home', layout: 'default' },
}

// 是否是异步路由
export const isAsyncRoute = true
// 父路由
export const parentRouteName: RouteRecordName = ''
// 默认导出当前路由
export default route
