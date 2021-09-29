// 20 - Aprovado ou reprovado?
// Faça um algoritmo que calcule a média das 3 notas de uma pessoa estudante e mostre, além do valor
// da média, uma mensagem de “Aprovação”, caso a média seja igual ou superior a 6, ou a mensagem
// “Reprovação”, caso a média das notas seja inferior a 6 no formato:
// Aprovação, média: 7 ou Reprovação, média: 5.


// Desenvolva seu código aqui

function calcularMedia(nota1,nota2,nota3){
    let media = (nota1 + nota2 + nota3)/3;
    if (media >= 6){
        console.log("Parabéns você foi aprovado com a nota de ",media.toFixed(2));
    }else {
        console.log("Infelizmente vocẽ foi reprovado, sua nota foi ",media.toFixed(2));
    }
}