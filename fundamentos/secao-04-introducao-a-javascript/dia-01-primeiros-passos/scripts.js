// const myName = "Maria";
// const birthCity = "São Gonçalo";
// let birthYear = 1997;

// console.log(myName + " " + birthCity + " " + birthYear);

// birthYear = 2023;

// console.log(myName + " " + birthCity + " " + birthYear);

// Não é possivel alterar valores de constantes.

//Exercício 2

// const base = 5;
// const heigth = 8;
// const area = base * heigth;

// console.log(area);

// const perimeter = 5 + 2 * 8;

// console.log(perimeter);

// Exercício 3

// const nota = 50;

// if (nota >= 80) {
//     console.log("Parabéns, você foi aprovada(o)!");
// } 
// else if (nota < 80 && nota >= 60) {
//     console.log("Você está na nossa lista de espera");
// } 
// else {
//     console.log("Você foi reprovada(o)");
// }

// Exercício 4

// const currentHour = 22;
// let message = "";

// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir";
// }
// else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D"
// }
// else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?"
// }
// else if (currentHour >= 11 && currentHour < 14) {
//     message = "Hora do almoço!!!"
// }
// else if (currentHour >= 4 && currentHour < 11) {
//     message = "Hmmm, cheiro de café recém-passado"
// }

// console.log(message)

// Exercício 5

// let weekDay = "Domingo";

// if (weekDay === "Segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// }
// else {
//     console.log("FINALMENTE, descanso merecido UwU");
// }

// Exercício 6

let status = "aprovada";

switch (status) {
    case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

    case "lista":
    console.log("Você está na nossa lista de espera");
    break;

    case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

    default:
    console.log("Informação incorreta");
}