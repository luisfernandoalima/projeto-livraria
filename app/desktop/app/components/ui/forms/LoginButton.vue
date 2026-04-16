<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
  type: String,
});
</script>

<template>
  <button class="">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  color: #5b0606;
  background-color: #fff;
  padding: 0.1em 0.8em;
  font-size: 2em;
  font-weight: bold;
  border: 2px solid #fff;
  transition: 0.3s;
}

button:hover {
  color: #fff;
  background-color: #5b0606;
  cursor: pointer;
}
</style>
