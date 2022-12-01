// Desafio 1 - Imprima no console uma mensagem de boas-vindas

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Welcome, ' + info.personagem + '!');

  //---------------------------------

  // Desafio 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console

  info['recorrente'] = 'Sim'

  console.log(info)

   //---------------------------------

  // Desafio 3 - Faça um for/in que mostre todas as chaves do objeto.

  for (key in info){
    console.log(key)
  }