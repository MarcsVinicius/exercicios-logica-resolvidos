// 06 - Imprima os números ímpares
//A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
//Crie um algoritmo que exibe todos os números inteiros ímpares desse intervalo.


// Desenvolva seu código aqui

var numerosImpar = [];
for(var i = 0;i < 50; i++){
if(i % 2){
    numerosImpar.push(i);
}
}
console.log(numerosImpar)