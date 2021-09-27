// 08 - Conta do restaurante
//Você foi jantar em um restaurante chique, em uma cidade turística. O prato que você pediu custou R$100,00. Porém o restaurante possui uma taxa de 10% sobre o valor da conta por ser um lugar turístico.
// Crie uma solução para calcular o valor final da conta sendo que você também quis dar 5% de gorjeta para a pessoa que lhe atendeu.


// Desenvolva seu código aqui

function gorjeta(porcentagemGorjeta,precoConta) { // precoConta = Valor do prato
    var valorApagar = (10*precoConta)/100; // 10 = porcentagem por ser um lugar turistico
    var valorGorjeta = (porcentagemGorjeta*precoConta)/100;
    var valorFinalPagar = valorApagar + valorGorjeta + precoConta;

    console.log("O valor final da conta com a gorjeta deu R$",valorFinalPagar.toFixed(2));
}