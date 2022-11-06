import { useUserStore } from '@/stores/modules/user'
import useCommunityStore from '@/stores/modules/community'
import axios from 'axios'
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 30 * 1000,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const userStore = useUserStore()
    const communityStore = useCommunityStore()
    config.headers = config.headers || {}
    config.headers.Token = userStore.token || ''
    if (config.method!.toUpperCase() === 'POST') {
      const community_id = communityStore.communityId
      config.data = config.data || {}
      if (!config.data.community_id && community_id) {
        config.data.community_id = config.data.community_id || community_id
      }
    }

    return config
  },
  (err: Error) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data || {}
    if (res.code === 200 || res.code === 0) return response
    if (
      res.code === 10001 ||
      res.code === 10101 ||
      res.code === 1100 ||
      res.code === 1004
    ) {
      // 未登录，重置用户信息
      useUserStore().$reset()
      window.location.replace(window.location.origin + '/login')
      return Promise.reject(response)
    } else {
      return Promise.reject(response)
    }
  },
  (err: any) => {
    // 处理 422 或者 500 的错误异常提示
    // Toast(err);
    return Promise.reject(err)
  }
)

interface RequestConfig extends AxiosRequestConfig {
  isLoading?: boolean
}

export interface ResponseData<T> {
  code: 200 | 0 | 10001 | 10101 | 1100 | 1004 | 1000 | number
  msg: string
  data: T | null
}

export default <T>(config: RequestConfig) => {
  if (config.isLoading) {
    // Toast.loading("loading");
  }
  type resSuccess = [never, ResponseData<T>]
  type resError = [ResponseData<null> | Error | string, never]
  return instance(config)
    .then((res: { data: ResponseData<T> }) => [null, res.data] as resSuccess)
    .catch((err: { data: any }) => [err?.data || err, null] as resError)
    .finally(() => {
      // Toast.clear();
    })
}
