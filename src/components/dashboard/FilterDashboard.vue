<script setup lang="ts">
const props = defineProps({
  initFilter: { type: Array<any>, required: true },
});
</script>

<template>
  <div class="filter">
    <div class="filter__item" v-for="(filter, i) in initFilter" :key="i">
      {{ filter.name }}
    </div>
  </div>
</template>

<style scoped>
.filter__item {
  padding: 0.7rem;
}

.filter__item:hover {
  background-color: #f0eff6;
  cursor: pointer;
}
</style>
