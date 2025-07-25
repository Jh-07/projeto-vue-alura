<script lang="ts">
import { getReceitas } from '@/http';
import type IReceita from '@/interfaces/IReceita';
import type { PropType } from 'vue';
import CardReceitas from './CardReceitas.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';

export default {
    data() {
        return {
            listaReceitas: [] as IReceita[]
        }
    },
    props: {
        listaIngredientes: { type: Array as PropType<string[]>, required: true }
    },
    async created() {
        this.listaReceitas = await getReceitas()
    },
    components: { CardReceitas , BotaoPrincipal},
    emits: ['selecionarIngredientes'],
    watch:{
        listaIngredientes(){
            this.filtrarReceitas();
        }
    },
    methods: {
        filtrarReceitas(){
            
        this.listaReceitas =  this.listaReceitas.filter(receita => this.listaIngredientes.includes(receita.nome))
    
        // A função filter funciona assim:
        // Retorna uma NOVA lista
        // Itera sobre a lista original e aplica uma função que testa cada item (aqui chamado de receita)
        // Se passar no teste, esse item é adicionado na nova lista
        // Nesse caso, o teste é : se o atributo nome do item (receita.nome) faz parte da lista de ingredientes (this.listaIngredientes.includes())

        }
    }
}
</script>
<template>
    <section class="mostrar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>

        <p class="paragrafo-lg resultados-encontrados">
            Resultados Encontrados: {{ listaReceitas.length }}
        </p>

        <div v-if="listaIngredientes.length" class="receitas-wrapper">
            <p class="paragrafo-lg informacoes">
                Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
            </p>

            <ul class="receitas">
                <li v-for="receita in listaReceitas" v-bind:key="receita.nome">
                    <CardReceitas v-bind:receita="receita" />
                </li>
            </ul>
        </div>

        <div v-else class="receitas-nao-encontradas">
            <p class="paragrafo-lg receitas-nao-encontradas__info">
                Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
            </p>

            <img src="../assets/imagens/sem-receitas.png"
                alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
        </div>
        
        <BotaoPrincipal v-bind:texto="'Editar receitas'" @click="$emit('selecionarIngredientes')"/>

    </section>

</template>

<style scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 1.5rem;
}

.resultados-encontrados {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 0.5rem;
}

.receitas-wrapper {
  margin-bottom: 3.5rem;
}

.informacoes {
  margin-bottom: 2rem;
}

.receitas {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receitas-nao-encontradas {
  margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}

</style>