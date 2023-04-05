<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useServiceReport } from '../../services/reports';
import type { NotificationReport } from '../../types/report';
import Table from '../table/Table.vue';

const serviceReport = useServiceReport();

const notificationReports = ref<NotificationReport[]>([]);

const getNotificationReport = async () => {
  const data = await serviceReport.fetchEmailReport();
  notificationReports.value = data;
};

onMounted(async () => {
  await getNotificationReport();
});
</script>

<template>
  <h1>Reporte notificacion</h1>
  <div v-if="notificationReports.length > 0">
    <Table :item-values="notificationReports" />
  </div>
</template>

<style scoped></style>
