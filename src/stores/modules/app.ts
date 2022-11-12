import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppConfig = defineStore('app', () => {
  const pageTitle = ref('管理平台')
  return {
    pageTitle,
  }
})

export default useAppConfig
