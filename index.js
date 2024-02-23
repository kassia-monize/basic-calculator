// ## Objetivo 
// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}

function calculateWinningBalance(victories, defeats) {
  const balance = victories - defeats;
  let nivel = '';

  if (victories <= 10) nivel = "Ferro";
    
  else if (victories >= 11 && victories <= 20) nivel = "Bronze"
  
  else if (victories >= 21 && victories <= 50) nivel = "Prata"
    
  
  else if (victories >= 51 && victories <= 80) nivel = "Ouro"
  
  else if (victories >= 81 && victories <= 90) nivel = "Diamante"
  
  else if (victories >= 91 && victories <= 100) nivel = "Lendário"
  
  else if (victories >= 101) nivel ="Imortal"


  return `O Herói tem o saldo de ${balance} e está no nível ${nivel}.`

}

console.log(calculateWinningBalance(50, 20));
console.log(calculateWinningBalance(70, 30));
console.log(calculateWinningBalance(20, 20));

wellDone()

function wellDone(){
 console.log("Preparando para passar de Nível. ")
 console.log("Você conquistou o nível Diamante. ")
 }

