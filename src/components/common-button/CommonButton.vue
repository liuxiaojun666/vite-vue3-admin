<script setup lang="ts">
import { computed, unref, toRefs } from 'vue'

interface PropsConfig {
  size?: string
  type?: 'primary' | 'warning' | 'second' | 'ghost' | 'custom'
  // type 为ghost时生效
  color?: string
  // type 为custom时生效
  customStyle?: CSSGroupingRule
  disabled?: boolean | string
  // css background属性，优先级高，会覆盖css样式
  background?: string
}
const props = withDefaults(defineProps<PropsConfig>(), {
  size: '80*32',
  type: 'primary',
  color: '',
  customStyle: undefined,
  background: '',
  disabled: false,
})
type EmitsConfig = {
  // eslint-disable-next-line
  (e: 'click', event: MouseEvent): void
}
const emits = defineEmits<EmitsConfig>()
const { size, type, color, background, customStyle, disabled } = toRefs(props)
const style = computed(() => {
  const sizeArr = unref(size).split('*')
  return {
    width: Number.isNaN(unref(sizeArr)[0])
      ? unref(sizeArr)[0]
      : unref(sizeArr)[0] + 'px',
    height: Number.isNaN(unref(sizeArr)[1])
      ? unref(sizeArr)[1]
      : unref(sizeArr)[1] + 'px',
    color: unref(type) === 'ghost' ? unref(color) : '',
    'border-color': unref(type) === 'ghost' ? unref(color) : '',
    background: unref(background),
    ...(unref(type) === 'custom' ? unref(customStyle) : {}),
  }
})
function processClick(e: MouseEvent) {
  if (!unref(disabled)) emits('click', e)
}
</script>
<template>
  <button
    :class="{
      button: true,
      [type]: true,
      disabled: disabled,
    }"
    :style="style"
    @click.stop="processClick"
    v-bind="$attrs">
    <div class="button-content flex jc-c ai-c">
      <slot></slot>
    </div>
  </button>
</template>
<style scoped lang="scss">
.button {
  appearance: none;
  outline: none;
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  color: #ffffff;
  background: #fff;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  &.primary {
    background-color: var(--el-color-primary);
  }
  &.disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
  &.ghost {
    background: #fff;
    border: 1px solid var(--el-color-primary);
    color: var(--el-color-primary);
  }
  .button-content {
    width: 100%;
    white-space: nowrap;
  }
}
</style>
