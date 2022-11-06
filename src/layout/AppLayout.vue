<script setup lang="ts">
import AsideMenu from './components/AsideMenu.vue'
import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <AsideMenu :is-collapse="isCollapse" />
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;

    .el-header {
      background-color: #1b2d59;
      height: 64px;
    }

    .el-aside {
      background-color: #1b2d59;
      color: #fff;
      background-image: url(./images/asside-bg.png);
    }
  }
}
</style>
