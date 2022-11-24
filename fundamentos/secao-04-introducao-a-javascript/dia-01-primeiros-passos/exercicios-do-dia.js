//Exercício 1

// const primeiroNumero = 7;
// const segundoNumero = 9;

// console.log(primeiroNumero + segundoNumero);
// console.log(primeiroNumero - segundoNumero);
// console.log(primeiroNumero * segundoNumero);
// console.log(primeiroNumero / segundoNumero);
// console.log(primeiroNumero % segundoNumero);

//----------------------------------------

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

//----------------------------------------

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

//----------------------------------------

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

//----------------------------------------

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

//----------------------------------------

//Exercício 6

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

// let pecas = 'Torre';

// switch (pecas.toLowerCase()) {
//     case 'rei':
//         console.log('Rei-> Uma casa apenas para qualquer direção.');
//         break;
//     case 'rainha':
//         console.log('Rainha-> Diagonal, horizontal e vertical.');
//         break;
//     case 'bispo':
//         console.log('Bispo-> Diagonal.');
//         break;
//     case 'cavalo':
//         console.log('Cavalo -> "L" pode pular sobre as peças.');
//         break;
//     case 'torre':
//         console.log('Torre -> Horizontal e vertical.');
//         break;
//     case 'peão':
//         console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.')
//         break;
//     default:
//         console.log('Erro, peça inválida!')
// }

//----------------------------------------

//Exercício 7

// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const numeroUm = 1;
// const numberDois = 2;
// const numeroTres = 3;
// let isEven = false;

// if (numeroUm % 2 === 0 || numberDois % 2 === 0 || numeroTres % 2 ===0) {
//     isEven = true
// }
// console.log(isEven);

//----------------------------------------

//Exercício 8

// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

// const primeiroN = 1;
// const segundoN = 8;
// const terceiroN = 3;
// let isOdd = false;

// if (primeiroN % 2 !== 0 || segundoN % 2 !== 0 || terceiroN % 2 !== 0) {
//     isOdd = true
// }
// console.log(isOdd);

//----------------------------------------

//Exercício 9

// (custo*(20/100)) Calculo de regra de três que representa a porcentagem de 20% do custo, assim não da erro na hora de rodar o código.

// let custo = 15;
// let valorVenda = 25;


// if (custo >= 0 && valorVenda >= 0) {
//     const custoTotal = custo + (custo*(20/100));
//     const resultado = (valorVenda - custoTotal) * 1000;
//     console.log(resultado);
// } else {
//     console.log("Erro, valores inválidos!");
// }

//-----------------------------------------------

//Exercício 10

// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let aliquotaINSS;
let aliquotaIR;
let salarioBruto = 2000.00

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * (8/100);
} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * (9/100);
} else if (salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * (11/100);
} else {
    aliquotaINSS = 570.88
};

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * (7.5/100)) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * (15/100)) - 354.80;
} else if (salarioBase <=  4664.68) {
    aliquotaIR = (salarioBase * (22.5/100)) - 636,13;
} else {
    aliquotaIR = (salarioBase * (27.5/100)) - 869.36;
};

let salarioLiquido = salarioBase - aliquotaIR;

console.log("Salário líquido: ", salarioLiquido);