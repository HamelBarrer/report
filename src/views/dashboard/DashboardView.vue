<script setup lang="ts">
import { Card, CardBody } from '@progress/kendo-vue-layout';
import { Input } from '@progress/kendo-vue-inputs';

import FilterDashboard from '@/components/dashboard/FilterDashboard.vue';
import ChartContentDashboard from '@/components/dashboard/ChartContentDashboard.vue';
import FilterChartDashboard from '@/components/dashboard/FilterChartDashboard.vue';
import DetailDashboard from '@/components/dashboard/DetailDashboard.vue';

const initData = [
  {
    name: 'Diarios y Deltas',
    routing: 'dasboard',
  },
  {
    name: 'Devoluciones de llamadas',
    routing: 'dasboard',
  },
  {
    name: 'Estado del agente',
    routing: 'dasboard',
  },
  {
    name: 'Interacciones',
    routing: 'dasboard',
  },
  {
    name: 'Rendimiento de actitudes',
    routing: 'dasboard',
  },
  {
    name: 'Rendimiento de cola',
    routing: 'dasboard',
  },
  {
    name: 'Rendimiento de conclusion',
    routing: 'dasboard',
  },
  {
    name: 'Rendimiento de DNIS',
    routing: 'dasboard',
  },
  {
    name: 'Rendimiento del agente',
    routing: 'dasboard',
  },
];
</script>

<template>
  <Card style="box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1)">
    <CardBody>
      <div class="content__dashboard">
        <h2 class="content__title">Control de indicadores</h2>
        <div class="content__filter">
          <Input placeholder="Buscar" />
          <FilterDashboard :init-filter="initData" />
        </div>
        <div class="content__main">
          <FilterChartDashboard />
          <h2 class="title">Proceso de Archivos</h2>
          <div class="content__detail">
            <ChartContentDashboard />
            <DetailDashboard />
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
</template>

<style scoped>
.content__detail {
  display: flex;
  flex-direction: row;
}

.content__dashboard {
  display: grid;
  grid-template-areas:
    'title title'
    'filter main';
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 3rem 1fr;
  gap: 1rem;
}

.content__title {
  grid-area: title;
}

.content__filter {
  grid-area: filter;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content__main {
  grid-area: main;
}

.title {
  padding: 0;
}
</style>
