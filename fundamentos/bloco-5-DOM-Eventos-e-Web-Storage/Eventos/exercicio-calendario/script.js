function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysUl = document.querySelector('#days');
  function createDays(){
      for(let i = 0; i < dezDaysList.length; i++){
        let dayTemp = document.createElement('li');
        dayTemp.className = "day"
        dayTemp.innerText = dezDaysList[i]
        daysUl.appendChild(dayTemp)
        if(dayTemp.innerText == "4" | dayTemp.innerText == "11" | dayTemp.innerText == "18" | dayTemp.innerText == "25"){
            dayTemp.className += " friday"
        }
        if(dayTemp.innerText == "24" | dayTemp.innerText == "25" | dayTemp.innerText == "31"){
            dayTemp.className += " holiday"
        }
      }
  }

  createDays()

//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .  
const btnContainer = document.querySelector('.buttons-container');

function createButton(nameInsideBtn, id,pai){
    let btn = document.createElement('button')
    btn.id = id;
    btn.innerText = nameInsideBtn;
    pai.appendChild(btn)
}
createButton('Feriados', 'btn-holiday',btnContainer);
createButton('Sextou!', 'btn-friday',btnContainer)

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btnFriday-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
let btnFriday = document.querySelector('#btn-friday');
let stateButton = 0;
btnFriday.addEventListener('click', function(){
    for(let i = 0; i < dezDaysList.length;i++){
        if(daysUl.children[i].classList[1] === "friday"){
        daysUl.children[i].innerText = "SEXTOU!"
        }
    }
    if(stateButton == 1){
            daysUl.innerHTML = ''
            createDays();
        stateButton = 0
    }else {
        stateButton = 1
    }
})

//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//Dica - Propriedade: event.target .
let daysLi = daysUl.children
console.log(daysLi)
for(let i = 0; i < daysLi.length;i++){
daysLi[i].addEventListener('mouseover', function(event){
           event.target.style.transform = "scale(1.6)"
           console.log(event.target)
        }
)}

for(let i = 0; i < daysLi.length;i++){
daysLi[i].addEventListener('mouseleave', function(event){
           event.target.style.transform = "scale(1.0)"
        }
)}
