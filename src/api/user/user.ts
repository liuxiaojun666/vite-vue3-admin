import request from '@/utils/request'

export function userInfo() {
  return request<API.UserInfoResult>({
    method: 'POST',
    url: '/user/info',
    isLoading: true,
  })
}
