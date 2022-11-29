// Exercício 1 - Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// let factorial = 1

// for (let index = 10; index > 0; index -= 1){
//     factorial *= index;
// }
// console.log(factorial);

//---------------------------------------------

// Exercício 2 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.

let word = 'trybe';
let invertedWord = ""

for (let index = 0; index < word.length; index += 1){
    invertedWord += word[word.length - 1 - index];
    
}
console.log(invertedWord);