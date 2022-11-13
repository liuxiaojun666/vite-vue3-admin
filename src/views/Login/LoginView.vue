<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const login = () => {
  userStore.setToken('123456')
  useRouter().push('/')
}
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
