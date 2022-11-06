import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Community {
  community_id: string
  community_name: string
}
export const useCommunityStore = defineStore('community_store', () => {
  const communityList = ref<Community[]>([])
  const communityId = ref<string>('')
  const communityName = ref<string>('')

  const setCommunityList = (list?: Community[]) => {
    communityList.value = list || []
    if (communityId.value) return
    communityName.value = communityList.value[0]?.community_name
    communityId.value = communityList.value[0]?.community_id
  }

  const setCommunityId = (id: string) => {
    communityId.value = id
    const communityInfo = communityList.value.find(
      (item) => item.community_id === id
    )
    communityName.value = communityInfo?.community_name || ''
  }

  const $reset = () => {
    communityList.value = []
    communityId.value = ''
    communityName.value = ''
  }

  return {
    communityList,
    communityId,
    communityName,
    setCommunityList,
    setCommunityId,
    $reset,
  }
})

export default useCommunityStore
