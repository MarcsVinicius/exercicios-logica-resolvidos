// 02 - Calcular o salário 
// Na sapataria do Faraó todas as pessoas da área de vendas recebem um salário fixo acrescido de
// 4% de comissão sobre as vendas. 
// Faça um algoritmo que receba o salário fixo dos vendedores e vendedoras da sapataria do Faraó
// e o valor de suas vendas, e assim calcula e mostrar a comissão e seu salário final no formato:
// A comissão é: X e o salário é: Y.


// Desenvolva seu código aqui]

function calcularSalario(numeroDeVendas, salario)  {
var comissao = (4*salario)/100;
var salarioFinal = (numeroDeVendas*comissao)+ salario;

return(salarioFinal);


}
calcularSalario(3, 1600);
