// Lição 1 de fixação

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player ={
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2, 
//         silver: 3 
//     }
// }

// console.log(player.name +' ' + player.lastName + ' ' + player.age + ' anos');

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes ' + player.bestInTheWorld)

// console.log('A jogadora possui ' + player. medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata')

//-------------------------------------

// Lição 2 de fixação

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (boasVindas in names){
//     // console.log('Olá ' + names[boasVindas])
//   }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (key in car){
    console.log(key, car[key])
  }