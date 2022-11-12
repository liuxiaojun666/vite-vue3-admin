<script setup lang="ts">
import { ref } from 'vue'

const username = ref('admin')
</script>

<template>
  <div class="user-info">
    <div class="avatar">{{ username.charAt(0) }}</div>
    <span class="username">{{ username }}</span>
  </div>
</template>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(149, 165, 189, 0.16);
    margin-right: 8px;
    text-align: center;
    line-height: 32px;
    color: #95a5bd;
    font-size: 16px;
  }
  .username {
    font-size: 14px;
    color: #95a5bd;
  }
}
</style>
