// 21 - Média ponderada
// Faça um algoritmo que calcule a média ponderada de 3 notas (com pesos 3, 3 e 4, respectivamente)
// de uma pessoa estudante e mostre, além do valor da média, uma mensagem de “Aprovação”, caso a média
// seja igual ou superior a 6, ou a mensagem “Reprovação”, caso a média das notas seja inferior a 6
// no formato:
// Aprovação, média: 7 ou Reprovação, média: 5.


// Desenvolva seu código aqui

function mediaPonderada(nota1,nota2,nota3){
    let calculoTotal = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4))/(3 + 3 + 4);
    console.log(calculoTotal);
    if (calculoTotal >= 6){
        console.log("Aprovado");
    }else {
        console.log("Reprovado");
    }
}