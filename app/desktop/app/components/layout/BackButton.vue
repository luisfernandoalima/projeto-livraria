<script setup>
import { Icon } from "@iconify/vue";
const voltar = () => {
  history.back();
};
</script>

<template>
  <button @click="voltar()" class="back_button cursor-pointer">
    <Icon
      icon="mingcute:arrow-left-line"
      width="35"
      height="35"
      style="color: #000"
    />
  </button>
</template>

<style scoped>
.back_button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
</style>
