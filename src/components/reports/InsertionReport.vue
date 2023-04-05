<script setup lang="ts">
import { useServiceReport } from '../../services/reports';
import type { InsertionReport } from '../../types/report';
import { onMounted, provide, ref } from 'vue';
import Table from '../table/Table.vue';

const serviceReport = useServiceReport();

const insertionReports = ref<InsertionReport[]>([]);

const getInsertionReport = async () => {
  const data = await serviceReport.fetchInsertionReport();
  insertionReports.value = data;
};

onMounted(async () => {
  await getInsertionReport();
});
</script>

<template>
  <h1>Reporte insercion</h1>
  <div v-if="insertionReports.length > 0">
    <Table :item-values="insertionReports" />
  </div>
</template>

<style scoped></style>
