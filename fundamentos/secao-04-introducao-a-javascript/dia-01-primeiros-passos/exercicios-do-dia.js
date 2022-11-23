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

// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

// const primeiroAngulo = 70;
// const segundoAngulo = -50;
// const terceiroAngulo = 60;
// let calculo = primeiroAngulo + segundoAngulo + terceiroAngulo;
// let angulosPositivos = primeiroAngulo > 0 && segundoAngulo > 0 && terceiroAngulo > 0;

// if (angulosPositivos) {
//     if (calculo === 180) {
//         console.log(true);
//     } else {
//         console.log(false);
//       }
// } else {
//     console.log("Erro! Ângulo inválido.")
// }

//Exercício 6

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let pecas = 'Torre';

switch (pecas.toLowerCase()) {
    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;
    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case 'bispo':
        console.log('Bispo-> Diagonal.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.')
        break;
    default:
        console.log('Erro, peça inválida!')
}
