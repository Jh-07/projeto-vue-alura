<script lang="ts">
import { getCategorias } from '@/http/index';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';
export default {
    data(){
        return{
            categorias: [] as ICategoria[]
        }
    },
    components:{
        CardCategoria,
        BotaoPrincipal,
    },
    async created(){
        this.categorias = await getCategorias()
    },
    emits: ['selecionar-ingrediente','deselecionar-ingrediente', 'buscarReceitas']
}

</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes">
            Ingredientes
        </h1>
        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer na sua lista
        </p>
        <ul class="categorias">
            <li v-for="categoria in categorias" v-bind:key="categoria.nome">
                <CardCategoria 
                v-bind:categoria="categoria"
                @selecionar-ingrediente="$emit('selecionar-ingrediente', $event)"
                @deselecionar-ingrediente="$emit('deselecionar-ingrediente', $event)"
                /> <!-- categoria do v-bind representa o props dentro do componente card
                       categoria do lado direito representa a variável categoria que está iterando sob a lista de categorias-->
            </li>

        </ul>
        <p class="paragrafo dica">
            Consideraremos que você tem sal, pimenta e água
        </p>

        <BotaoPrincipal v-bind:texto="'Buscar receitas'" @click="$emit('buscarReceitas')"/>
    </section>
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>
