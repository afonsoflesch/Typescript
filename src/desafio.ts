// Você irá criar uma aplicação web para gerenciar uma biblioteca. Este APP deve permitir aos usuários listar, adicionar, atualizar e excluir livros. Cada livro deve ter um título, autor, gênero e quantidade disponível. Além disso, os usuários devem ser capazes de pesquisar livros por titulo ou autor. 

import { adicionarLista, retornarLista } from "./Localstorage";

//  Requisitos
//   - Crie uma interface BOOK com os seguintes campos:
//     -- id: number
//     -- title: string
//     -- author: string
//     -- genre: string
//     -- availableQuantity: number

//    - Crie uma classe Library que inclua os seguintes métodos:
//     -- addBook (book: Book): adiciona um livro à biblioteca
//     -- deleteBook (id: number): Exclui um livro da biblioteca pelo ID
//     -- updateBook (id:number, book: Book): Atualiza as informações de um livro na biblioteca
//     -- listBooks(): Lista todos os livros disponíveis na biblioteca
//     -- searchBooks(value: string, field: string): Pesquisa livros pelo título ou autor

// Crie uma interface simples que armazene os valores em JSON no Local Storage

// Trate todos os erros possíveis que podem ocorrer ao tentar adicionar, deletar, atualizar e pesquisar livros 



interface IBook {
    id: number;
    title: string;
    author: string;
    genre: string;
    availableQuantity: number
}

class Library {

    addBook(Book: IBook) {
        const lista = retornarLista()

        lista.push(Book)

        adicionarLista(lista)
    }

    deleteBook(id: number) {
        const lista = retornarLista()

        const index = lista.findIndex(Book  => Book.id === id)
        if (index == -1) {
            console.log ("Não encontrou")
        }
    
// Retornar a lista, procurar a posicão do livro pelo ID (FindIndex), se ele encontrou então usa Splice passando primeiro a posição e o segundo o item para tirar, depois atualizar a lista. Se nao encontrou, mandar um erro na tela (console.log)
        else
        lista.splice(index)

        adicionarLista(lista)
    }
    updateBook (id:number, book: IBook){

    }
    listBooks(){
        const lista = retornarLista()
    }
    searchBooks(value: string, field: string){
        const lista = retornarLista()

        lista.find()
    }

}
