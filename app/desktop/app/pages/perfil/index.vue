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

const { user } = useAuth();
const api = useApi();

const userBD = await api(`/user/find-user/${user.value?.id}`, {
  method: "GET",
  headers: {
    authorization: `Bearer ${token.value}`,
  },
});

const name = userBD.nome;
</script>

<template>
  <NuxtLayout>
    <section class="container">
      <div class="profile-card">
        <div class="header">
          <div class="avatar">
            {{ name?.charAt(0) || "U" }}
          </div>

          <div class="info">
            <h1>{{ name }}</h1>
            <span>Usuário do sistema</span>
          </div>
        </div>

        <div class="details">
          <div class="item">
            <span class="label">E-mail</span>
            <span class="value">{{ userBD.email }}</span>
            <div class="item">
              <span class="label">Contato</span>
              <span class="value">{{ userBD.telefone }}</span>
            </div>
          </div>
        </div>

        <button class="logout-button" @click="logOff">Sair da conta</button>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.container {
  min-height: 100%;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-card {
  width: 100%;
  max-width: 700px;

  background: white;
  border-radius: 20px;

  padding: 2rem;

  box-shadow:
    0 4px 10px rgba(0, 0, 0, 0.05),
    0 12px 30px rgba(0, 0, 0, 0.08);
}

.header {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-bottom: 2rem;
}

.avatar {
  width: 90px;
  height: 90px;

  border-radius: 50%;

  background: linear-gradient(135deg, #4f46e5, #7c3aed);

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 36px;
  font-weight: bold;
}

.info {
  display: flex;
  flex-direction: column;
}

.info h1 {
  margin: 0;
  font-size: 1.8rem;
}

.info span {
  color: #666;
}

.details {
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.label {
  font-size: 0.9rem;
  color: #888;
}

.value {
  font-size: 1.05rem;
  font-weight: 500;
}

.logout-button {
  margin-top: 2rem;

  width: 100%;
  height: 50px;

  border: none;
  border-radius: 12px;

  background: #dc2626;
  color: white;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;
}

.logout-button:hover {
  background: #b91c1c;
}
</style>
