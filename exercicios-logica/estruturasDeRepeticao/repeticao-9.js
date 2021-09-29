// 09 - Um novo array
// Dados 2 arrays A = [1, 2, 4, 5, 6] e B = [3, 9, 8, 5, 0, 2], crie um algoritmo que imprime um novo array com os valores presentes nos Arrays A e B ao mesmo tempo.
// Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 fors.
 
// Desenvolva seu código aqui

var AB = [1, 2, 4, 5, 6];
var BC = [3, 9, 8, 5, 0, 2];
var CD = [];
    for(let i = 0;i < AB.length;i++){
        CD.push(AB[i]);
}   for(let i = 0;i < BC.length;i++){
        CD.push(BC[i]);
}
console.log(CD)