<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
import ItemCard from "~/components/layout/ItemCard.vue";
definePageMeta({
  middleware: "auth",
  layout: "default",
});
</script>

<template>
  <NuxtLayout>
    <SearchBar></SearchBar>

    <div class="main_area">
      <ItemCard name="foto" link="/" image="/img/tsuru-logo.jpeg" />
    </div>
  </NuxtLayout>
</template>

<style scoped>
.main_area {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-items: center;
  row-gap: 1em;
  padding-top: 50px;
  overflow-y: auto;
  overflow-x: unset;
}
</style>
