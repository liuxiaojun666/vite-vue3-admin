<script lang="ts" setup>
import { useNow } from '@vueuse/core'
import { format, getDay } from 'date-fns/fp'
import { computed } from 'vue'
const now = useNow()
const nowStr = computed(() => {
  const day =
    '星期' + ['日', '一', '二', '三', '四', '五', '六'][getDay(now.value)]
  return format('yyyy/MM/dd HH:mm', now.value) + ' ' + day
})
</script>

<template>
  <span class="date-now">{{ nowStr }}</span>
</template>

<style lang="scss" scoped>
.date-now {
  margin-right: 32px;
  font-size: 14px;
  color: #95a5bd;
}
</style>
