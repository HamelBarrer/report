<script setup lang="ts">
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { ref } from 'vue';

const time = ref(['1 dia', '1 semana', '1 mes']);
const headquarters = ref(['Chapinero', 'Ricuarte', 'Suba', 'Usme', 'Soacha']);
</script>

<template>
  <div class="row">
    <div class="col col-6">
      <DropDownList :data-items="time" default-item="Seleccionar" />
    </div>
    <div class="col col-6">
      <DropDownList :data-items="headquarters" default-item="Seleccionar" />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
