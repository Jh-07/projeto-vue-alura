<script lang="ts">
import BotaoPrincipal from './BotaoPrincipal.vue';
import BuscarReceitas from './BuscarReceitas.vue';
import Footer from './Footer.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';

type Pagina = 'SelecionarIngredientes' | 'BuscarReceitas';
export default {
    data() {
        return {
            ingredientes: [] as string[],
            pagina: "SelecionarIngredientes" as Pagina
        }
    },
    components: {SelecionarIngredientes, SuaLista, BotaoPrincipal, Footer, BuscarReceitas},
    methods: {
        removerItemDaLista(ingrediente: string): void {
            const indice = this.ingredientes.indexOf(ingrediente);
            this.ingredientes.splice(indice, 1);
        }
    }
}

</script>

<template>
    <main class="conteudo-principal">
        <section>
            <SuaLista v-bind:ingredientes="ingredientes" /><!-- ingredientes da esquerda = ingredientes do props
                                                               ingredientes da direita = ingredientes do data -->
        </section>
        <KeepAlive include="SelecionarIngredientes">

        <SelecionarIngredientes v-if="(pagina === 'SelecionarIngredientes')"
            @selecionar-ingrediente="ingredientes.push($event)"
            @deselecionar-ingrediente="removerItemDaLista($event)" 
            @buscar-receitas="pagina = 'BuscarReceitas'"/>
        
        <BuscarReceitas v-else-if="(pagina === 'BuscarReceitas')"
        v-bind:lista-ingredientes="ingredientes"
        @selecionar-ingredientes="pagina = 'SelecionarIngredientes'"/>
        
        </KeepAlive>
    </main>
    <Footer />
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>