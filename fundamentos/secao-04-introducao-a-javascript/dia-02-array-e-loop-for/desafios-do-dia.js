// Lição 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index +=1) {
//     console.log(numbers[index]);
// }

//-------------------------------------------

// Lição 2
// Dessa forma é possilvel somar todos os valores de um array

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     soma += numbers[index];
    
// }

// console.log(soma);

//-------------------------------------------

// Lição 3 - Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// o .toFixed() determina a quantidade de casas decimais após a vírgula que será exibida.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     soma += numbers[index] / numbers.length;
// }

// console.log(soma.toFixed(1));

//-------------------------------------------

// Lição 4 -Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     soma += numbers[index] / numbers.length;  
// }
// if (soma.toFixed(1) > 20){
//     console.log("valor maior que 20.");
// } else {
//     console.log("valor menor ou igual a 20.");
// }

//-------------------------------------------

// Lição 5 - Descubra qual o maior valor contido no array e imprima-o.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}

  console.log(maiorNumero);  