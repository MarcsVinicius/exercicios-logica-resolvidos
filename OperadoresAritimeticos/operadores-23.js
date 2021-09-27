// 23 - Divisões sucessivas
// Faça um algoritmo que leia um número e divida-o por dois (sucessivamente) até que o seu resultado
// seja menor que 1. Mostre os resultados da divisão e a quantidade de vezes que o número foi dividido
// no formato:
// 1a divisão, resultado: x
// 2a divisão, resultado: x/2
// .
// .
// .
// Na divisão, resultado: x/2**n
// Quantidade total de divisões: n


// Desenvolva seu código aqui

function dividirAteUm(numero){
    var verificar = 1;
    var qtddivisao = 0;
    var result = 0;

    for(let i = 0; i < verificar;)
    if (numero > 1){
     result = numero / 2;
     numero = numero - result;
     qtddivisao++
     console.log(qtddivisao,"a divisão, resultado:", result);
    }else {
    console.log("Quantidade de divisẽos:", qtddivisao);
    i = 2
    }
}