<script setup>
import { defineProps } from "vue";

defineProps({
  text: String,
  name: String,
  type: String,
  placeholder: String,
  modelValue: String,

  mask: String,
  maxlength: Number,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label :for="name">{{ text }}</label>
    <input
      v-maska="mask"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :id="name"
      :value="modelValue"
      :maxlength="maxlength"
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
