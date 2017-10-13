<template>
  <div class="corpo">
    
    <meu-menu :rotas="routes"></meu-menu>

    <transition name="pagina-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import { routes } from './routes';
  import Menu from './components/shared/menu/Menu.vue'

  export default {

    components: {
      'meu-menu' : Menu
    },

    data() {

      return{

        routes: routes.filter(rota => rota.menu)
      }
    }
  }
</script>

<style>


  * {
    color: #2C3E50;
    margin: 0;
    padding: 0;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    background-color: #ECF0F1;
  }

  .pagina-fade-enter, .pagina-fade-leave-active {
        opacity: 0;
    }

    .pagina-fade-enter-active, .pagina-fade-leave-active {
        transition: opacity .8s;
    }

  

</style>
