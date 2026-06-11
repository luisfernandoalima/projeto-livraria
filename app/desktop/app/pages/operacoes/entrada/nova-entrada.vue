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
      (item) => item.produto._id === response.produto._id,
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
  carrinho.value = carrinho.value.filter((item) => item.produto._id !== id);
};

const finalizarEntrada = async () => {
  try {
    const payload = {
      ...entrada.value,

      produtos: carrinho.value.map((item) => ({
        produto_id: item.produto._id,
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

    <div class="buscar-produto">
      <div class="campo-busca">
        <label for="item">Buscar produto</label>

        <div class="input-busca">
          <input
            type="text"
            placeholder="Insira o ID do produto"
            v-model="idBuscado"
          />

          <button @click="buscarProduto(Number(idBuscado))">
            <Icon icon="material-symbols:search" width="24" height="24" />
          </button>
        </div>
      </div>
    </div>

    <hr />

    <div class="flex flex-col gap-4">
      <ItemEntryOperationCard
        v-for="item in carrinho"
        :key="item.produto._id"
        :item="item"
        @remover="removerItem"
      />
    </div>
    <button
      @click="finalizarEntrada()"
      class="bg-white text-black mt-5 p-1.5 rounded-xl"
    >
      Salvar
    </button>
  </NuxtLayout>
</template>

<style scoped>
form {
  width: 75%;
}

hr {
  border-color: #fff;
  margin-bottom: 1rem;
}

.buscar-produto {
  margin: 1rem 0;
}

.campo-busca {
  display: flex;
  flex-direction: column;
  gap: 8px;

  & label {
    color: #fff;
  }
}

.input-busca {
  display: flex;
  align-items: center;
  border: 2px solid white;
  border-radius: 10px;
  overflow: hidden;
  height: 50px;
}

.input-busca input {
  flex: 1;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  padding: 0 16px;
}

.input-busca input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.input-busca button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.input-busca button:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
