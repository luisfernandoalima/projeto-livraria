<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
definePageMeta({
  middleware: "auth",
  layout: "default",
});
</script>

<template>
  <NuxtLayout>
    <SearchBar />

    <div>
      <img src="" alt="" />
      <div>
        <h1></h1>
        <h2></h2>
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
      </div>
    </div>

    <div>
      <p></p>
      <table></table>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
