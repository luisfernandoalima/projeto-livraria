<script setup lang="ts">
import Button from "~/components/ui/Button.vue";
import Input from "~/components/ui/Input.vue";

import { ref } from "vue";
import { useRouter } from "#app";
import { useApi } from "~/composables/useApi";

const api = useApi();

const email = ref("");
const password = ref("");
const router = useRouter();

type TLoginResponse = {
  token: string;
};

const login = async () => {
  try {
    const response = await api<TLoginResponse>("/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email.value,
        senha: password.value,
      },
    });

    const token = useCookie("auth_token");
    token.value = response.token;

    router.push("/");
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <h1>Login</h1>
  <form @submit.prevent="login">
    <Input
      text="E-mail"
      type="email"
      placeholder="Insira seu e-mail."
      name="email"
      v-model="email"
    />

    <Input
      text="Senha"
      type="password"
      placeholder="Insira sua senha."
      name="senha"
      v-model="password"
    />

    <Button text="Enviar" />
  </form>
</template>
