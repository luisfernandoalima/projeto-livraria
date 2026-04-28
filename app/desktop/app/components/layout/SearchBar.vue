<script setup>
defineProps({
  handleForms: Function,
  placeholder: String,
  value: String,
});

const emit = defineEmits(["update:value"]);
</script>

<template>
  <form @submit.prevent="handleForms">
    <label for="searchInput">
      <button>Buscar</button>
      <input
        type="text"
        id="searchInput"
        name="seachBar"
        :placeholder="placeholder"
        @input="emit('update:value', $event.target.value)"
      />
    </label>
  </form>
</template>

<style scoped>
form {
  width: 100%;
  color: #fff;
  margin-bottom: 25px;
}

label {
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 5px;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 10px;
}

input {
  width: 100%;
  padding: 2px 5px;
  &:focus {
    outline: none;
  }
}
</style>
