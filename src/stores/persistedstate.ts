import type { PiniaPluginContext } from 'pinia'

interface Options {
  ids: string[]
  storageType?: 'sessionStorage' | 'localStorage'
}
export default (options: Options) =>
  ({ store }: PiniaPluginContext) => {
    const { ids } = options
    if (!ids.includes(store.$id)) return
    const storage = window[options.storageType || 'localStorage']
    try {
      const s = storage.getItem(store.$id)
      if (s) store.$state = JSON.parse(s)
    } catch (error) {
      console.error(error)
    }
    store.$subscribe((_, state) => {
      storage.setItem(store.$id, JSON.stringify(state))
    })
  }
