<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
  name: String,
  options: {
    type: Array,
    required: true,
  },
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label :for="name">{{ text }}</label>
    <select
      :name="name"
      :id="name"
      :model-value="modelValue"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option value="">Escolha uma opção</option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  font-size: 1.2em;
}

select {
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 4px;
}
</style>
