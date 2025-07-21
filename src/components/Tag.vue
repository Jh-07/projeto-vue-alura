<script lang="ts">
    export default {
        props: {
            ingrediente: { type: String, required: true },
            ativo : { type: Boolean, default: false},
        }
    }
</script>

<template>

    <span class="tag" v-bind:class="{ ativo_class: ativo  }"> 
        {{ ingrediente }}
    </span><!-- No v-bind, a variável da esquerda se refere ao nome da classe que será inserida na tag html
                A variável da direita indica a variável booleana do props nesse caso -->

</template>

<style scoped>


.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza);
    background: var(--cinza-claro);
    font-weight: 400;

}

.tag.ativo_class {
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}

</style>