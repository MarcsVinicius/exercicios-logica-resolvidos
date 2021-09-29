// 04 - Todos do mesmo tipo?
// Elabore uma função que verifica se todos os elementos de um array são do mesmo tipo.
// A função deve retornar true ou false.


// Desenvolva seu código aqui.
function equals(arrayChosen){ //
    let isTrue = 0
    for(var i = 0; i < arrayChosen.length;i++){
     if(typeof arrayChosen[0] === typeof arrayChosen[i]){
         console.log("igual")
         isTrue = true
     }else{
         console.log("Não é igual")
         isTrue = false
         break
     }
    }
    return isTrue
    
}