<script lang="ts" setup>
defineProps<{
  title?: string
  height?: string
  contentPadding?: string
  contentClass?: string | string[] | Record<string, boolean>
}>()
</script>

<template>
  <div class="common-card" :style="{ height: height }">
    <header v-if="title || $slots.header">
      <slot name="header">
        <span class="title">{{ title }}</span>
      </slot>
    </header>
    <main :class="contentClass" :style="{ padding: contentPadding }">
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.common-card {
  background-color: #fff;
  border-radius: 4px;
  border-radius: 0px 0px 4px 4px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(#979797, 0.1);
    height: 54px;
    padding: 0 16px;

    .title {
      font-size: 16px;
      font-weight: 500;
      color: #1d2129;
    }
  }

  main {
    flex: 1;
    padding: 16px;
  }
}
</style>
