// 05 - Números divisíveis por 3
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// Desenvolva seu código aqui
numerosDivisiveis = 0;
for(var i = 2;i <= 150;i++)
    if((i % 3) == 0){
    numerosDivisiveis++
    }
if(numerosDivisiveis == 50){
    console.log("Mensagem ultra secreta")
}