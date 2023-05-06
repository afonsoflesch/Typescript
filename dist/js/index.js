"use strict";
console.log("oi");
console.log();
// Object
const nomes = ["Regis", "Antonio", "Francisco"];
// Tupla
let pessoa;
pessoa = ["Regis", 12];
// Object Literal
let animal;
animal = {
    nome: "Cachorro",
    cor: "Marrom",
    idade: 15
};
// any
let nomes1 = ["Regis", "Antonio", "Francisco"];
nomes1 = "a";
// Union type
let idade1 = 10;
idade1 = null;
const pessoa1 = {
    nome: "Regis",
    idade: 10
};
console.log(nomes);
console.log(pessoa);
console.log(animal);
let linha = "Aqui tem uma linha";
console.log(linha);
let num = 15;
console.log(num);
let dado = true;
console.log(dado);
const text = ["Linha 1", "Linha 2", "Linha 3"];
console.log(text);
let idade = 25;
console.log(idade);
let nome = "Aqui tem uma anotação";
console.log(nome);
const notas = [5, 8, 7.5, 9.6, 3, 7];
let media = notas.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / notas.length;
console.log(media);
let carro;
carro = {
    marca: "Fiat",
    modelo: "Uno da escada",
    ano: 2010
};
console.log(carro);
