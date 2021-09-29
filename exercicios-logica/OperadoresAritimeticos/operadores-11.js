// 11 - Loja de raçãoLoja de ração
// Crie um programa para uma loja de ração, onde ao informar o preço do produto sejam exibidas as formas de pagamento disponíveis. Pagamento à vista possui 10% de desconto e parcelado em 4x possui juros de 15%. 
// Exemplo:
// - Preço do produto: R$80
// - À Vista: R$72
// - 4x de: R$23


// Desenvolva seu código aqui

function informarParcela(valorProduto){
    var descontoAvista = valorProduto - (10*valorProduto)/100;
    var juros4X = (15*valorProduto)/100 + valorProduto;

    console.log("Preço do produto R$", valorProduto.toFixed(2));
    console.log("Pagamento á vista R$", descontoAvista.toFixed(2));
    console.log("Pagamento parcelado em 4x", juros4X.toFixed(2));
}