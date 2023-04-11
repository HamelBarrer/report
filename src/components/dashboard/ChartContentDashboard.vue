<script setup lang="ts">
import ChartBarDashboard from './ChartBarDashboard.vue';
import ChartBarLineDashboard from './ChartBarLineDashboard.vue';
import ChartDashboard from './ChartDashboard.vue';
</script>

<template>
  <div class="content__chart">
    <div class="chart__primary">
      <ChartDashboard />
    </div>
    <div class="chart__second">
      <ChartBarDashboard />
    </div>
    <div class="chart__three">
      <ChartBarLineDashboard />
    </div>
  </div>
</template>

<style scoped>
.content__chart {
  display: grid;
  grid-template-areas:
    'chart__primary'
    'chart__second'
    'chart__three';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  width: 40rem;
}

.chart__primary {
  grid-area: chart__primary;
  width: 100%;
}
.chart__second {
  grid-area: chart__second;
  width: 100%;
}
.chart__three {
  grid-area: chart__three;
  width: 100%;
}
</style>
