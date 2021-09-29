// 03 - Descubra se o nome está em um array
// Crie um algoritmo que verifica se o nome da Mica está dentro do array de pessoas facilitadoras da Trybe. 
// let facilitators  = [Silvia, Isa, Marina, Mica, Amanda, Karine]
// Se o nome está presente no array, seu algoritmo deve exibir a mensagem "O nome da Mica está no array." Caso contrário, exiba "Não faz parte". 


// Desenvolva seu código aqui
function searchName(nameChosen){ // deve ser uma string
let facilitators  = ["Silvia", "Isa", "Marina", "Mica", "Amanda", "Karine"];

for(var i = 0; i <= facilitators.length; i++){
    if(facilitators[i] === nameChosen){
        console.log("Nome encontrado")
        break
    }else if(i === facilitators.length){
        console.log("Nome não encontrado")
    }
}
}