// Desafio 1 - Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.


//Antes
// function imprimeIdade() {
//     for (var idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
//     console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
//   }
//   imprimeIdade()

//Depois
// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
// }
//   imprimeIdade()

///////////////////////////////////////////////////

// Desafio 2 - Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;


//Antes
  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//   pessoa = {
//     nome: 'Luna',
//     idade: 19
//   } // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

//Depois
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

/////////////////////////////////////////////

// Desafio 3 -  Modifique a variável para que não ocorra Erro;

//Antes
// const favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);

//Depois
// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);

/////////////////////////////////////////////////

// Desafio 4 - Modifique as concatenações para template literals.


//Antes
// const name = 'Adriana';
// const lastName = 'Soares';
// console.log('Olá' + ',' + name + ' ' + lastName + '!');
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));

//Depois
// const name = 'Adriana';
// const lastName = 'Soares';
// console.log(`Ólá, ${name} ${lastName}!`);
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${ a + b}`);

////////////////////////////////////////////

// Desafio 5 -  Modifique a estrutura das funções a seguir para que elas sejam arrow functions.

//Antes
// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

//Depois
// const numeroAleatorio = () => Math.random()

//   console.log(numeroAleatorio());

/////////////////////////////////////////

// Desafio 6 - Transforme a função hello em uma arrow function.

//Antes
// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

//Depois
// const hello = nome => `Olá, ${nome}!`
 
//   console.log(hello('Ivan'));

///////////////////////////////////////

// Desafio 7 - Transforme a função nomeCompleto em uma arrow function.

//Antes
// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

//Depois

// const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
 
//   console.log(nomeCompleto('Ivan', 'Pires'));

//////////////////////////////////////

// Desafio 8 - Altere a expressão if/else utilizando ternary operator.

//Antes
// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

//Depois

// const speedCar = (speed) => (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;

// console.log(speedCar(150));

/////////////////////////////////////////////////

// Desafio 9 - Crie uma função que ligue e desligue um motor de um carro.

// let statusMotor = 'Desligado';

// const ligaDesliga = () => (statusMotor === 'Desligado') ? statusMotor = 'Ligado' : statusMotor = 'Desligado';

// console.log(`O motor está ${ligaDesliga()}`);

/////////////////////////////////////////////////

// Desafio 10 -  Crie uma função que calcule a área de um círculo.

// const pi = 3.14;
// const circleArea = (raio) => pi * raio**2;

// console.log(`Essa é a área do círculo: ${circleArea(5)}.`);

/////////////////////////////////////////////////

// Desafio 11 Parte I- Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.


// function biggestWord (frase) { 
//   let longestWord = '';
//   let fraseArray = '';
//   fraseArray = frase.split(' ')

//   for (let valor of fraseArray) {
//     if (valor.length > longestWord.length){
//       longestWord = valor;
//     } 
//   }
//   return longestWord;
// }
// console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//----------------------------------------

//Desafio 11 Parte II - Tente fazer o mesmo exercício utilizando o método array.sort().


// function biggestWord (frase) { 
//   let fraseArray = frase.split(' ');
//   let fraseOrdenada = fraseArray.sort();
//   let longestWord = '';

//   for (let valor of fraseOrdenada) {
//     if (valor.length > longestWord.length){
//       longestWord = valor;
//     } 
//   }
//   return longestWord;
// }
// console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//////////////////////////////////////////////////////
//Desafio Bônus
/////////////////////////////////////////////////////

//Desafio 1 - Crie duas funções JavaScript com as seguintes especificações: 

//Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

// function substituaX (nome) {
//   const frase = 'Trybe x aqui!'.split(' ');
//   let fraseModificada = '';
  
//   for (let valor of frase) {
//     if (valor === 'x') {
//       fraseModificada = `Trybe ${nome} aqui!`;
//     }
//   }
//   return fraseModificada;
// }
// console.log(substituaX('Bebeto'));

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

// function minhasSkills (funcao1) {
//   const skills = ['HTML', ' CSS', ' JavaScript.'];
//   let habilidades = `${funcao1} \nMinhas três principais habilidades são: \n${skills}`;
//   return habilidades;
// }
// console.log(minhasSkills(substituaX('Bebeto')));