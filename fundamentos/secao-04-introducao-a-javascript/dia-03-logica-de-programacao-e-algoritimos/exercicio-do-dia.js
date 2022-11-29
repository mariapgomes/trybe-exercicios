// Exercício 1 - Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let factorial = 1

for (let index = 10; index > 0; index -= 1){
    factorial *= index;
}
console.log(factorial);