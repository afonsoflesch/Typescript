console.log("oi")

console.log()

// Object
const nomes: string[] = ["Regis", "Antonio", "Francisco"]
// Tupla
let pessoa: [string, number]

pessoa = ["Regis", 12]

// Object Literal

let animal: {nome: string, cor: string, idade: number};

animal = {
    nome: "Cachorro",
    cor: "Marrom",
    idade: 15
}
// any
let nomes1: any = ["Regis", "Antonio", "Francisco"]

nomes1 = "a"

// Union type
let idade1: number | null = 10;

idade1 = null

// type alias
type pessoa = {nome: string, idade: number}

const pessoa1: pessoa = {
    nome: "Regis",
    idade: 10
}

console.log(nomes)
console.log(pessoa)
console.log(animal)

let linha: string = "Aqui tem uma linha"

console.log(linha)

let num: number = 15

console.log(num)

let dado: boolean = true

console.log(dado)

const text: string[] = ["Linha 1", "Linha 2", "Linha 3"]

console.log(text)

let idade = 25;
console.log(idade)

let nome: string = "Aqui tem uma anotação"
console.log(nome)

const notas: number[] = [5, 8, 7.5, 9.6, 3, 7]
let media = notas.reduce((accumulator,currentValue) => accumulator + currentValue, 0)/notas.length;
    
console.log(media)

let carro: {marca: string, modelo: string, ano: number};

carro = {
    marca: "Fiat",
    modelo: "Uno da escada",
    ano: 2010
}

console.log(carro)