//Exercício 1

// const primeiroNumero = 7;
// const segundoNumero = 9;

// console.log(primeiroNumero + segundoNumero);
// console.log(primeiroNumero - segundoNumero);
// console.log(primeiroNumero * segundoNumero);
// console.log(primeiroNumero / segundoNumero);
// console.log(primeiroNumero % segundoNumero);

//Exercício 2

// const primeiroNumero = 5;
// const segundoNumero = 27;
// const terceiroNumero = 32;
// let resultado = "";

// if (primeiroNumero > segundoNumero) {
//     resultado = "O numero " + primeiroNumero + " é o maior";
// }
// else if (segundoNumero > primeiroNumero) {
//     resultado = "O numero " + segundoNumero + " é o maior";
// }
// else {
//     resultado = "Os números são iguais";
// }

// console.log(resultado);

//Exercício 3

// const primeiroNumero = 7;
// const segundoNumero = 9;
// const terceiroNumero = 15;
// let resultado = "";

// if (primeiroNumero > segundoNumero && primeiroNumero >terceiroNumero) {
//     resultado = "O numero " + primeiroNumero + " é o maior";
// }
// else if (segundoNumero > primeiroNumero && segundoNumero >terceiroNumero) {
//     resultado = "O numero " + segundoNumero + " é o maior";
// }
// else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
//     resultado = "O numero " + terceiroNumero + " é o maior";
// }
// else {
//     resultado = "Os números são iguais";
// }

// console.log(resultado);

//Exercício 4

// const numero = 0;
// let resultado = "";

// if (numero > 0) {
//     resultado = "positivo";
// }
// else if (numero < 0) {
//     resultado = "negativo";
// }
// else {
//     resultado = "zero";
// }

// console.log(resultado);

//Exercício 5

const primeiroAngulo = 70;
const segundoAngulo = -50;
const terceiroAngulo = 60;
let calculo = primeiroAngulo + segundoAngulo + terceiroAngulo;
let angulosPositivos = primeiroAngulo > 0 && segundoAngulo > 0 && terceiroAngulo > 0;

if (angulosPositivos) {
    if (calculo === 180) {
        console.log(true);
    } else {
        console.log(false);
      }
} else {
    console.log("Erro! Ângulo inválido.")
}
