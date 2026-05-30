<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
import ItemCard from "~/components/layout/ItemCard.vue";

definePageMeta({
  middleware: "auth",
  layout: "default",
});

const route = useRoute();
const router = useRouter();

const api = useApi();
const token = useCookie("auth_token");

const produto = ref(route.query.produto ?? "");

const produtos = ref([]);

const buscarProduto = () => {
  router.push(`/?produto=${produto.value}`);
};

const carregarProdutos = async () => {
  const tituloProduto = produto.value;

  let response;

  if (!tituloProduto) {
    response = await api("/product/list-products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${token.value}`,
      },
    });
  } else {
    response = await api(`/product/list-by-name/${tituloProduto}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token.value}`,
      },
    });
  }

  produtos.value = response.produtos;
};

watch(
  () => route.query.produto,
  () => {
    carregarProdutos();
  },
  { immediate: true },
);
</script>

<template>
  <NuxtLayout>
    <SearchBar
      :handleForms="buscarProduto"
      :value="produto"
      @update:value="produto = $event"
    ></SearchBar>

    <div class="main_area">
      <ItemCard
        v-for="value in produtos"
        :key="value._id"
        :name="value._titulo"
        :link="`/produto/${value._id}`"
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
</style>
