<script lang="ts" setup>
import type Node from 'element-plus/es/components/tree/src/model/node'
import useCommunityStore from '@/stores/modules/community'

const communityStore = useCommunityStore()
communityStore.getCommunityTree()

// 选中节点
const selectChange = (nodeData: API.CommunityListItem, node: Node) => {
  if (node.isLeaf) {
    communityStore.switchCommunity(nodeData!.id)
  }
}
</script>

<template>
  <div class="project-list">
    <el-tree-select
      :model-value="communityStore.currentCommunity?.id"
      :data="communityStore.communityTree"
      :render-after-expand="false"
      :node-key="'id'"
      effect="dark"
      default-expand-all
      :indent="16"
      :teleported="false"
      :props="{ children: 'list', label: 'name' }"
      @current-change="selectChange" />
    <span class="project-name">
      <span>{{ communityStore.currentCommunity?.name }}</span>
      <ElIcon><IconArrowBottom /></ElIcon>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.project-list {
  position: relative;
  .el-select {
    --el-select-border-color-hover: transparent;
    --el-select-border-color: transparent;
    --el-select-input-focus-border-color: transparent;

    :deep(.el-input) {
      opacity: 0;
    }
  }
  .project-name {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    word-break: break-all;
    white-space: nowrap;
    overflow: hidden;

    .el-icon {
      margin-left: 8px;
      color: #ffffff;
    }
  }
  :deep(.el-popper.is-pure.is-dark.el-select__popper.el-tree-select__popper) {
    --el-bg-color-overlay: #242b4a;
    background-color: rgba(#242b4a, 0.9);
    box-shadow: none;
    border: 1px solid #509bfd;
    padding: 0;

    .el-popper__arrow::before {
      border: 1px solid #509bfd;
    }

    .el-tree {
      --el-fill-color-blank: rgba(#242b4a, 0.9);
      --el-fill-color-light: #242b4a;
      // --el-tree-text-color: #95a5bd;
      --el-tree-text-color: #ffffff;
      --el-tree-expand-icon-color: #ffffff;
      --el-text-color-regular: rgba(#ffffff, 0.6);
      --el-color-primary: #ffffff;
      overflow: hidden;
      .el-tree-node__content {
        overflow: visible;
        position: relative;
        &:hover,
        &.is-current {
          background-color: rgba(#509bfd, 0.3);
        }
        .el-select-dropdown__item.selected {
          position: static;
          &::before {
            content: '';
            position: absolute;
            left: -990px;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(#509bfd, 0.3);
          }
          span {
            position: relative;
            z-index: 1;
          }
        }
      }
    }
  }
}
</style>
