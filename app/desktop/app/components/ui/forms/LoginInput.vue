<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
  name: String,
  type: String,
  placeholder: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :id="name"
    @input="emit('update:modelValue', $event.target.value)"
    autocomplete="off"
    class="py-7 px-4 text-3xl block placeholder:text-white"
  />
</template>

<style scoped>
input {
  display: block;
  height: 2rem;
  border: 2px solid #fff;
  background-color: #5b0606;
}

input:focus {
  outline: none;
}
</style>
