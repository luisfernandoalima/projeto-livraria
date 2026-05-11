<script setup>
import CommonInput from "~/components/ui/forms/CommonInput.vue";
import ItemOperationCard from "~/components/layout/ItemOperationCard.vue";
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
const venda = ref({
  cupomFiscal: "",
  data: "",
  cliente: "",
  cpfCliente: "",
  tipoPagamento: "",
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

const finalizarVenda = async () => {
  try {
    const payload = {
      ...venda.value,

      produtos: carrinho.value.map((item) => ({
        produto_id: item.produto.id,
        quantidade: item.quantidade,
      })),
    };

    const response = await api("/outgoing/register", {
      method: "POST",
      headers: {
        authorization: `Bearer ${token.value}`,
      },
      body: payload,
    });

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
        v-model="venda.cupomFiscal"
      />

      <CommonInput text="Data" name="data" type="date" v-model="venda.data" />

      <CommonInput
        text="Cliente"
        name="cliente"
        type="text"
        v-model="venda.cliente"
      />

      <CommonInput
        text="CPF"
        name="cpfCliente"
        type="text"
        v-model="venda.cpfCliente"
      />

      <CommonInput
        text="Forma de pagamento"
        name="tipoPagamento"
        type="text"
        v-model="venda.tipoPagamento"
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
      <ItemOperationCard
        v-for="item in carrinho"
        :key="item.produto.id"
        :item="item"
        @remover="removerItem"
      />
    </div>
    <button @click="finalizarVenda()">Salvar</button>
  </NuxtLayout>
</template>

<style scoped>
form {
  width: 75%;
}
</style>
