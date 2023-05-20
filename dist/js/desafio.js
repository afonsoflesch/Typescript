// Você irá criar uma aplicação web para gerenciar uma biblioteca. Este APP deve permitir aos usuários listar, adicionar, atualizar e excluir livros. Cada livro deve ter um título, autor, gênero e quantidade disponível. Além disso, os usuários devem ser capazes de pesquisar livros por titulo ou autor. 
import { adicionarLista, retornarLista } from "./Localstorage";
class Library {
    addBook(Book) {
        const lista = retornarLista();
        lista.push(Book);
        adicionarLista(lista);
    }
    deleteBook(id) {
        const lista = retornarLista();
        const index = lista.findIndex(Book => Book.id === id);
        if (index == -1) {
            console.log("Não encontrou");
        }
        // Retornar a lista, procurar a posicão do livro pelo ID (FindIndex), se ele encontrou então usa Splice passando primeiro a posição e o segundo o item para tirar, depois atualizar a lista. Se nao encontrou, mandar um erro na tela (console.log)
        else
            lista.splice(index);
        adicionarLista(lista);
    }
    updateBook(id, book) {
    }
    listBooks() {
        const lista = retornarLista();
    }
    searchBooks(value, field) {
        const lista = retornarLista();
        lista.find();
    }
}
