import type { NavigationGuard, NavigationHookAfter } from 'vue-router'
import nProgress from 'nprogress'
import useAppConfig from '@/stores/modules/app'
import { useUserStore } from '@/stores/modules/user'
import router from '.'

nProgress.configure({ showSpinner: false })

// 设置页面title
function setPageTitle(nextTitle = '') {
  const appConfig = useAppConfig()
  const page_title = appConfig.pageTitle
  if (nextTitle) {
    document.title = nextTitle + '-' + page_title
  } else {
    document.title = page_title
  }
}

export const beforeEach: NavigationGuard = (to, from, next) => {
  nProgress.start()
  // 设置页面title
  setPageTitle(to.meta?.title as string)
  const userStore = useUserStore()
  // 权限校验，如果没有token，跳转到登录页
  if (!userStore.token) {
    if (to.path !== '/login') return userStore.logout()
    else return next()
  }
  // 重复登录校验，如果已经登录，跳转到首页
  if (to.path === '/login') {
    return next({ path: '/' })
  }
  next()
}

export const afterEach: NavigationHookAfter = (to) => {
  if (to.query?.token) {
    router.replace({ query: { token: undefined } })
  }
  nProgress.done()
}
