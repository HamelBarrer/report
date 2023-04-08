<script setup lang="ts">
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartTooltip,
  ChartValueAxis,
  ChartValueAxisItem,
} from '@progress/kendo-vue-charts';
import { computed, ref } from 'vue';

const categories_months = ref([
  'Pesadas',
  'Incidas',
  'Creado',
  'Istente',
  'Id User',
]);

const solicitadas = ref([100, 4, 50, 99, 10]);
const constant_schedule = ref([110, 70, 40, 10, 0]);
const process = ref([1, 10, 20, 30, 40]);
const cancel = ref([100, 1, 1, 0, 99]);
</script>

<template>
  <div>
    <Chart>
      <ChartTooltip :visible="true" :shared="true" />
      <ChartTitle text="Cuenta de comment2" position="top" align="center" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem
          :categories="categories_months"
          :start-angle="45"
        />
      </ChartCategoryAxis>
      <ChartValueAxis>
        <ChartValueAxisItem :name="'items'"> </ChartValueAxisItem>
        <ChartValueAxisItem :name="'RevenueAxis'"> </ChartValueAxisItem>
      </ChartValueAxis>

      <ChartSeries>
        <ChartSeriesItem
          :name="'LL Mountain Rear Weel'"
          :data-items="solicitadas"
          :type="'column'"
          :axis="'items'"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :name="'Total revenue'"
          :axis="'RevenueAxis'"
          :data-items="constant_schedule"
          :type="'line'"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :name="'HL Mountain Rear Weel'"
          :data-items="process"
          :type="'column'"
          :axis="'items'"
        >
        </ChartSeriesItem>
        <ChartSeriesItem
          :name="'ML Mountain Rear Weel'"
          :data-items="cancel"
          :type="'column'"
          :axis="'items'"
        >
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  </div>
</template>

<style scoped></style>
