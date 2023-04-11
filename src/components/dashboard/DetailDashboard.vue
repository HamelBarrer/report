<script setup lang="ts">
import { Card, CardBody } from '@progress/kendo-vue-layout';
</script>

<template>
  <Card style="height: 10rem">
    <CardBody>
      <span>Compared to Apr 02 - Apr 03, 2023</span>
      <div class="row">
        <div class="column">
          <h5 class="text__bold">Total Rooms</h5>
          <span class="text__bold">12</span>
          <p class="text__bold">rooms</p>
        </div>
        <div class="column">
          <p>x</p>
          <span class="text__bold">-8 rooms</span>
          <p class="text__bold">(-40 %)</p>
        </div>
      </div>
    </CardBody>
  </Card>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
