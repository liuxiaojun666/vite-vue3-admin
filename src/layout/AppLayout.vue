<script setup lang="ts">
import AsideMenu from './components/aside/AsideMenu.vue'
import { ref } from 'vue'
import PageHeader from './components/header/PageHeader.vue'
import { useRoute } from 'vue-router'

defineProps<{
  mainPadding?: string
}>()

const route = useRoute()
const isCollapse = ref(false)
</script>

<template>
  <div class="common-layout">
    <el-container direction="vertical">
      <PageHeader v-if="route.meta.layout !== 'empty'" />
      <el-container>
        <el-aside v-if="route.meta.layout === 'default'" width="max-content">
          <AsideMenu :is-collapse="isCollapse" />
          <ElIcon size="24px" color="#95A5BD" @click="isCollapse = !isCollapse">
            <IconMenuCollapse />
          </ElIcon>
        </el-aside>
        <el-main :style="{ padding: mainPadding }">
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  --el-header-height: 64px;
  height: 100%;

  > .el-container {
    height: 100%;

    .el-container {
      height: calc(100% - var(--el-header-height));
      .el-aside {
        background-color: #1b2d59;
        color: #fff;
        background-image: url(./images/aside-bg.png);
        background-repeat: repeat-y;
        position: relative;
        height: 100%;
        padding-bottom: 50px;
        overflow: hidden;

        > .el-icon {
          position: absolute;
          bottom: 16px;
          right: 16px;
          cursor: pointer;
        }
      }
      .el-main {
        --el-main-padding: 0 16px 16px 16px;
        height: 100%;
        overflow: auto;
        background-color: #f7f8fa;
        position: relative;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
