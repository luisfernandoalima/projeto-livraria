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
      autocomplete="off"
    />
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

input {
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 3px;
}

input:focus {
  outline: none;
}

input::placeholder {
  color: #ababab;
}
</style>
