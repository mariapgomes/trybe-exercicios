/////////////////////////////////////////////////////////////

// 1 - Crie uma função usando o operador &&.

// A função compareTrue ao receber dois parâmetros booleanos deve:

// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros são falsos.

//Se a função for chamada com os valores girafa e elefante como parâmetro, retorna true, mas caso seja chamada com os parâmetro macaco e elefante retorna false.

function compareTrue(animalUm, animalDois) {
    const girafa = true;
    const elefante = true;
    const macaco = false;
    if (animalUm === 'girafa' && animalDois === 'elefante') {
      return true;
    }
    return false
  
}
console.log(compareTrue('girafa', 'girafa'));



