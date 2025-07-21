<script lang="ts">
import Tag from './Tag.vue';

export default{
    data() {
        return{
            selecionado: false
        }
    },
    components: { Tag },
    props: { 
        ingrediente: { type : String, required: true}
    },
    methods: {
        selecionar(): void{
            this.selecionado = !this.selecionado

            if(this.selecionado){
                this.$emit('selecionar-ingrediente', this.ingrediente); // Emite evento para o componente pai com nome 'selecionar-ingrediente' e passa o ingrediente selecionado
            }
            else {
                this.$emit('deselecionar-ingrediente', this.ingrediente)
            }
        }
    },
    emits: ['selecionar-ingrediente', 'deselecionar-ingrediente']
}

</script>

<template>
    <button class="ingrediente" v-on:click="selecionar">
        <Tag v-bind:ingrediente="ingrediente" v-bind:ativo="selecionado" />
    </button>
</template>