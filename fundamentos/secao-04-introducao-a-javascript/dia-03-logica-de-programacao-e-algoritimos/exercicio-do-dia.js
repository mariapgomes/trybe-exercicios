// Exercício 1 - Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// let factorial = 1

// for (let index = 10; index > 0; index -= 1){
//     factorial *= index;
// }
// console.log(factorial);

//---------------------------------------------

// Exercício 2 - Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.

// let word = 'trybe';
// let invertedWord = ""

// for (let index = 0; index < word.length; index += 1){
//     invertedWord += word[word.length - 1 - index];

// }
// console.log(invertedWord);

//---------------------------------------------

// Exercício 3 - Imprime a maior palavra e a menor palavra do array.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);

//---------------------------------------------

// Exercício 4 - Maior número primo entre 2 e 50

// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);

//---------------------------------------------

// Exercício Bonus 1 - Quadrado de asterísticos

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   inputLine += symbol;
// };
// for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
//   console.log(inputLine);
// };

//---------------------------------------------

// Exercício Bonus 2 - Triângulo de asterísticos

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     inputLine += symbol;
//     console.log(inputLine);
//   };

//---------------------------------------------

// Exercício Bonus 3 - Triângulo de asterísticos invertido

// let inputPosition = n - 1;
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };

//--------------------------------------------

// Exercício Bonus 4 - faça uma pirâmide com n asteriscos de base:

// const n=7;
// let linha="*";
// let nespacos=((n-1)/2); //2
// let espacos=[];

// for(let s = 1; s <= nespacos; s += 1){
//   espacos.push(' ');
// }

// for(let l = 1; l <= n; l += 1){
//     if(l%2){
//         console.log(espacos.join('')+linha+espacos.join(''));
//         espacos.pop();
//     }
//   linha+="*";
// };

// Exercício Bonus 4 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

const n = 9;
let asterisco = '*';
let linha = '*';
let nespacosExt = Math.floor((n - 1) / 2);
let nespacosInt = [];
let espacoInt = [];
let espacoExt;

if (n % 2) {
    espacoExt = []
} else {
    espacoExt = [' ']
};

for (let s = 1; s <= nespacosExt; s += 1) {
    espacoExt.push(' ');
}


for (let l = 1; l < n; l += 1) {
    if (l % 2) {
        if (l === 1) {
            console.log(espacoExt.join('') + asterisco + espacoExt.join(''));
            espacoInt.push(' ');
        }
        else {
            console.log(espacoExt.join('') + asterisco + espacoInt.join('') + asterisco + espacoExt.join(''));
            espacoInt.push('  ');
        }
        espacoExt.pop();
    };
    linha += "*";
}

if (n % 2 === 0) {
    linha += "*";
}

console.log(linha);
