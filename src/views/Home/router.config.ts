import type { RouteRecordName, RouteRecordRaw } from 'vue-router'
const route: RouteRecordRaw = {
  path: '/Home',
  alias: '/home',
  name: 'Home',
  component: () => import('./HomeView.vue'),
  meta: { title: '工作台', code: 'home', layout: 'default' },
  beforeEnter: (to, from, next) => {
    if (to.path === '/home') next({ path: '/Home' })
    else next()
  },
}

// 是否是异步路由
export const isAsyncRoute = true
// 父路由
export const parentRouteName: RouteRecordName = ''
// 默认导出当前路由
export default route
