<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";

import BackButton from "~/components/layout/BackButton.vue";

definePageMeta({
  middleware: "auth",
  layout: "default",
});

const route = useRoute();
const router = useRouter();

const api = useApi();
const token = useCookie("auth_token");

const produtoBusca = ref("");
const buscarProduto = () => {
  router.push(`/?produto=${produtoBusca.value}`);
};

const id = route.params.id;

const data = await api(`/product/find-product/${id}`, {
  method: "GET",
  headers: {
    authorization: `Bearer ${token.value}`,
  },
});

const produto = data.produto;
</script>

<template>
  <NuxtLayout>
    <SearchBar
      :handleForms="buscarProduto"
      :value="produtoBusca"
      @update:value="produtoBusca = $event"
    />
    <BackButton />
    <div class="product_main w-full">
      <img
        :src="`http://localhost:8081${produto._imgCapa}`"
        :alt="data.titulo"
      />
      <div>
        <div>
          <h1 class="text-4xl mb-4">{{ produto._titulo }}</h1>
          <h2 class="text-2xl">Autor: {{ produto._autor }}</h2>
          <p class="text-2xl mt-2 mb-2">Gênero: {{ produto._genero }}</p>
        </div>
        <div>
          <p class="text-4xl">Valor:</p>
          <p class="text-6xl">R${{ produto._preco }}</p>
          <p class="text-2xl">Quantidade em estoque: {{ produto._estoque }}</p>
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
              {{ produto._isbn13 }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Idioma</td>
            <td class="border border-gray-300">
              {{ produto._idioma }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">
              Classificação Indicativa
            </td>
            <td class="border border-gray-300">
              {{ produto._classIndicativa }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Data de publicação</td>
            <td class="border border-gray-300">
              {{ formatDate(produto._dataPublicacao) }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Número de páginas</td>
            <td class="border border-gray-300">
              {{ produto._numPaginas }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Série</td>
            <td class="border border-gray-300">
              {{ produto._serie }}
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 font-bold">Volume</td>
            <td class="border border-gray-300">
              {{ produto._volume }}
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
