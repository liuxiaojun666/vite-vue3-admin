<script setup lang="ts">
import dataEmptyImage from '@/assets/images/data_empty.png'
import searchEmptyImage from '@/assets/images/search_empty.png'
interface PropsConfig {
  image?: string
  imageSize?: number
  search?: boolean
}
withDefaults(defineProps<PropsConfig>(), {
  image: dataEmptyImage as string,
  imageSize: 200,
  search: false,
})
</script>
<template>
  <div class="placeholder-content">
    <el-empty
      v-bind="$attrs"
      :image="search ? searchEmptyImage : image"
      :image-size="imageSize">
      <template v-for="(item, key) in $slots" :key="key" #[key]>
        <slot :name="key"></slot>
      </template>
    </el-empty>
  </div>
</template>
<style scoped lang="scss">
.placeholder-content {
  .el-empty {
    --el-empty-padding: 0;
    --el-empty-description-margin-top: 24px;
    --el-empty-bottom-margin-top: 8px;
    ::v-deep(.el-empty__description > p) {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #8c8c8c;
      line-height: 20px;
      white-space: nowrap;
    }
  }
}
</style>
