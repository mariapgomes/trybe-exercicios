// Desfio 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

const algarismoRomadno = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
}

let string = 'XCCDIX CD MMIV VXMLDD';

let stringConvertida = [];
let resultadoString = 0;
function valorDaString () {
    for ( let index = 0; index < string.length; index += 1 ) {
        for (let index2 in algarismoRomadno) {
            if (index2 === string[index]) {
                stringConvertida.push(algarismoRomadno[index2])
            }
        }
    }
    console.log(stringConvertida)
    for (let index = 0; index < stringConvertida.length; index += 1) {
        if (stringConvertida[index] > resultadoString){
            resultadoString = resultadoString + stringConvertida[index];
        } else if (stringConvertida[index] < resultadoString){
            resultadoString = resultadoString - stringConvertida[index];
        }
    }
    return resultadoString
}
console.log(valorDaString())




















