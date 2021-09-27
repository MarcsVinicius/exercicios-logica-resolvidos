
// 01 - Mensagem codificada 
// Elabore uma função que ao receber uma string como parâmetro retorne outra string com a posição de cada caractere
// multiplicado por 3 no lugar do caractere. Exemplo: decodeString("Trybe") retorna "036912"

// Desenvolva seu código aqui

function decodeString(nome){
    wordReturn = "";
    for(var i = 0; i < nome.length; i++)
    wordReturn = wordReturn + (i*3).toString();
    return wordReturn;
}
decodeString("Trybe")