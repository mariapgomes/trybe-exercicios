// Desafio 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// let verificaPalindrome = '';
// function Palindromo(palavra) {
//     verificaPalindrome = palavra.split('').reverse().join('');
//     if (palavra === verificaPalindrome ) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(Palindromo('desenvolvimento'));

//--------------------------------------------

// Desafio 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let arrayTeste = [2, 3, 6, 7, 10, 1];
//Precisa ter uma variável para armazenar os valores do array e outra para armazenar os índices, e assim sincronizar o índice e valor encontrado em cada rodada do loop, porque são dados que precisam ser mantidos e andar juntos.
// let maiorValor = [];
// let indice = 0;

// function retornaIndiceMaiorValor() {
   
//     for (let index = 0; index < arrayTeste.length; index += 1) {
//         if (arrayTeste[index] > maiorValor) {
//             maiorValor = arrayTeste[index];
//             indice = index;
//         }
//     }
//     return indice;
// }

// console.log(retornaIndiceMaiorValor(arrayTeste));

//--------------------------------------------

// Desafio 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
let menorValor = [];
let indiceDoMenorValor = 0;

function retornaIndiceMaiorValor() {
   
    for (let index = 0; index < arrayTeste.length; index += 1) {
        if (arrayTeste[index] < menorValor) {
            menorValor = arrayTeste[index];
            indiceDoMenorValor = index;
        }
    }
    return indiceDoMenorValor;
}

console.log(retornaIndiceMaiorValor(arrayTeste));