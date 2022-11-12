declare namespace API {
  type CommunityListItem = {
    id: string
    is_inner: boolean
    level: number
    list?: CommunityListItem[]
    name: string
    type: string
  }
  type CommunityListResult = {
    count: number
    list: CommunityListItem
  }
}
