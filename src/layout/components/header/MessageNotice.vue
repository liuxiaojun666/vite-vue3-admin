<script lang="ts" setup></script>

<template>
  <div class="message-notice">
    <ElBadge :value="1">
      <ElIcon size="32px"><IconMessageNotice /></ElIcon>
    </ElBadge>
    <span>消息</span>
  </div>
</template>

<style lang="scss" scoped>
.message-notice {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 32px;
  height: 32px;
  position: relative;
  span {
    margin-left: 8px;
    font-size: 14px;
    color: #95a5bd;
  }
  .el-badge {
    margin-top: 16px;

    :deep(.el-badge__content--danger) {
      transform: translateY(0) translateX(100%);
    }
  }
}
</style>
