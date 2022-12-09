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

/////////////////////////////////////////////////////////////

// 6 - Crie 3 funções para calcular a área de um triêngulo e de um retângulo.

//A função calcTriangleArea recebe dois parâmetros, sendo eles, o valor da base (base) e outro da altura (height) de um triângulo qualquer e retorna o calculador da sua área.

const calcTriangleArea = (base, height) => (base * height) / 2;

console.log(calcTriangleArea(10, 50));

//-----------------------------------
// A função calcRectangleAreatambém recebe 2 parâmetros, sendo eles, o valor da base ( base) e outro da altura ( height) de um retângulo qualquer e retorna o calculador da sua área.

const calcRectangleArea = (base, height) => base * height;

console.log(calcRectangleArea(10, 50));

//-----------------------------------
//E, por último, a função calcAllAreasque recebe 3 parâmetros sendo eles, o valor da base ( base), o valor da altura ( height) e a forma solicitada ( form) que eu quero obter o valor da área, podendo ser triânguloou retângulo.

function calcAllAreas(base, height, form) {
    if (form === 'triângulo') {
        return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
    } else if (form === 'retângulo') {
        return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
    }
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida.`;
}
console.log(calcAllAreas(10, 50, 'retângulo'));

/////////////////////////////////////////////////////////////

// 7 - Crie uma Função de Caça ao Rato.

//Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa. Para isso, implemente a função `catAndMouse` que recebe 3 parâmetros do tipo `number`.

//Calcule as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:

function catAndMouse(mouse, cat1, cat2) {
    if (cat1 > cat2) {
        return 'Cat1 está mais perto do rato';
    } else if (cat2 > cat1) {
        return 'Cat2 está mais perto do rato';
    } else if (mouse > cat1 && mouse > cat2 && cat1 === cat2) {
        return 'Os gatos trombam e o rato foge';
    }
}
console.log(catAndMouse(10, 6, 7));

/////////////////////////////////////////////////////////////

// 8 - Crie uma função FizzBuzz.

// A função fizzBuzzrecebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, a função deve retornar um array de strings:

// Retorne uma string 'fizz'para cada número do array que seja divisível apenas por 3;
// Retorne uma string 'buzz'para cada número do array que seja divisível apenas por 5;
// Retorne uma string 'fizzBuzz'para cada número do array que seja divisível por 3 e 5;
// Retorne uma string 'bug!'para cada número do array que não seja dividido por 3 nem por 5.

function fizzBuzz(arrayNumber) {
    let arrString = [];

    for (let valor of arrayNumber) {
        if (valor % 3 === 0 && valor % 5 === 0) {
            arrString.push('fizzBuzz')
        } else if (valor % 5 === 0) {
            arrString.push('buzz')
        } else if (valor % 3 === 0) {
            arrString.push('fizz')
        } else {
            arrString.push('bug!')
        }
    } return arrString;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

/////////////////////////////////////////////////////////////

// 9 - Crie uma função que cofifique e decodifique.

// Para codificar a frase utilize a função encode que recebe uma string como parâmetro e deve trocar todas as vogais minúsculas por números , de acordo com o formato:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

function encode(stringCode) {
    let stringCodificada = [];

    for (let valor of stringCode) {
        switch (valor) {
            case 'a':
                stringCodificada.push(valor = 1);
                break;

            case 'e':
                stringCodificada.push(valor = 2);
                break;

            case 'i':
                stringCodificada.push(valor = 3);
                break;

            case 'o':
                stringCodificada.push(valor = 4);
                break;

            case 'u':
                stringCodificada.push(valor = 5);
                break;

            default:
                stringCodificada.push(valor);
        }

    }
    return stringCodificada.join('');
}
console.log(encode('This is an ecoding test'));

//------------------------------------------------
// Para decodificar a frase, utilize a função decodeque recebe uma string contendo letras e números como Meter e deverá trocar todos os números por vogais minúsculos , de acordo com o formato:

// 1 -> a
// 2 -> e
// 3 -> i
// 4 -> o
// 5 -> u

function decode(stringDecode) {
    let stringDecodificada = [];

    for (let valor of stringDecode) {
        switch (valor) {
            case '1':
                stringDecodificada.push(valor = 'a');
                break;

            case '2':
                stringDecodificada.push(valor = 'e');
                break;

            case '3':
                stringDecodificada.push(valor = 'i');
                break;

            case '4':
                stringDecodificada.push(valor = 'o');
                break;

            case '5':
                stringDecodificada.push(valor = 'u');
                break;

            default:
                stringDecodificada.push(valor);
        }

    }
    return stringDecodificada.join('');
}
console.log(decode('Th3s 3s 1n 2c4d3ng t2st'));

/////////////////////////////////////////////////////////////

// 10 - Crie uma função de lista de tecnologias.

// A função techList recebe dois parâmetros:

// Um array com nomes de tecnologias ;
// Um nome referente ao nome de uma pessoa.

// A função deverá retornar:

// A função techListdeve retornar um array vazio quando a lista de tecnologias estiver vazia.
// A função techListdeve retornar uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias;

function techList(arrayTech, nome) {
    let tecnologias = [];
    let arrayOrdenado = arrayTech.sort();
  
    for (valor of arrayOrdenado) {
      if (arrayTech == []) {
        return tecnologias = [];
      }
        tecnologias.push({ tech: valor, name: nome })
      
    }
    return tecnologias;
  }
  console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));