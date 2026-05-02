<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
import { Icon } from "@iconify/vue";

import { useApi } from "#imports";
definePageMeta({
  middleware: "auth",
  layout: "default",
});

const api = useApi();
const token = useCookie("auth_token");

const response = await api("/user/list-users", {
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
      <NuxtLink to="/colaborador/novo-colaborador"
        >+ Cadastrar novo funcionário</NuxtLink
      >
    </div>

    <div class="table_area">
      <table
        class="table-auto border-collapse border border-gray-400 text-white"
      >
        <thead>
          <tr>
            <th class="border border-gray-300">Nome</th>
            <th class="border border-gray-300">E-mail</th>
            <th class="border border-gray-300">Telefone</th>
            <th class="border border-gray-300">Editar</th>
            <th class="border border-gray-300">Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in response">
            <td class="border border-gray-300">{{ value.nome }}</td>
            <td class="border border-gray-300">{{ value.email }}</td>
            <td class="border border-gray-300">{{ value.telefone }}</td>
            <td class="border border-gray-300">
              <NuxtLink class="flex justify-center"
                ><Icon icon="jam:write-f" width="24" height="24"
              /></NuxtLink>
            </td>
            <td class="border border-gray-300 text-center">
              <NuxtLink
                class="flex justify-center"
                :to="`/colaborador/excluir/${value.id}`"
                ><Icon icon="tabler:trash" width="24" height="24"
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
