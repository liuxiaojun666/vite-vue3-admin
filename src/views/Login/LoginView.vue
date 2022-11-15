<script setup lang="ts">
import { onScopeDispose } from 'vue'
import useUserStore from '@/stores/modules/user'
const userStore = useUserStore()
let timer: number
const login = () => {
  // 解决gitee pages登录后，页面不跳转的问题
  timer = setTimeout(() => {
    location.reload()
  }, 1000)
  userStore.setToken('123456')
  location.reload()
}
onScopeDispose(() => {
  clearTimeout(timer)
})
</script>

<template>
  <ElContainer>
    <ElHeader>
      <ElRow>
        <ElCol :span="12">
          <ElInput placeholder="账号" />
          <ElInput placeholder="密码" type="password" />
          <ElButton @click="login" type="primary">登录</ElButton>
        </ElCol>
      </ElRow>
    </ElHeader>
  </ElContainer>
</template>
