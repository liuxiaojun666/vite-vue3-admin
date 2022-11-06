import qs from 'qs'
import { addAsyncRoutes } from './router/addAsyncRoute'
import useUserStore from './stores/modules/user'

export default async () => {
  const { token } = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  })
  const userStore = useUserStore()
  if (token) userStore.setToken(token as string)
  if (!userStore.token) return
  addAsyncRoutes()
}
