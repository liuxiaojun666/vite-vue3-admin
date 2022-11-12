<script lang="ts" setup>
import { useRouter } from 'vue-router'
import DateNow from './DateNow.vue'
import MessageNotice from './MessageNotice.vue'
import ProjectList from './ProjectList.vue'
import UserInfo from './UserInfo.vue'

const router = useRouter()
</script>
<template>
  <el-header>
    <div class="header-left" @click="router.push('/')">
      <img src="@/assets/logo.png" alt="logo" />
      <h1 class="title">管理平台</h1>
    </div>
    <div class="header-right">
      <ProjectList />
      <div class="header-right-right">
        <DateNow />
        <MessageNotice />
        <UserInfo />
      </div>
    </div>
  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  --el-header-padding: 0;
  --el-header-height: 64px;
  background-color: #1b2d59;
  color: #fff;
  line-height: var(--el-header-height);
  box-shadow: inset 0px -1px 0px 0px rgba(115, 188, 255, 0.1);
  display: flex;
  align-items: center;

  .header-left {
    padding-left: 24px;
    width: 200px;
    display: flex;
    align-items: center;
    cursor: pointer;
    .title {
      margin-left: 8px;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .header-right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 16px;
    padding-left: 32px;

    &-right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
