// 07 - Onde está o elemento?
// Elabore uma função que receba 2 parâmetros (um array e um elemento que está contido no array) e retorne
// a posição em que o elemento se encontra no array. Caso não encontre o elemento, retorne uma mensagem de erro.

// Desenvolva seu código aqui

function conteudosArray(p1,p2){ // P1 deve ser uma array declare desta forma -> ["Argumento1","Argumento2",Argumento3],"ArgumentoP2"
    for(var i = 0;i <= p1.length;i++){
        if(p1[i] === p2){
            resultArray = i
            console.log("Elemento encontrado na posição: "+i+" da array")
            break
        }else if(p1[i] === undefined){
            console.log("ERRO: Elemento não encontrado")
        }
    }
}