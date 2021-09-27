// 12 - Peso e preço do prato
//Um restaurante comprou uma balança nova e precisa adicionar um programa que calcula o valor que a pessoa vai pagar. O valor do quilo é R$37,90.
//Desenvolva esse programa levando em consideração que a balança mostra o peso em gramas e que o valor precisa conter duas casas depois da vírgula.
//Exiba os valores da seguinte forma: 
//Peso: 735 gramas
//Valor: R$ 27,86


// Desenvolva seu código aqui

function calcularKg(pesoGramas){ //o peso deve ser declarado em gramas
    var valorKg = 37.90;
    var precoFinal = ((pesoGramas*valorKg)/1000).toFixed(2);
    
    console.log("Peso de ",pesoGramas,"gramas");
    console.log("Valor total de R$", precoFinal);
}