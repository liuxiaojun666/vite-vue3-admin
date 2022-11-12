<script lang="ts" setup>
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  breadcrumb: Array<{ name: string; to?: RouteLocationRaw } | string>
}>()

const breadcrumb = computed(() =>
  props.breadcrumb.map((item) => {
    if (typeof item === 'string') {
      return {
        name: item,
        to: undefined,
      }
    }
    return item
  })
)
</script>

<template>
  <header class="common-header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in breadcrumb"
        :key="item.name"
        :to="item.to">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <slot />
  </header>
</template>

<style lang="scss" scoped>
.common-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0 16px;

  .el-breadcrumb {
    --el-text-color-regular: #1b1c1d;
    --el-text-color-primary: #8c8c8c;
    --el-text-color-placeholder: #8c8c8c;

    :deep(.el-breadcrumb__separator) {
      margin: 0 2px;
    }
  }
}
</style>
