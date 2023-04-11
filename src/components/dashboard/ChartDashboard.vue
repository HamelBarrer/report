<script setup lang="ts">
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from '@progress/kendo-vue-charts';
import 'hammerjs';

import { ref } from 'vue';

const data = ref([
  {
    tipo: 'otro',
    cantidad: 1,
  },
  {
    tipo: 'casa',
    cantidad: 10,
  },
]);

const labelContent = (e: any) => e.dataItem.cantidad;
</script>

<template>
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        type="donut"
        :data-items="data"
        category-field="tipo"
        field="cantidad"
      >
        <ChartSeriesLabels
          color="#fff"
          background="none"
          :content="labelContent"
        />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend :visible="false" />
  </Chart>
</template>

<style scoped></style>
