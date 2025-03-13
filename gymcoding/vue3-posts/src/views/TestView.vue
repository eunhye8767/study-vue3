<template>
  <div class="testView">
    <h2>Test 페이지</h2>
    <Dropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="Select a City"
      checkmark
      :highlightOnSelect="false"
      class="w-full md:w-14rem"
      aria-labelledby="aria dropdown"
    />
  </div>
</template>

<script setup>
// import Dropdown from "primevue/dropdown";s
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
</script>

<style lang="scss" scoped></style>
