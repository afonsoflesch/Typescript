console.log("oi")

console.log()

// Object
const nomes: string[] = ["Regis", "Antonio", "Francisco"]
// Tupla
let pessoa: [string, number]

pessoa = ["Regis", 12]

// Object Literal
let animal: { nome: string, cor: string, idade: number };

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
type pessoa = { nome: string, idade: number }

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
let media = notas.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / notas.length;

console.log(media)

let carro: { marca: string, modelo: string, ano: number };

carro = {
    marca: "Fiat",
    modelo: "Uno da escada",
    ano: 2010
}

console.log(carro)


// "------------------------------------------------------------"

let qualquer: any = [1, 2, 3]
console.log(qualquer)

qualquer = "Agora virou uma string"
console.log(qualquer)

qualquer = false
console.log(qualquer)

let duascoisas: string | boolean = "texto qualquer";
duascoisas = false
console.log(duascoisas)


type jogo = { nome: string, anoLancamento: number }

const jogo1: jogo = {
    nome: "Call of Duty",
    anoLancamento: 2010,

}

let ticatica: (string | number)[] = ["texto", 1]
ticatica.push("novo texto")
ticatica.push(19)


console.log(ticatica)

// "------------------------------------------------------------"

// enum
enum Cores {
    V = "Vermelho",
    Ve = "Verde",
    Az = "Azul",
    Am = "Amarelo"
}

const celular: { marca: string, cor: Cores } = {
    marca: "Nokia",
    cor: Cores.Am
}

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2
}

console.log(somar(10, 20))

function apresentarErro(erro: string): void {
    console.log(erro)
}
console.log(celular)

// "------------------------------------------------------------"

enum CategoriaComida {
    PratoPrincipal,
    Sobremesa,
    Bebida
}

type cardapio = { nome: string, preco: number, categoria: CategoriaComida }[]

let cardapios: cardapio = [{
    nome: "Pizza",
    preco: 30,
    categoria: CategoriaComida.PratoPrincipal
},
{
    nome: "Lasanha",
    preco: 20,
    categoria: CategoriaComida.PratoPrincipal
},
{
    nome: "Coquinha",
    preco: 5,
    categoria: CategoriaComida.Bebida
},
{
    nome: "Coquinha Zero",
    preco: 5,
    categoria: CategoriaComida.Bebida
},
{
    nome: "Rapadura",
    preco: 10,
    categoria: CategoriaComida.Sobremesa
},
{
    nome: "Brigadeiro",
    preco: 3.50,
    categoria: CategoriaComida.Sobremesa
}]


function adicionarPedido(cardapioLista:cardapio, cardapioNome:string){
    let encontrou = false
    for(var index in cardapioLista) {
        if ((cardapioLista[index].nome) === cardapioNome){
        console.log(`Nome produto ${cardapioLista[index].nome} Preco ${cardapioLista[index].preco}`);

        encontrou = true
        } 
    }

    if (encontrou == false) {
        console.log("Item não disponível!")
    }
}

adicionarPedido(cardapios, "Carro")
