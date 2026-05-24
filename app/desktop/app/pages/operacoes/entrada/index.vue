<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
import { Icon } from "@iconify/vue";

definePageMeta({
  layout: "default",
  middleware: "auth",
});

const api = useApi();
const token = useCookie("auth_token");

const response = await api("/entry/list-registration", {
  method: "GET",
  headers: {
    authorization: `Bearer ${token.value}`,
  },
});
console.log(response);
</script>

<template>
  <NuxtLayout>
    <SearchBar />

    <div class="button_area">
      <NuxtLink to="/operacoes/entrada/nova-entrada"
        >+ Cadastrar nova entrada</NuxtLink
      >
    </div>

    <div class="table_area">
      <table
        class="table-auto border-collapse border border-gray-400 text-white"
      >
        <thead>
          <tr>
            <th class="border border-gray-300">Nº Cupom Fiscal</th>
            <th class="border border-gray-300">Data</th>
            <th class="border border-gray-300">Valor</th>
            <th class="border border-gray-300">CNPJ - Fornecedor</th>
            <th class="border border-gray-300">Fornecedor</th>
            <th class="border border-gray-300">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in response">
            <td class="border border-gray-300">{{ value.cupom_fiscal }}</td>
            <td class="border border-gray-300">{{ value.data_entrada }}</td>
            <td class="border border-gray-300">{{ value.valor_total }}</td>
            <td class="border border-gray-300">{{ value.cnpj_fornecedor }}</td>
            <td class="border border-gray-300">{{ value.nome_fornecedor }}</td>
            <td class="border border-gray-300">
              <NuxtLink class="flex justify-center"
                ><Icon icon="mdi:eye" width="24" height="24"
              /></NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.button_area {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;

  a {
    background-color: #fff;
    padding: 3px 8px;
    border-radius: 10px;
  }
}

.table_area {
  width: 100%;
  max-height: 700px;
  overflow-y: auto;

  table {
    width: 100%;
    overflow: auto;

    td {
      padding-left: 4px;
    }
  }
}
</style>
