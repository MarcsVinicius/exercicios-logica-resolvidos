// 17 - Financiamento de veículo
//Crie um programa para gerenciar as contas de um financiamento de veículo. A pessoa que quer fazer o financiamento precisa informar o valor total do carro, o valor da entrada a ser dada e a quantidade de parcelas que ela deseja pagar.
//A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento.
//Desenvolva a solução e exiba conforme o exemplo (o valor da parcela precisa ter 2 casas decimais após a vírgula):
//- Valor Financiado: R$35000
//- Valor do Juros: R$1750
//- Quantidade de Parcelas: 36 
//- Valor da Parcela: R$1020.83
//- Valor Total do Carro: R$46750


// Desenvolva seu código aqui

function SimularFinanciamento(numeroDeParcelas,valorDoCarro,valorFinanciado){
    if (valorFinanciado > valorDoCarro){
        console.log("ERRO: Valor de financiamento é maior que o preço do carro")
    } else {
    let jurosFinanciamento = (5 * valorFinanciado)/100;
    let valorDaParcela = (valorDoCarro - valorFinanciado)/numeroDeParcelas.toFixed(2);
    let valorTotalCarro = valorDoCarro + jurosFinanciamento;
    
    console.log("Valor financiado: R$",valorFinanciado.toFixed(2));
    console.log("Valor do Juros: R$",jurosFinanciamento);
    console.log("Quantidade de Parcelas:",numeroDeParcelas);
    console.log("Valor total do Carro: R$",valorTotalCarro.toFixed(2));
    }
}