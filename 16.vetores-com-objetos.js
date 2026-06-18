// Vetores de nomes
const listaDeNomes = ["Ana", "Maria", "Joana"]

// Exemplo com vetor de números
const listaDeNumeros = [1, 2, 3, 4, 5]

// Vetor de objetos com dados de nome e idade
// Um objetos carrega dados com uma classe
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Mario", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "Erik", idade: 17}
]

// Percorrendo e exibindo os elementos do vetor
// ForEach é uma função com laço de repetição
console.log("Exibindo todos os usuários do vetor.")
// Use as {} caso precise de mais de uma linha
// Neste caso não precisa, mas vamos usar.
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
    console.log("SENAI")
})

// Como os antigos.
console.log("\nExibindo todos os usuários do vetor.")
for (let i = 0; i < listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa, mas vamos usar.
maioridade.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

// Na lista de números, filtre e mostre apenas números pares
console.log("\nNa lista de números, filtre e mostre apenas numeros pares.")
const numerosPares = listaDeNumeros.filter(numero => numero % 2 === 0)
console.log(numerosPares)

// Na lista de nomes, mostre todos os nomes com forEach
console.log("\nNa lista de nomes, mostre todos os nomes com forEach.")
listaDeNomes.forEach(nome => {
    console.log(nome)
})

// Na lista de usuários, mostre apenas os nomes
console.log("\nNa lista de usuários, mostre apenas os nomes.")
listaDeUsuarios.forEach(usuario => {
    console.log(usuario.nome)
})