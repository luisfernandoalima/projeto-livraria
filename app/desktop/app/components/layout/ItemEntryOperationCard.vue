<script setup>
const props = defineProps({
  item: Object,
});

const emit = defineEmits(["remover"]);
</script>

<template>
  <div class="item_card">
    <div
      class="image_container"
      :style="{
        backgroundImage: `url(http://localhost:8081${item.produto.imagem_capa})`,
      }"
    ></div>

    <div class="info_container">
      <p>
        {{ item.produto.id }}
        -
        {{ item.produto.isbn13 }}
      </p>

      <p class="text-3xl">
        {{ item.produto.titulo }}
      </p>
    </div>

    <input type="number" v-model="item.quantidade" min="1" />

    <p>
      R$
      {{ item.produto.preco * item.quantidade }}
    </p>

    <button @click="emit('remover', item.produto.id)">Remover</button>
  </div>
</template>

<style scoped>
.item_card {
  display: grid;
  grid-template-columns: 7% 63% 10% 10% 10%;

  border: 2px solid #fff;
  border-radius: 10px;

  color: #fff;

  .image_container {
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    height: 100px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .info_container {
    padding-left: 10px;
  }

  input {
    background-color: #fff;
    color: #000;
    height: fit-content;

    align-self: center;
    padding: 2px 5px;
    &:focus {
      outline: none;
    }
  }

  p {
    align-self: center;
    justify-self: center;
  }
}
</style>
