// 01 - Maior número :
// Dada uma lista de números inteiros, escreva um algoritmo que retorne o MAIOR número da lista.


// Desenvolva seu código aqui.
//usei o gabarito

let numerosInts = [10,3,4,6,83,12,32,13];
let numerosIntsResult = 0;

for(var i = 0; i < numerosInts.length;i++){

    if(numerosInts[i] > numerosIntsResult){

        numerosIntsResult = numerosInts[i]

    }
}
console.log(numerosIntsResult)