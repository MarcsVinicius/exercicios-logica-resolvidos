// 02 - Menor número
// Dada uma lista de números inteiros, escreva um algoritmo que retorne o MENOR número da lista.

// Desenvolva seu código aqui.

let numerosInts = [1,3,4,6,83,12,32,13];
let numerosIntsResult = numerosInts[0];

for(var i = 0; i < numerosInts.length;i++){

    if(numerosInts[i] < numerosIntsResult){

        numerosIntsResult = numerosInts[i]

    }
}
console.log(numerosIntsResult)