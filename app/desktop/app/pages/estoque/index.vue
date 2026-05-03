<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
import ItemStockCard from "~/components/layout/ItemStockCard.vue";

import { Icon } from "@iconify/vue";

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
</script>

<template>
  <NuxtLayout>
    <SearchBar></SearchBar>

    <div class="main_area">
      <NuxtLink to="/estoque/novo-produto">
        <div class="new_product_container">
          <Icon icon="ep:plus" width="1024" height="1024" />
        </div>
        <p class="mt-1 mb-1 text-white font-bold text-center">Criar novo</p>
      </NuxtLink>
      <ItemStockCard
        v-for="value in produtos"
        :key="value._id"
        :name="value._titulo"
        :id="value._id"
        :image="`http://localhost:8081${value._imgCapa}`"
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

.new_product_container {
  height: 100%;
  border-radius: 10px;
  height: 210px;
  width: 150px;
  background-position: center center;
  background-size: contain;
  background-color: rgba(255, 255, 255, 0.389);
  border: 2px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
