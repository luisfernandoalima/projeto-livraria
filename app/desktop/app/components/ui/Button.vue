<template>
  <button class="text-white bg-red-500 rounded-xl p-2">{{ text }}</button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
  type: String,
});
</script>

<style scoped></style>
