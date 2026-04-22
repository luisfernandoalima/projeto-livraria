<script setup></script>

<template>
  <header class="flex items-center justify-evenly gap-3">
    <div>
      <NuxtLink to="/">
        <h1>TSURU</h1>
      </NuxtLink>
    </div>
    <div class="w-full">
      <form action="" class="w-full flex justify-center">
        <label class="search_bar" for="searchBar">
          <input
            type="text"
            name=""
            id="searchBar"
            placeholder="Buscar produto"
          />
          <button>Buscar</button>
        </label>
      </form>
    </div>

    <div>Perfil</div>
  </header>
  <div class="main_area">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Vendas</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Estoques</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Usuários</NuxtLink>
        </li>
        <li>
          <NuxtLink to="">Produtos</NuxtLink>
        </li>
        <li>
          <NuxtLink to=""></NuxtLink>
        </li>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
header {
  padding: 1em;
  box-shadow: 0px 5px 10px #00000073;
}

.search_bar {
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
  cursor: text;
  width: 70%;

  input {
    padding: 5px;
    width: 100%;
  }
  input:focus {
    outline: none;
  }

  button {
    cursor: pointer;
  }
}

.main_area {
  flex: 1;
  display: grid;
  grid-template-columns: 15% 85%;
}

nav {
  a {
    color: #5b0606;
    font-weight: 500;
    font-size: 1.8em;
  }

  ul {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
  }
}

main {
  background-color: #5b0606;
}
</style>
