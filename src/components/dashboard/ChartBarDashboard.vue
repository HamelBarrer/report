<script setup lang="ts">
import { ref } from 'vue';

import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from '@progress/kendo-vue-charts';

const categories = ref([
  'No de actividades diarias',
  'No de actividades deltas',
]);

const series = ref([
  { name: 'Excel', data: [256, 100] },
  { name: 'Pdf', data: [25, 10] },
  { name: 'Word', data: [100, 9] },
  { name: 'Db', data: [200, 400] },
]);

const labelContent = (e: any) => {
  return e.dataItem;
};
</script>

<template>
  <Chart>
    <ChartTitle text="Cuenta de filename" />
    <ChartLegend position="top" orientation="horizontal" />
    <ChartCategoryAxis>
      <ChartCategoryAxisItem :categories="categories" :startAngle="45" />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem
        v-for="(item, i) in series"
        :key="i"
        type="column"
        :data-items="item.data"
        :name="item.name"
      >
        <ChartSeriesLabels
          color="#333"
          background="none"
          :content="labelContent"
        />
      </ChartSeriesItem>
    </ChartSeries>
  </Chart>
</template>

<style scoped></style>
