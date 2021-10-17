/*1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function verificaPalidrome(palavra) {
  isPalidrome = false;
  let count = 0;
  for (let i = palavra.length - 1; i > -1; i--) {
    if (palavra[count] == palavra[i]) {
      isPalidrome = true;
      count++
    } else {
      break
    }
  }
  return isPalidrome
}

//let result = console.log(verificaPalidrome("arara"));

/*2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .*/

function indiceMaiorValor(array){
    for(let i = 0; i < array.length; i++){
        for(let index = 0; index < array.length; index++){
            if(array[index] > array[i]){
                maior = index;
            }
        }
    }
    return maior
}

//let result = console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

/*3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

function indiceMenorValor(array){
    for(let i = 0; i < array.length; i++){
        for(let index = 0; index < array.length; index++){
            if(array[index] < array[i]){
                menor = index;
            }
        }
    }
    return menor
}

//let result = console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

/*4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */

function indiceMenorValor(array){
    for(let i = 0; i < array.length; i++){
        for(let index = 0; index < array.length; index++){
            if(array[index] > array[i]){
                maior = array[index];
            }
        }
    }
    return maior
}