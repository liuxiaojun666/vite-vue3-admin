<script setup lang="ts">
import { ref } from 'vue'
import BindElevator from './components/BindElevator.vue'
import BuildingCard from './components/BuildingCard.vue'
interface Building {
  id: number
  name: string
}
const editDialog = ref<InstanceType<typeof BindElevator>>()
const buildings = ref<Building[]>([
  { id: 1, name: '' },
  { id: 2, name: '' },
  { id: 3, name: '' },
  { id: 4, name: '' },
  { id: 5, name: '' },
  { id: 6, name: '' },
])
const handleAddBuilding = () => {}
</script>

<template>
  <CommonHeader :breadcrumb="['楼栋信息']">
    <CommonButton type="primary" size="120*32" @click="handleAddBuilding">
      <ElIcon size="18px"><IconPlus /></ElIcon>
      <span>添加楼栋</span>
    </CommonButton>
  </CommonHeader>
  <CommonCard class="flex-1" title="楼栋信息">
    <div class="building-info__list">
      <BuildingCard
        v-for="building in buildings"
        :key="building.id"
        :building="building"
        @edit="editDialog?.showDialog" />
    </div>
  </CommonCard>
  <BindElevator ref="editDialog" />
</template>

<style lang="scss" scoped>
.building-info__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  grid-gap: 16px;
}
</style>
