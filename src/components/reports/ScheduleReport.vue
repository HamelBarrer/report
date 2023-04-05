<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useServiceReport } from '../../services/reports';
import type { ScheduleReport } from '../../types/report';
import Table from '../table/Table.vue';

const serviceReport = useServiceReport();

const scheduleReports = ref<ScheduleReport[]>([]);

const getScheduleReport = async () => {
  const data = await serviceReport.fetchScheduleReport();
  scheduleReports.value = data;
};

onMounted(async () => {
  await getScheduleReport();
});
</script>

<template>
  <h1>Reporte schedule</h1>
  <div v-if="scheduleReports.length > 0">
    <Table :item-values="scheduleReports" />
  </div>
</template>

<style scoped></style>
