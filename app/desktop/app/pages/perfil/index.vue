<script setup>
definePageMeta({
  layout: "default",
  middleware: "auth",
});

const token = useCookie("auth_token");

const logOff = () => {
  token.value = null;

  reloadNuxtApp();
};
</script>

<template>
  <NuxtLayout>
    <button @click="logOff()">Sair</button>
  </NuxtLayout>
</template>
