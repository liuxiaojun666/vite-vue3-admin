import request from '@/utils/request'

export function communityList() {
  return request<API.CommunityListResult>({
    method: 'POST',
    url: '/community/tree/list',
    isLoading: true,
  })
}
