import { defineStore } from 'pinia'
import { ref } from 'vue'
import { communityList as getCommunityListApi } from '@/api/community/community'

const mockTreeData: API.CommunityListItem[] = [
  {
    id: 'china',
    name: '全国',
    is_inner: false,
    level: 1,
    type: 'company',
    list: [
      {
        id: 'beijing',
        name: '北京市',
        is_inner: false,
        level: 2,
        type: 'company',
        list: [
          {
            id: 'changcheng',
            name: '八达岭长城',
            is_inner: true,
            level: 3,
            type: 'community',
            list: null,
          },
          {
            id: 'wangjing',
            name: '望京公园',
            is_inner: false,
            level: 3,
            type: 'community',
            list: null,
          },
          {
            id: 'blue_gangwan',
            name: '蓝色港湾',
            is_inner: false,
            level: 3,
            type: 'community',
            list: null,
          },
          {
            id: 'xiangshan',
            name: '香山',
            is_inner: false,
            level: 3,
            type: 'community',
            list: null,
          },
        ],
      },
      {
        id: 'tianjin',
        name: '天津市',
        is_inner: false,
        level: 2,
        type: 'company',
        list: [
          {
            id: 'yishifengqiang',
            name: '一十丰庆',
            is_inner: false,
            level: 3,
            type: 'community',
            list: null,
          },
        ],
      },
    ],
  },
]

export const useCommunityStore = defineStore('community_store', () => {
  const communityTree = ref<API.CommunityListItem[]>()
  const communityList = ref<API.CommunityListItem[]>([])
  const communityMapById = ref<{ [key: string]: API.CommunityListItem }>({})
  const currentCommunity = ref<API.CommunityListItem | null>(null)

  const getCommunityTree = async () => {
    const [err, res] = await getCommunityListApi()
    if (err) {
      communityTree.value = mockTreeData
      initCommunityData()
      return
    }
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
