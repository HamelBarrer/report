<script setup lang="ts">
import { getDateNow, getMaxDateMonth } from '../../utils/date';
import {
  DatePicker,
  type DatePickerChangeEvent,
} from '@progress/kendo-vue-dateinputs';
import { ref } from 'vue';

const initDate = ref(new Date());
const maxDate = ref(initDate.value);

const changeMaxDate = (e: DatePickerChangeEvent) => {
  console.log(getMaxDateMonth(initDate.value));
};
</script>

<template>
  <DatePicker
    :default-value="initDate"
    :max="initDate"
    @change="changeMaxDate"
  />
  <DatePicker :default-value="initDate" :max="maxDate" />
</template>

<style scoped></style>
