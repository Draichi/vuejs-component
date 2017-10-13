<template>
    <nav>
      <a v-for="rota in rotas" class="link">
        <router-link :to="rota.path ? rota.path : '/'">
          {{ rota.titulo }}
        </router-link>
      </a>
    </nav>
</template>

<script>
    export default {
        props: ['rotas']
    }
</script>

<style>
  nav {
    text-align: center;
    padding: 4vh;
  }

  a {
    text-decoration: none;
  }

  .link {
    margin: 0 2vw;
    text-transform: uppercase;
  }

  .link:hover {
   border-bottom: 3px solid blue;
  }

</style>