<script lang="ts" setup>
import deleteConfirm from '@/utils/confirm'
defineProps<{
  building: { [key: string]: any } // Building
}>()
defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (event: 'edit', ...args: any[]): void
}>()

const random = Math.random()

const handleDeleteBuilding = () => {
  deleteConfirm({
    title: '确认删除吗？',
    content: '删除楼栋会将已绑设备的位置清除，是否删除？',
    onConfirm: (done) => {
      done()
    },
  })
}
</script>

<template>
  <div class="building-card">
    <div class="building-card__header">
      <div class="building-card__header__title">
        <span>1号楼</span>
      </div>
      <div class="building-card__header__extra">
        <ElIcon
          v-if="random < 0.5"
          size="18px"
          color="#ccc"
          class="edit-pen"
          @click="$emit('edit')">
          <IconEditPen />
        </ElIcon>
        <ElIcon
          size="18px"
          color="#FF3D3D"
          @click="handleDeleteBuilding"
          class="delete-building">
          <IconDelete />
        </ElIcon>
      </div>
    </div>
    <div class="building-card__body">
      <div
        v-if="random > 0.5"
        class="building-card__body__plus"
        @click="$emit('edit')">
        <ElIcon size="23px" color="rgba(0,0,0,.65)"><IconPlus /></ElIcon>
        <span>绑定电梯</span>
      </div>
      <div v-else class="building-card__body__number">
        <span>
          <span class="number">{{ (random * 10).toFixed() }}</span>
          <span class="unit">台</span>
        </span>
        <span class="msg">已绑定电梯</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.building-card {
  height: 151px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #d8dce6;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    line-height: 52px;
    padding: 0 16px;

    &__title {
      font-size: 16px;
      font-weight: 500;
      color: #1d2129;
    }

    &__extra {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .el-icon {
        cursor: pointer;
        &.edit-pen {
          margin-right: 8px;
        }
      }
    }
  }

  &__body {
    padding: 0 16px 16px 16px;
    flex: 1;

    &__plus {
      width: 100%;
      height: 100%;
      background: #edf5fe;
      border: 1px dashed #95a5bd;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      span {
        font-size: 12px;
        color: $color-primary;
        margin-top: 8px;
        line-height: 1;
      }
    }

    &__number {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      line-height: 1;
      padding-top: 9px;

      .number {
        font-size: 32px;
        font-weight: 500;
        color: #333;
      }

      .unit {
        font-size: 16px;
        color: #333;
      }

      .msg {
        font-size: 12px;
        color: #666;
        margin-top: 8px;
      }
    }
  }
}
</style>
