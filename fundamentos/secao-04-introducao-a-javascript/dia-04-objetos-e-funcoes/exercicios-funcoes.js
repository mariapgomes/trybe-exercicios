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

// let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
// let menorValor = [];
// let indiceDoMenorValor = 0;

// function retornaIndiceMenorValor() {

//     for (let index = 0; index < arrayTeste.length; index += 1) {
//         if (arrayTeste[index] < menorValor) {
//             menorValor = arrayTeste[index];
//             indiceDoMenorValor = index;
//         }
//     }
//     return indiceDoMenorValor;
// }

// console.log(retornaIndiceMenorValor(arrayTeste));

//--------------------------------------------

// Desafio 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

// let maiorNome = '';
// let indice = 0;

// function retornaIndiceMaiorNome() {

//     for (let index = 0; index < arrayTeste.length; index += 1) {
//         if (arrayTeste[index].length > maiorNome.length) {
//             maiorNome = arrayTeste[index]
//         }
//     }
//     return maiorNome;
// }

// console.log(retornaIndiceMaiorNome(maiorNome));

//--------------------------------------------

// Desafio 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;

//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }

//     return numeros[indexNumeroRepetido];
//   }

//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

//--------------------------------------------

// Desafio 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// const n = 5;
// let resultado = 0;

// function soma(){
//     for(let index = 1; index <= n; index += 1){
//         resultado = resultado + index;
//     }
//     return resultado;
// };
// console.log(soma());

//--------------------------------------------

// Desafio 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaPalavra(palavra, final) {
    palavra = palavra.split('')
    final = final.split('')
    let eOFinal = true

    for (let index = 0; index < final.length; index += 1) {
        if (palavra[palavra.length - final.length + index] !== final[index]) {
            eOFinal = false;
        }
    }

    return eOFinal;
}
console.log(verificaPalavra('trybe', 'be'));
console.log(verificaPalavra('joaofernando', 'fernan')); 



