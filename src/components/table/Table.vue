<script setup lang="ts">
import { GridPdfExport } from '@progress/kendo-vue-pdf';
import { Grid, type GridPageChangeEvent } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';
import { computed, inject, ref } from 'vue';
import FilterChartDashboard from '../dashboard/FilterChartDashboard.vue';
import InputDateMonthFilter from '../filters/InputDateMonthFilter.vue';

const props = defineProps({
  itemValues: { type: Array<any>, required: true },
});

const skip = ref(0);
const take = ref(10);
const pageSize = ref(10);
const pageable = ref({
  buttonCount: 5,
  info: true,
  type: 'numeric',
  pageSizes: true,
  previousNext: true,
});
const gridPdfExport = ref('');

const total = computed(() => props.itemValues.length);
const items = computed(() =>
  props.itemValues.slice(skip.value, take.value + skip.value)
);

const exportPDFWithComp = () => {};

const handlerPageChange = (e: GridPageChangeEvent) => {
  skip.value = e.page.skip;
  take.value = e.page.take;
};
</script>

<template>
  <Button @click="exportPDFWithComp">Exportar pdf</Button>
  <FilterChartDashboard />
  <InputDateMonthFilter />
  <GridPdfExport :ref="gridPdfExport">
    <Grid
      :data-items="items"
      :skip="skip"
      :take="take"
      :page-size="pageSize"
      :pageable="pageable"
      :total="total"
      @pagechange="handlerPageChange"
    ></Grid>
  </GridPdfExport>
</template>

<style scoped></style>
