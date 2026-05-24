<script setup>
defineProps({
  produtos: [],
});
</script>

<template>
  <div
    v-for="produto in produtos"
    :key="produto.id_produto"
    class="product-card"
  >
    <div class="product-header">
      <div>
        <NuxtLink :to="`/produto/${produto.id_produto}`"
          ><h3>{{ produto.titulo }}</h3></NuxtLink
        >

        <span class="product-id"> Produto #{{ produto.id_produto }} </span>
      </div>

      <div class="quantity">{{ produto.quantidade_item }}x</div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background: white;
  border-radius: 18px;
  padding: 22px;
  border: 1px solid #e5e7eb;
  transition: 0.2s;
  border: 2px solid #5b0606;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(42, 15, 15, 0.08);
}

.product-header {
  display: flex;
  justify-content: space-between;
  gap: 18px;
}

.product-header h3 {
  margin: 0;
  font-size: 18px;
  color: #111827;
  line-height: 1.4;
}

.product-id {
  display: inline-block;
  margin-top: 8px;
  color: #6b7280;
  font-size: 13px;
}

.quantity {
  min-width: 52px;
  height: 52px;
  background: #5b0606;
  color: white;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
}
</style>
