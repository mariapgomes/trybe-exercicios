// Lição 1 de fixação

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player ={
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2, 
//         silver: 3 
//     }
// }

// console.log(player.name +' ' + player.lastName + ' ' + player.age + ' anos');

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes ' + player.bestInTheWorld)

// console.log('A jogadora possui ' + player. medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')

//-------------------------------------

// Lição 2 de fixação

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (boasVindas in names){
//     // console.log('Olá ' + names[boasVindas])
//   }

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for (key in car){
//     console.log(key, car[key])
//   }

//-------------------------------------

// Lição 3 de fixação

// function adicao (a, b){
//     return a + b
// }
// console.log(adicao(5, 20));

// function subtracao (a, b){
//     return a - b
// }
// console.log(subtracao(5, 20));

// function multiplicacao (a, b){
//     return a * b
// }
// console.log(multiplicacao(5, 20));

// function divisao (a, b){
//     return a / b
// }
// console.log(divisao(5, 20));

// function modulo (a, b){
//     return a % b
// }
// console.log(modulo(5, 20));

//-------------------------------------

// Lição 4 de fixação

// const firstNumber = 17;
// const secondNumber = 20;

// function comparation (){
//     if (firstNumber > secondNumber){
//         return firstNumber + ' é o maior número'
//     } else {
//         return secondNumber + ' é o maior número'
//     }
// }

// console.log(comparation());

//-------------------------------------

// Lição 4 de fixação

const firstNumber = 17;
const secondNumber = 20;
const thirdNumber = 50;

function comparation() {
    if (firstNumber > secondNumber && firstNumber > thirdNumber){
       return firstNumber + ' é o maior número'
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        return secondNumber + ' é o maior número'
    } else {
        return thirdNumber + ' é o maior numero'
    }
}
console.log(comparation());