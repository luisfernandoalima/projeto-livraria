<script setup>
import SearchBar from "~/components/layout/SearchBar.vue";
definePageMeta({
  middleware: "auth",
  layout: "default",
});
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
          <tr>
            <td class="border border-gray-300">1</td>
            <td class="border border-gray-300">2</td>
            <td class="border border-gray-300">3</td>
            <td class="border border-gray-300"><NuxtLink>4</NuxtLink></td>
            <td class="border border-gray-300"><NuxtLink>5</NuxtLink></td>
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
  }
}
</style>
