let n = 5;
let ast = "*"
let space = " "

for(let i = 1; i <= n; i++){
console.log(space.repeat(n-i) + ast.repeat(i))
}