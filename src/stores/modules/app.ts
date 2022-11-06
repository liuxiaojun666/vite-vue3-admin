import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppConfig = defineStore('app', () => {
  const pageTitle = ref('品质云梯')
  return {
    pageTitle,
  }
})

export default useAppConfig
