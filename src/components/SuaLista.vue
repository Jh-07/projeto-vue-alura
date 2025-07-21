<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default{
    props: {
        ingredientes: { type: Array as PropType<string[]>, required: true}
    },
    components: { Tag }
}
</script>

<template>

    <span class="subtitulo-lg sua-lista-texto">Minha lista</span>
    <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
        <li v-for="ingrediente in ingredientes" v-bind:key="ingrediente">
            <!--v-bind permite colocar código JS entre aspas em tags html-->
            <Tag v-bind:ingrediente="ingrediente" v-bind:ativo="true" />
        </li>
    </ul>
    <p v-else class="paragrafo lista-vazia">
        <img src="../assets/images/icones/lista-vazia.svg" alt="Lista vazia">
        Sua lista está vazia
    </p>

</template>

<style scoped>


.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}


.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}
</style>