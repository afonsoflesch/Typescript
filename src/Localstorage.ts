import { Biblioteca } from "";

export function adicionarLista(list: Biblioteca.IBook[]){
    localStorage.setItem("livraria", JSON.stringify(list))
}

export function retornarLista(): Biblioteca.IBook[]{
    const lista: Biblioteca.IBook[] = JSON.parse(localStorage.getItem("livraria")!)
    return lista; 
}
