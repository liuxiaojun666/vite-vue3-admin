<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div>{{ route.fullPath }} 没有发现</div>
  <div>
    <van-button @click="router.back()">返回上一页</van-button>
    <van-button @click="router.replace({ name: 'root' })">返回首页</van-button>
  </div>
</template>
