<script setup>
defineProps({
  name: String,
  image: String,
  link: String,
});
</script>

<template>
  <div>
    <NuxtLink :to="link" class="link_container">
      <div
        class="image_content"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <p class="mt-1 mb-1">{{ name }}</p>
    </NuxtLink>
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
</style>
