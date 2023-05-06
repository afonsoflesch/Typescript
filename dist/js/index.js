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
// "------------------------------------------------------------"
let qualquer = [1, 2, 3];
console.log(qualquer);
qualquer = "Agora virou uma string";
console.log(qualquer);
qualquer = false;
console.log(qualquer);
let duascoisas = "texto qualquer";
duascoisas = false;
console.log(duascoisas);
const jogo1 = {
    nome: "Call of Duty",
    anoLancamento: 2010,
};
let ticatica = ["texto", 1];
ticatica.push("novo texto");
ticatica.push(19);
console.log(ticatica);
// "------------------------------------------------------------"
// enum
var Cores;
(function (Cores) {
    Cores["V"] = "Vermelho";
    Cores["Ve"] = "Verde";
    Cores["Az"] = "Azul";
    Cores["Am"] = "Amarelo";
})(Cores || (Cores = {}));
const celular = {
    marca: "Nokia",
    cor: Cores.Am
};
function somar(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somar(10, 20));
function apresentarErro(erro) {
    console.log(erro);
}
console.log(celular);
