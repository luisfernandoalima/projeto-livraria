<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
  name: String,
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
      <option :value="2">Colaborador</option>
      <option :value="1">Adiministrador</option>
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
