<script setup lang="ts">
defineProps<{
  icon: string
  size?: number | string
  color?: string
}>()
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :fill="color"
    class="svg-icon"
    xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  vertical-align: middle;
}
</style>
