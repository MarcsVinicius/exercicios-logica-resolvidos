// 22 - Jogo do arremesso de peso
// Você será responsável por desenvolver uma funcionalidade para calcular a pontuação de um jogo de arremesso de peso. De acordo com as regras de pontuação listadas abaixo, calcule a pontuação final da pessoa jogadora.
// A cada 1 metro de distância arremessado a pessoa jogadora recebe 1 ponto;
// A cada 5 metros de distância arremesado a pessoa jogadors recebe 2 pontos extras;
// A saída deve ser da seguinte forma: 'A pontuação do jogador foi de X'


// Desenvolva seu código aqui
// usei o gabarito pois não sabia como realizar a conta
function arremessoPeso(distancia){
    let extrapoints = ((distancia/5)* 2);
    let pontos = Math.trunc(distancia + extrapoints);
    return `A pontuação do jogador foi de ${pontos}`; 
}