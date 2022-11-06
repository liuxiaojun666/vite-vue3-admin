import type { RouteRecordName, RouteRecordRaw } from 'vue-router'
const route: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'page404',
  component: () => import('./NotPage.vue'),
  meta: { code: '', title: '页面不存在' },
}

// 是否是异步路由
export const isAsyncRoute = false
// 父路由
export const parentRouteName: RouteRecordName = ''
// 默认导出当前路由
export default route
