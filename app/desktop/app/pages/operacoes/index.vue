<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
import { Icon } from "@iconify/vue";

definePageMeta({
  layout: "default",
  middleware: "auth",
});
</script>

<template>
  <NuxtLayout>
    <div>
      <NuxtLink to="/operacoes/entrada">Entradas</NuxtLink>
      <NuxtLink to="/operacoes/saida">Saídas</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
