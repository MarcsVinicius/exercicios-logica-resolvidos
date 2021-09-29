// 14 - Tempo de viagem
// Elabore uma função que receba a duração total de uma viagem em minutos e retorne a duração em
// horas e minutos no seguinte formato: "A viagem terá duração de __ hora(s) e __ minuto(s)"


// Desenvolva seu código aqui

function minutosParaHora(minutosDeViagem){
    let resultadoHoras = (minutosDeViagem / 60).toFixed(0);
    let resultadoMinutos = minutosDeViagem % 60;
    console.log("A viagem terá duração de ",resultadoHoras," hora(s) e ",resultadoMinutos," minuto(s)");
    }