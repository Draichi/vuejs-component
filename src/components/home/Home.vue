<template>
  <div>
    <h2 class="header">{{ titulo }}</h2>
    <h4 v-show="mensagem" class="filter-text">{{ mensagem }}</h4>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filter">
    <h4 class="filter-text">{{ filtro }}</h4>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:rotate.animate="60" :url="foto.url" :titulo="foto.titulo"/>

          <router-link :to="{name:'altera', params:{id:foto._id}}">
            <meu-botao tipo="button" rotulo="EDIT"></meu-botao>
          </router-link>

          <meu-botao tipo="button" rotulo="DELETE" :confirmacao="true" estilo="perigo" @botaoAtivado="remove(foto)"/>
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {
    return {
      titulo: 'Add, remove, change ou filter an image',
      fotos: [],
      filtro: '',
      mensagem: ''
    }
  },

  methods:{

    remove(foto){

      this.service.apaga(foto._id)
        .then(() => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = 'Foto removida com sucesso';
        }, err => this.mensagem = 'Não foi possivel remover a foto');        
    }
  },

  computed: { 

    fotosComFiltro() {

      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(),'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
          
      } else {
        return this.fotos;
      }
    }
  },

  created(){

    this.service = new FotoService(this.$resource);

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
  }
}
</script>

<style>
  .filter-text {
    text-align: center;
    font-size: 2vh;
  }

  .header {
    text-align: center;
    font-size: 5vh;
    text-transform: uppercase;
  }

  .filter-text {
    text-align: center;
    margin: 2vw;
  }

  .lista-fotos {
    list-style: none;
    text-align: center;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
  
  .filtro {
    margin: 3vh auto;
    display: block;
    width: 40vw;
    height: 8vh;
    border-radius: 3vh;
    text-align: center;
  }

</style>
