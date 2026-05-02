<script setup></script>

<template>
  <div class="main_body">
    <header class="flex items-center justify-start gap-10 flex-col">
      <div>
        <NuxtLink to="/" class="flex justify-center items-center">
          <img src="/img/tsuru-logo.jpeg" alt="Tsuru" />
          <h1>TSURU</h1>
        </NuxtLink>
      </div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="">Perfil</NuxtLink>
          </li>
          <li>
            <NuxtLink to="">Estoque</NuxtLink>
          </li>
          <li>
            <NuxtLink to="">Operações</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/colaborador">Colaboradores</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main_area">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main_body {
  flex: 1;
  display: grid;
  grid-template-columns: 15% 85%;
  background-color: #5b0606;
}

header {
  padding: 0.3em;
  box-shadow: 0px 5px 10px #00000073;
  border-radius: 0px 15px 15px 0px;
  background-color: #fff;
}

nav {
  display: block;
  width: 100%;

  a {
    display: block;
    cursor: pointer;
    padding: 5px;
    width: 100%;
    color: #5b0606;
    font-weight: 400;
    font-size: 1.5em;
    transition: 0.3s;
  }

  ul {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px 15px;
    width: 100%;

    li {
      width: 100%;
      border-bottom: 1px solid #141414;
      transition: 0.5s;

      &:hover {
        background-color: #5b0606;
        border-radius: 10px;

        a {
          color: #fff;
        }
      }
    }
  }
}

main {
  background-color: #5b0606;
  padding: 15px 50px;
}
</style>
