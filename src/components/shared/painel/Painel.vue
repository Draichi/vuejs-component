<template>
    <div class="painel">
        <h2 class="painel-titulo" @click="visivel = !visivel">{{ titulo }}</h2>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {

    props:['titulo'],

    data(){
        return{
            visivel: true
        }
    }
  
}
</script>

<style>
    .painel {
    display: inline-block;
    margin: 2vw;
    box-shadow: 0 2px 10px 1px #333;
    max-width: 15vw;
    vertical-align: top;
    text-align: center;
    }

    .painel .painel-titulo {
    text-align: center;
    background: #3498DB;
    text-transform: uppercase;
    }

    .painel-titulo{
        font-size: 2vh;
        color: white;
        padding: 1vw;
    }

    .painel-fade-enter, .painel-fade-leave-active {
        opacity: 0;
    }

    .painel-fade-enter-active, .painel-fade-leave-active {
        transition: opacity .4s;
    }

    .painel-conteudo{
        overflow: hidden;
        background-color: #3498DB;
    }

</style>
