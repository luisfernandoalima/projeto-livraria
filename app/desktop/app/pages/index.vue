<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
import ItemCard from "~/components/layout/ItemCard.vue";

import { useApi } from "#imports";

definePageMeta({
  middleware: "auth",
  layout: "default",
});

const api = useApi();
const token = useCookie("auth_token");

const response = await api("/product/list-products", {
  method: "GET",
  headers: {
    authorization: `Bearer ${token.value}`,
  },
});

const produtos = response.produtos;
console.log(response);
</script>

<template>
  <NuxtLayout>
    <SearchBar></SearchBar>

    <div class="main_area">
      <ItemCard
        v-for="value in produtos"
        :key="value.id"
        :name="value.titulo"
        :link="`/produto/${value.id}`"
        :image="`http://localhost:8081${value.imagem_capa}`"
      />
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
