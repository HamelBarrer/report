<script setup lang="ts">
import { Card, CardBody } from '@progress/kendo-vue-layout';
import { Input } from '@progress/kendo-vue-inputs';

import ChartDashboard from '../../components/dashboard/ChartDashboard.vue';
import ChartBarDashboard from '../../components/dashboard/ChartBarDashboard.vue';
import ChartBarLineDashboard from '../../components/dashboard/ChartBarLineDashboard.vue';

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
      <h2>Control de indicadores</h2>
      <div class="row k-mb-4">
        <div class="col col-4">
          <Input placeholder="Buscar" />
          <div v-for="(data, i) in initData">
            {{ data }}
          </div>
        </div>
        <div class="col col-8">
          <h2>Proceso de Archivos</h2>
          <div class="row">
            <div class="col col-6">
              <ChartDashboard />
            </div>
            <div class="col col-6">
              <ChartBarDashboard />
              <ChartBarLineDashboard />
            </div>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
</template>

<style scoped></style>
