// Desafio 1 - Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.

// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
// }
//   imprimeIdade()

//-----------------------------------------

// Desafio 2 - Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

//   let pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//   pessoa = {
//     nome: 'Luna',
//     idade: 19
//   } 
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

//-----------------------------------------

// Desafio 3 -  Modifique a variável para que não ocorra Erro;

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);