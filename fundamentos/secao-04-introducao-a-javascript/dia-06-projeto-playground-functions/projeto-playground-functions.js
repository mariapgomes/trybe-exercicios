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

