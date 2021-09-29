
// 15 - Área de uma circunferência
// Sabemos que a área de uma circunferência é calcudada da seguinte forma: π * r ^ 2 (PI vezes R ao quadrado).
// Também sabemos que o raio (r) é a metade do diâmetro;
// Crie um algoritmo que calcula a área de uma circunferência com **diâmetro** de 10cm.
// Obs1: Exiba o resultado no seguinte formato 'A circunferência de raio (raio) cm possui uma área de (area) cm²',
// onde raio é o valor do raio da circunferência e área é o valor da área da circunferência.
// Obs2: Exiba a área com apenas duas casas decimais.


// Desenvolva seu código aqui

function areaCircunferencia(diametro){
    let raio = diametro / 2;
    let resultadoFinal = (3.14 * raio ** 2).toFixed(2);
    console.log("A circunferência de raio(",raio,") possui uma área de ",resultadoFinal,"cm²");
}