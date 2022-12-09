/////////////////////////////////////////////////////////////

// 1 - Crie uma função usando o operador &&.

// A função compareTrue ao receber dois parâmetros booleanos deve:

// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros são falsos.

//Se a função for chamada com os valores girafa e elefante como parâmetro, retorna true, mas caso seja chamada com os parâmetro macaco e elefante retorna false.

function compareTrue(animalUm, animalDois) {
    const girafa = true;
    const elefante = true;
    const macaco = false;
    if (animalUm === 'girafa' && animalDois === 'elefante') {
      return true;
    }
    return false
  
}
console.log(compareTrue('girafa', 'girafa'));

/////////////////////////////////////////////////////////////

// 2- Crie uma função que divida uma frase.

//A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.
//Exemplo: se a função receber uma string 'go Trybe', o retorno deve ser ['go', 'Trybe'].

function splitSentence(string) {
    let stringArray = string.split(' ');
    return stringArray;
}
console.log(splitSentence('go trybe'))

/////////////////////////////////////////////////////////////

// 3- Crie uma função que use concatenação de strings.

//A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.

function concatName(arrayString) {
    let strings = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`
    return strings;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

/////////////////////////////////////////////////////////////

// 4 - Crie uma função que calcule a quantidade de pontos em um campeonato de futebol.

// A função footballPoints recebe o número de vitórias ( wins) e o número de empates ( ties) e retorna a quantidade de pontos que o tempo marcou em um campeonato. Para isso, considere que:

// wins: é o número de vitórias e vale 3 pontos;
// ties: é o número de empates e vale 1 ponto.

function footballPoints(wins, ties) {
    let pontos = wins * 3 + ties;
    return pontos;
}
console.log(footballPoints(14, 8));

/////////////////////////////////////////////////////////////

// 5 - Crie uma função que calcula o número de repetiçãoes do maior número.

//A função highestCountdeve retornar a quantidade de vezes que o número MAIOR se repete dentro do array.

function highestCount(arrayNumeros) {
    let maiorNumero = 0;
    let contador = 0;
  
    for (let valor of arrayNumeros) {
      if (valor === maiorNumero) {
        maiorNumero = valor;
        contador += 1;
      } else if (valor > maiorNumero) {
        maiorNumero = valor;
        contador = 0;
        contador += 1;
      } else if (valor < 0) {
        maiorNumero = valor;
        contador = 0;
        contador += 1;
      }
    }
    return contador;
  }
console.log(highestCount([-2, -2, -1, -1, -1]));
