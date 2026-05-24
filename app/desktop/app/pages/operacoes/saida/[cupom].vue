<script setup>
definePageMeta({
  layout: "default",
  middleware: "auth",
});

import OperationCard from "~/components/ui/cards/OperationCard.vue";

const router = useRoute();
const api = useApi();
const cupom = router.params.cupom;

const token = useCookie("auth_token");

const response = await api(`/outgoing/find-registration/${cupom}`, {
  method: "GET",
  headers: {
    authorization: `Bearer ${token.value}`,
  },
});

const saida = computed(() => ({
  id_saida: response[0]?.id_saida,
  nome: response[0]?.nome,
  email: response[0]?.email,
  data_saida: response[0]?.data_saida,
}));

const produtos = computed(() =>
  response.map((item) => ({
    id_produto: item.id_produto,
    titulo: item.titulo,
    quantidade_item: item.quantidade_item,
  })),
);

const quantidadeTotal = computed(() =>
  produtos.value.reduce((total, item) => total + item.quantidade_item, 0),
);
</script>

<template>
  <NuxtLayout>
    <div class="page">
      <!-- Cabeçalho -->
      <div class="header">
        <div class="text-white">
          <h1>Detalhes da saída</h1>
          <p class="subtitle">Informações da movimentação de estoque</p>
        </div>

        <div class="badge">Cupom #{{ cupom }}</div>
      </div>

      <!-- Informações da saída -->
      <section class="info-card">
        <div class="info-grid">
          <div class="info-item">
            <span class="label">ID da saída</span>
            <strong>#{{ saida.id_saida }}</strong>
          </div>

          <div class="info-item">
            <span class="label">Responsável</span>
            <strong>{{ saida.nome }}</strong>
          </div>

          <div class="info-item">
            <span class="label">Email</span>
            <strong>{{ saida.email }}</strong>
          </div>

          <div class="info-item">
            <span class="label">Data da saída</span>
            <strong>{{ formatDate(saida.data_saida) }}</strong>
          </div>

          <div class="info-item">
            <span class="label">Produtos</span>
            <strong>{{ produtos.length }}</strong>
          </div>

          <div class="info-item">
            <span class="label">Quantidade total</span>
            <strong>{{ quantidadeTotal }} itens</strong>
          </div>
        </div>
      </section>

      <!-- Produtos -->
      <section>
        <div class="section-title">
          <h2>Produtos retirados</h2>
        </div>

        <div class="products-grid">
          <OperationCard :produtos="produtos" />
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.page {
  min-height: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.header h1 {
  margin: 0;
  font-size: 30px;
  color: #111827;
}

.subtitle {
  margin-top: 6px;
  color: #6b7280;
}

.badge {
  background: #5b0606;
  color: white;
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 600;
}

.info-card {
  background: white;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.05);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.label {
  font-size: 13px;
  color: #6b7280;
}

.info-item strong {
  color: #111827;
  font-size: 16px;
}

.section-title {
  margin-bottom: 18px;
}

.section-title h2 {
  margin: 0;
  font-size: 24px;
  color: #111827;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .page {
    padding: 20px;
  }

  .header {
    flex-direction: column;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
