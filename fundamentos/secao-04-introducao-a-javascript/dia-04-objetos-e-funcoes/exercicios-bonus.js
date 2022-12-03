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
//                 stringConvertida.push(algarismoRomadno[index2])
//             }
//         }
//     }
//     console.log(stringConvertida)
//     for (let index = 0; index < stringConvertida.length; index += 1) {
//         if (stringConvertida[index] > resultadoString){
//             resultadoString = resultadoString + stringConvertida[index];
//         } else if (stringConvertida[index] < resultadoString){
//             resultadoString = resultadoString - stringConvertida[index];
//         }
//     }
//     return resultadoString
// }
// console.log(valorDaString())

//////////////////////////////////////////

//Desafio 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.



const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
let numerosPares = []
let numerosArray = []


function arrayOfNumbers () {
    for (let index in vector){
        for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
            numerosArray.push(vector[index][index2])   
        }
        
    }
    for (let index = 0; index < numerosArray.length; index += 1) {
        if (numerosArray[index] % 2 === 0) {
            numerosPares.push(numerosArray[index])
        }
        
    }
    return numerosPares
}
console.log(arrayOfNumbers())


















