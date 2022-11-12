import { defineStore } from 'pinia'
import { ref } from 'vue'
import { communityList as getCommunityListApi } from '@/api/community/community'

export const useCommunityStore = defineStore('community_store', () => {
  const communityTree = ref<API.CommunityListItem[]>()
  const communityList = ref<API.CommunityListItem[]>([])
  const communityMapById = ref<{ [key: string]: API.CommunityListItem }>({})
  const currentCommunity = ref<API.CommunityListItem | null>(null)

  const getCommunityTree = async () => {
    const [err, res] = await getCommunityListApi()
    if (err) return
    communityTree.value = res.data?.list && [res.data?.list]
    initCommunityData()
  }

  const initCommunityData = () => {
    communityList.value = []
    communityMapById.value = {}
    const treeList = communityTree.value
    const loop = (list?: API.CommunityListItem[]) => {
      list?.forEach((item) => {
        if (item.list) return loop(item.list)
        communityList.value.push(item)
        communityMapById.value[item.id] = item
      })
    }
    loop(treeList)
    if (currentCommunity.value) {
      currentCommunity.value = communityMapById.value[currentCommunity.value.id]
    }
    if (!currentCommunity.value && communityList.value.length) {
      currentCommunity.value = communityList.value[0]
    }
  }

  const switchCommunity = (id: string) => {
    currentCommunity.value = communityMapById.value[id]
  }

  const $reset = () => {
    communityTree.value = []
    communityList.value = []
    communityMapById.value = {}
    currentCommunity.value = null
  }

  return {
    communityTree,
    communityList,
    communityMapById,
    currentCommunity,
    getCommunityTree,
    switchCommunity,
    $reset,
  }
})

export default useCommunityStore
