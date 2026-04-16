<script setup lang="ts">
import LoginInput from "~/components/ui/forms/LoginInput.vue";
import LoginButton from "~/components/ui/forms/LoginButton.vue";

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
  <div class="h-dvh grid grid-cols-2 items-center justify-items-center">
    <div
      class="flex flex-col items-center justify-center w-full h-full text-white bg-[#5B0606]"
    >
      <h1 class="text-5xl font-bold">Bem-vindo!</h1>
      <p class="text-2xl">Faça o login para continuar</p>
      <form
        class="pt-6 flex flex-col gap-6 items-center"
        @submit.prevent="login"
      >
        <LoginInput
          text="E-mail"
          type="email"
          placeholder="E-mail."
          name="email"
          v-model="email"
        />

        <LoginInput
          text="Senha"
          type="password"
          placeholder="Senha."
          name="senha"
          v-model="password"
        />

        <LoginButton text="Enviar" />
      </form>
    </div>
    <div>
      <img src="/img/tsuru-logo.jpeg" alt="Tsuru" />
    </div>
  </div>
</template>
