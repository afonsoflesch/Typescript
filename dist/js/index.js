"use strict";
// // console.log("oi")
let pessoa = {
    nome: "Afonso",
    idade: 28,
    falar: () => { }
};
console.log(pessoa);
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
// // let pessoa1 = new Pessoa("Tica tica", 30)
// // console.log(pessoa1)
// // pessoa1.falar()
// // class Animal {
// //     nome: string
// //     constructor(nome: string) {
// //         this.nome = nome;
// //     }
// //     mover(distanciaEmMetros: number = 10) {
// //         console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
// //     }
// // }
// // class Cachorro extends Animal {
// //     latir() {
// //         console.log("Au au");
// //     }
// // }
// // const dog = new Cachorro ("Rex");
// // dog.latir();
// // dog.mover(5);
// // class Pessoa{
// //     private nome: string;
// //     private idade: number;
// //     constructor(nome: string, idade: number){
// //         this.nome = nome;
// //         this.idade = idade;
// //     }
// //     public falar(): void {
// //         console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
// //     }
// //     public setNome(nome: string) : void {
// //         this.nome = nome;
// //     }
// //     public getNome(): string {
// //         return this.nome
// //     }
// //     public setIdade(idade: number): void {
// //         this.idade = idade;
// //     }
// //     public getIdade(): number {
// //         return this.idade;
// //     }
// // }
// // let pessoa = new Pessoa("João", 25);
// // pessoa.falar() // Imprime na tela
// // pessoa.setNome("Maria")
// // pessoa.setIdade(30)
// // pessoa.falar(); // Imprime na tela
// //---------------------------------------------------------
// // interface Iproduto {
// //     nome: string;
// //     preco: number;
// //     estoque: number;
// // }
// // let produto: Iproduto = {
// //     nome: "Chocolate",
// //     preco: 10,
// //     estoque: 5
// // }
// // console.log(produto)
// class Pessoa {
//     nome: string;
//     idade: number;
//     constructor(nome: string, idade: number) {
//         this.nome = nome;
//         this.idade = idade;
//     }
//     apresentar (): void {
//         console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//     }
// }
// // let pessoa2 = new Pessoa ("Afonso", 28)
// // pessoa2.apresentar()
// // class Animal {
// //     nome: string
// //     constructor (nome: string) {
// //         this.nome = nome;
// //     }
// //     mover( distancia: number = 0) {
// //         console.log(`${this.nome} moveu ${distancia} metros.`);
// //     }
// // }
// // class Cachorro extends Animal {
// //     latir() {
// //         console.log("Latindo")
// //     }
// // }
// // --------------------------------------------------------
// // class ContaBancaria
// //      class Animal {
// //     nome: string
// //     constructor(nome: string) {
// //         this.nome = nome;
// //     }
// //     mover(distanciaEmMetros: number = 10) {
// //         console.log(`${this.nome} moveu ${distanciaEmMetros}m.`);
// //     }
// // }
// // class Cachorro extends Animal {
// //     latir() {
// //         console.log("Au au");
// //     }
// // }
// // const dog = new Cachorro ("Rex");
// // dog.latir();
// // dog.mover(5);
// // import {soma, subtrai} from './matematica.js';
// // console.log (soma(5,3))
// // console.log (subtrai(5,3))
// // import { Aula2 } from './ex_aula2.js';
// // const pessoa: Aula2.IPessoa = {nome: "Afonso", idade: 28, falar: () => {}}
// // console.log(pessoa)
// // import { soma, subtrai, divide, multiplica } from "./matematica.js";
// // console.log(soma(3,4))
// // console.log(subtrai(3,4))
// // console.log(multiplica(3,4))
// // console.log(divide(3,4))
// import { Geometria } from "./ex_aula2.js";
// const Circulo = new Geometria.Circulo(8)
// Circulo.area()
