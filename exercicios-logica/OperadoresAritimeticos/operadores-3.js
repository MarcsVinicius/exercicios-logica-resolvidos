// 03 - Sucessor
//Crie um algoritmo que recebe um número inteiro e exibe o seu antecessor e sucessor no seguinte 
//formato: O antecessor de "number" é "predecessor" e seu sucessor é "successor".


// Desenvolva seu código aqui

function sucessorAntecessor(numero){
    var antecessor = numero - 1;
    var sucessor = numero + 1
    var resultado = [antecessor, sucessor];
    console.log("O antecessor de", numero, "É", resultado[0], "e seu sucessor é", resultado[1]);
}