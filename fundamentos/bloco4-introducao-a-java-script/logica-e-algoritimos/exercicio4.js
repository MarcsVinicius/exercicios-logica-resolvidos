let n = 5;
let ast = "*";
let teste = 4
let space = " ";

for(let i = 2; i >= 0; i--){
console.log(space.repeat(teste-i)+ ast.repeat(n-teste));
teste -= 2
}