// Desafio 1 - Imprima no console uma mensagem de boas-vindas

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Welcome, ' + info.personagem + '!');

  //---------------------------------

  // Desafio 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console

//   info['recorrente'] = 'Sim'

//   console.log(info);

  //---------------------------------

  // Desafio 3 - Faça um for/in que mostre todas as chaves do objeto.

//   for (key in info){
//     console.log(key);
//   }

//---------------------------------

// Desafio 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

//   for (key in info){
//     console.log(info[key]);
//   }

//---------------------------------

// Desafio 5 - Defina um segundo objeto e mprima os valores de cada objeto juntos, de acordo com cada uma das chaves.


// info.ducksmovies = {
//     combinations: ['Tio Patinhas', 'Christmas on Bear Mountain', 'Dell’s Four Color Comics #178', 'O último MacPatinhas', 'Sim']
// }

// console.log(info.personagem + ' e ' + info.ducksmovies.combinations[0]);
// console.log(info.origem+ ' e ' + info.ducksmovies.combinations[1] +', ' + info.ducksmovies.combinations[2]);
// console.log(info.nota + ' e ' + info.ducksmovies.combinations[3]);
// console.log(info.recorrente + ' e ' + info.ducksmovies.combinations[4]);

//---------------------------------

// Desafio 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de ' + leitor.nome  + ' ' + leitor.sobrenome + ' se chama ' + '"' + leitor.livrosFavoritos[0].titulo + '"');