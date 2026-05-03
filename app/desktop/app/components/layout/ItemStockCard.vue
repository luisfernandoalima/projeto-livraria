<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  name: String,
  image: String,
  id: String,
});
</script>

<template>
  <div>
    <div
      class="image_content"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <p class="mt-1 mb-1">{{ name }}</p>
    <div class="button_area w-full flex items-center justify-between">
      <button>
        <NuxtLink><Icon icon="jam:write-f" width="24" height="24" /></NuxtLink>
      </button>
      <button>
        <NuxtLink :to="`/estoque/excluir/${id}`"
          ><Icon icon="tabler:trash" width="24" height="24"
        /></NuxtLink>
      </button>
    </div>
  </div>
</template>

<style scoped>
.image_content {
  height: 100%;
  border-radius: 10px;
  height: 180px;
  width: 150px;

  background-position: center center;
  background-size: contain;
}

p {
  color: #fff;
}

.button_area {
  button {
    background-color: #fff;
    color: #5b0606;
    border-radius: 10px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
