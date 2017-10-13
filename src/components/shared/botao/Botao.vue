<template>
    <button :class="estiloDoBotao" :type="tipo" @click="disparaAcao()">{{ rotulo }}</button>
</template>

<script>
    export default {
        

        props:{
            tipo:{
                required: true,
                type: String
            },
            rotulo:{
                required: true,
                type: String
            },
            confirmacao: Boolean,
            estilo: String
        },

        methods: {
            disparaAcao(){
                if(this.confirmacao){
                    if(confirm('Confirma a ação?')){
                        this.$emit('botaoAtivado');
                    }
                    return;
                }
                this.$emit('botaoAtivado');
            }
        },

        computed: {
            estiloDoBotao() {
                if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao';
                if(this.estilo == 'perigo') return 'botao botao-perigo';
            }
        }
    }
</script>

<style scoped>
    .botao {
        display: inline-block;
        padding: .5vw;
        border-radius: 1.8vh;
        border-style: none;
        margin: .3vw;
        font-size: 1vw;
    }

    .botao-perigo {
        background: #E74C3C;
        color: white;
    }

    .botao-padrao {
        background: #3EB95F;
        color: white;
    }
</style>