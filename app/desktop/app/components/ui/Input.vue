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
  <div>
    <label :for="name">{{ text }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :id="name"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input {
  border: 3px solid #000;
  border-radius: 10px;
}

input:focus {
  outline: none;
}
</style>
