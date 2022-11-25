// Lição 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index +=1) {
//     console.log(numbers[index]);
// }

//-------------------------------------------

// Lição 2
// Dessa forma é possilvel somar todos os valores de um array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index +=1) {
    soma += numbers[index];
    
}

console.log(soma);
