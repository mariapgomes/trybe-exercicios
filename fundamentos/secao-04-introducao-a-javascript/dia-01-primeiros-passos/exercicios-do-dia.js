//Exercício 1

const primeiroNumero = 7;
const segundoNumero = 9;
const terceiroNumero = 15;

// console.log(primeiroNumero + segundoNumero);
// console.log(primeiroNumero - segundoNumero);
// console.log(primeiroNumero * segundoNumero);
// console.log(primeiroNumero / segundoNumero);
// console.log(primeiroNumero % segundoNumero);

//Exercício 2

let resultado = "";

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

if (primeiroNumero > segundoNumero && primeiroNumero >terceiroNumero) {
    resultado = "O numero " + primeiroNumero + " é o maior";
}
else if (segundoNumero > primeiroNumero && segundoNumero >terceiroNumero) {
    resultado = "O numero " + segundoNumero + " é o maior";
}
else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
    resultado = "O numero " + terceiroNumero + " é o maior";
}
else {
    resultado = "Os números são iguais";
}

console.log(resultado);

//Exercício 4
