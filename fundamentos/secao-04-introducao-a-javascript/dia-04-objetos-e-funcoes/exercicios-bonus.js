// Desfio 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// const algarismoRomadno = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000,
// }

// let string = 'XCCDIX CD MMIV VXMLDD';

// let stringConvertida = [];
// let resultadoString = 0;
// function valorDaString () {
//     for ( let index = 0; index < string.length; index += 1 ) {
//         for (let index2 in algarismoRomadno) {
//             if (index2 === string[index]) {
//                 stringConvertida.push(algarismoRomadno[index2]);
//             }
//         }
//     }

//     for (let index = 0; index < stringConvertida.length; index += 1) {
//         if (stringConvertida[index] > resultadoString){
//             resultadoString = resultadoString + stringConvertida[index];
//         } else if (stringConvertida[index] < resultadoString){
//             resultadoString = resultadoString - stringConvertida[index];
//         }
//     }
//     return resultadoString;
// }
// console.log(valorDaString());

//////////////////////////////////////////

//Desafio 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.



// const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// let numerosPares = [];
// let numerosArray = [];


// function arrayOfNumbers () {
//     for (let index in vector){
//         for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
//             numerosArray.push(vector[index][index2]);   
//         }
        
//     }
//     for (let index = 0; index < numerosArray.length; index += 1) {
//         if (numerosArray[index] % 2 === 0) {
//             numerosPares.push(numerosArray[index]);
//         }
        
//     }
//     return numerosPares;
// }
// console.log(arrayOfNumbers());

//////////////////////////////////////////

//Desafio 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Imprima uma mensagem no formato "Sua cesta possui: x Melancias, x Abacates..."


// const basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
//   ];

// let quantidadeFrutas = {
//     "Melancia": 0,
//     "Abacate": 0,
//     "Uva": 0,
//     "Laranja": 0,
//     "Jaca": 0,
//     "Pera": 0,
//     "Banana": 0,
// }

// for (let index = 0; index < basket.length; index += 1) {
//     let fruta = basket[index];
//     switch (fruta) {
//         case "Melancia":
//             quantidadeFrutas['Melancia'] += 1;
//             break;

//         case "Abacate":
//             quantidadeFrutas['Abacate'] += 1;
//             break;

//         case "Uva":
//             quantidadeFrutas['Uva'] += 1;
//             break;

//         case "Laranja":
//             quantidadeFrutas['Laranja'] += 1;
//             break;

//         case "Jaca":
//             quantidadeFrutas['Jaca'] += 1;
//             break;

//         case "Pera":
//             quantidadeFrutas['Pera'] += 1;
//             break;

//         case "Banana":
//             quantidadeFrutas['Banana'] += 1;
//             break;
//     }
// }
// console.log('Sua Cesta possui:', quantidadeFrutas['Melancia'], 'Melancias,', quantidadeFrutas['Abacate'], 'Abacates,', quantidadeFrutas['Uva'], 'Uvas,', quantidadeFrutas['Laranja'], 'Laranjas,', quantidadeFrutas['Jaca'], 'Jacas,', quantidadeFrutas['Pera'], 'Peras e', quantidadeFrutas['Banana'], 'Bananas.');

// OU

// console.log('Sua Cesta possui:', quantidadeFrutas);

//Desafio 4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.


let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  console.log('O morador do bloco 2 de nome', moradores.blocoDois[1].nome, moradores.blocoDois[1].sobrenome, 'que mora no', moradores.blocoDois[1].andar, 'andar', moradores.blocoDois[1].apartamento + '.' );

















