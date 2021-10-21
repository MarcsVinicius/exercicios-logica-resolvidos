let pai = document.querySelector('#pai');
let irmao = document.createElement('section');
irmao.className = "irmaoDoOndeVoceEsta";
pai.appendChild(irmao)
//
let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filhoDoElemento = document.createElement('section');
filhoDoElemento.className = "filhoDoElemento";
elementoOndeVoceEsta.appendChild(filhoDoElemento);
console.log(elementoOndeVoceEsta)
//
let primeiroFilhoDoFilho
