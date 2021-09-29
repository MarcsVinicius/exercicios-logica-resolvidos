// 13 - Cor aleatória
// Elabore uma função que retorne uma cor aleatória no formato "rgb(123, 231, 56)"


// Desenvolva seu código aqui

function corAleatoria(){
    var contador = 3;
    var randomColor = [];
    for(var i = 1; i <= contador; i++){
        var valorEscolhido = Math.floor(Math.random() * 256)
        randomColor.push(valorEscolhido);
    }
    console.log("A cor RGB Escolhida foi", randomColor)
}