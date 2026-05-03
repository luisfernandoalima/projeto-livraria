<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";

import BackButton from "~/components/layout/BackButton.vue";

definePageMeta({
  middleware: "auth",
  layout: "default",
});

import { useApi } from "#imports";

const api = useApi();
const route = useRoute();
const token = useCookie("auth_token");
const id = route.params.id;

const data = await api(`/product/find-product/${id}`, {
  method: "GET",
  headers: {
    authorization: `Bearer ${token.value}`,
  },
});

console.log(data);

const produto = data.produto;

const voltar = () => {
  history.back();
};
</script>

<template>
  <NuxtLayout>
    <SearchBar />
    <BackButton />
    <div class="product_main w-full">
      <img
        :src="`http://localhost:8081${produto.imagem_capa}`"
        :alt="data.titulo"
      />
      <div>
        <div>
          <h1 class="text-6xl mb-4">{{ produto.titulo }}</h1>
          <h2 class="text-4xl">{{ produto.autor }}</h2>
          <p class="text-2xl">{{ produto.genero }}</p>
        </div>
        <div>
          <p class="text-4xl">Valor:</p>
          <p class="text-6xl">R${{ produto.preco }}</p>
        </div>
      </div>
    </div>

    <div>
      <p class="text-2xl font-bold text-white mb-2">Ficha técnica</p>
      <table class="table-fixed border-collapse border-gray-400 w-full">
        <tbody>
          <tr>
            <td class="border border-gray-300 font-bold">ISBN</td>
            <td class="border border-gray-300">
              {{ produto.isbn13 }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Idioma</td>
            <td class="border border-gray-300">
              {{ produto.idioma }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">
              Classificação Indicativa
            </td>
            <td class="border border-gray-300">
              {{ produto.classificacao_indicativa }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Data de publicação</td>
            <td class="border border-gray-300">
              {{ produto.data_publicacao }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Número de páginas</td>
            <td class="border border-gray-300">
              {{ produto.numero_paginas }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Série</td>
            <td class="border border-gray-300">
              {{ produto.serie }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Volume</td>
            <td class="border border-gray-300">
              {{ produto.volume }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.product_main {
  margin: 20px 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  font-weight: bold;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
}

img {
  display: block;
  width: auto;
  height: 450px;
  align-self: center;
  justify-self: center;
}

table {
  color: #fff;
  height: 250px;

  td {
    padding: 2px 8px;
  }

  tr:nth-child(even) {
    background-color: #844545;
  }

  tr:nth-child(odd) {
    background-color: #945d5d;
  }
}
</style>
