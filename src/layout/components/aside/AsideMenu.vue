<script lang="ts" setup>
import { useRoute } from 'vue-router'
import menuList from './menuList'

const route = useRoute()
defineProps<{
  isCollapse: boolean
}>()
</script>

<template>
  <el-menu
    :default-active="route.path"
    :collapse="isCollapse"
    router
    class="el-menu-vertical">
    <template v-for="item in menuList" :key="item.path">
      <el-sub-menu v-if="item.children?.length" :index="item.path">
        <template #title>
          <ElIcon size="28px">
            <component :is="item.icon"></component>
          </ElIcon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="child in item.children"
          :key="child.path"
          :index="child.path"
          :disabled="child.disabled">
          <span>{{ child.title }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :disabled="item.disabled">
        <ElIcon size="28px">
          <component :is="item.icon"></component>
        </ElIcon>
        <template #title>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<style scoped lang="scss">
@mixin menu-item-active-bg() {
  background: transparent;
  &::before {
    display: block;
    content: '';
    position: absolute;
    left: 16px;
    right: 16px;
    top: 6px;
    bottom: 6px;
    border-radius: 4px;
    background-color: var(--el-menu-hover-bg-color);
    z-index: 0;
  }
  span,
  .el-icon {
    position: relative;
    z-index: 1;
    color: var(--el-menu-hover-text-color);
  }
}

@mixin sub-menu-title-active {
  background: transparent;
  span,
  .el-icon {
    color: var(--el-menu-active-color);
  }
}

.el-menu {
  --el-menu-bg-color: transparent;
  --el-menu-hover-bg-color: #4284fe;
  --el-menu-text-color: #95a5bd;
  --el-menu-hover-text-color: #fff;
  --el-menu-active-color: #509bfd;
  --el-menu-item-font-size: 16px;
  --el-menu-base-level-padding: 16px;
  --el-menu-level-padding: 28px;
  --el-menu-item-height: 50px;

  height: 100%;
  overflow: auto;
  border-right: none;

  &-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }

  &-item {
    &.is-active,
    &:hover {
      @include menu-item-active-bg();
    }
  }

  .el-sub-menu {
    &.is-opened {
      background-color: #152447;
    }
    &.is-active {
      :deep(.el-sub-menu__title) {
        @include sub-menu-title-active;
      }
    }
    :deep(.el-sub-menu__title) {
      &:hover {
        @include sub-menu-title-active;
      }
    }
  }
}
</style>
