<script setup>
import CommonInput from "~/components/ui/forms/CommonInput.vue";
import ItemEntryOperationCard from "~/components/layout/ItemEntryOperationCard.vue";
import { Icon } from "@iconify/vue";

definePageMeta({
  middleware: "auth",
  layout: "default",
});

const api = useApi();
const toast = useToast();
const token = useCookie("auth_token");

const carrinho = ref([]);
const idBuscado = ref();

const entrada = ref({
  cupomFiscal: "",
  data: "",
  fornecedor: "",
  cnpjFornecedor: "",
  valorTotal: 0,
});

const buscarProduto = async (id) => {
  try {
    const response = await api(`/product/find-product/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token.value}`,
      },
    });

    const produtoExiste = carrinho.value.find(
      (item) => item.produto.id === response.produto.id,
    );

    if (produtoExiste) {
      produtoExiste.quantidade++;
    } else {
      carrinho.value.push({
        produto: response.produto,
        quantidade: 1,
      });
    }

    console.log(carrinho.value);
  } catch (err) {
    toast.error(err);
  }
};

const removerItem = (id) => {
  carrinho.value = carrinho.value.filter((item) => item.produto.id !== id);
};

const finalizarEntrada = async () => {
  try {
    const payload = {
      ...entrada.value,

      produtos: carrinho.value.map((item) => ({
        produto_id: item.produto.id,
        quantidade: item.quantidade,
      })),
    };

    const response = await api("/entry/register", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token.value}`,
      },
      body: payload,
    });

    console.log(response);

    toast.success("Venda criada!");
  } catch (err) {
    toast.error(err);
  }
};
</script>

<template>
  <NuxtLayout>
    <div>
      <CommonInput
        text="Cupom Fiscal"
        name="cupomFiscal"
        type="text"
        v-model="entrada.cupomFiscal"
      />

      <CommonInput text="Data" name="data" type="date" v-model="entrada.data" />

      <CommonInput
        text="Fornecedor"
        name="cliente"
        type="text"
        v-model="entrada.fornecedor"
      />

      <CommonInput
        text="CNPJ do Fornecedor"
        name="cnpjFornecedor"
        type="text"
        v-model="entrada.cnpjFornecedor"
      />
    </div>
    <hr />
    <div>
      <label for="item">Buscar produto</label>
      <input
        type="text"
        placeholder="Insira o ISBN do produto"
        v-model="idBuscado"
      />
    </div>
    <button @click="buscarProduto(Number(idBuscado))">
      <Icon icon="material-symbols:search" width="24" height="24" />
    </button>

    <hr />

    <div class="flex flex-col gap-4">
      <ItemEntryOperationCard
        v-for="item in carrinho"
        :key="item.produto.id"
        :item="item"
        @remover="removerItem"
      />
    </div>
    <button @click="finalizarEntrada()">Salvar</button>
  </NuxtLayout>
</template>

<style scoped>
form {
  width: 75%;
}
</style>
