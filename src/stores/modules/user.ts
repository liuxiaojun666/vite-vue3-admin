import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useUserStore = defineStore('user_store', () => {
  const token = ref('')

  const setToken = (newToken: string) => {
    token.value = newToken
  }

  const logout = () => {
    $reset()
    router.push('/login')
  }

  const $reset = () => {
    token.value = ''
  }

  return {
    token,
    setToken,
    logout,
  }
})

export default useUserStore
