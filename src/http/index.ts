import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

export async function getCategorias() {
    const url = "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json"
    const resposta = await fetch(url)

    const categorias: ICategoria[] = await resposta.json()

    return categorias;
}

export async function getReceitas(){
    const url ="https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"
    const resposta = await fetch(url)

    const receitas: IReceita[] = await resposta.json()

    return receitas
}