const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

let lastUp = firstLi;
  function upOnClick(event) {
    lastUp.classList.remove("tech");
    if (lastUp !== event.target) {
      lastUp = event.target;
    }
    event.target.className = "tech";
  }
  firstLi.addEventListener("click", upOnClick);
  secondLi.addEventListener("click", upOnClick);
  thirdLi.addEventListener("click", upOnClick);

  input.addEventListener("input", function (event) {
    lastUp.innerText = input.value;
    localStorage.setItem(lastUp.id, lastUp.innerText);
  });

  myWebpage.addEventListener("dblclick", function () {
    window.open("https://google.com", "_blank");
  });
  myWebpage.addEventListener("mouseover", function () {
    myWebpage.style.color = "#2fc18c";
  });
  myWebpage.addEventListener("mouseleave", function () {
    myWebpage.style.color = "white";
  });

  function resetText(event) {
    let target = document.getElementById(event.target.id);
    target.innerText = "Adicione sua tencnologia favorita";
    localStorage.setItem(target.id, target.innerText);
  }

  firstLi.addEventListener("dblclick", resetText);
  secondLi.addEventListener("dblclick", resetText);
  thirdLi.addEventListener("dblclick", resetText);

  function addStorage(objeto) {
    document.getElementById(objeto).innerText = localStorage.getItem(objeto);
  }

  for (let i = 0; i < localStorage.length; i++) {
    let chave = localStorage.key(i);
    if(chave == 'first-li' || chave == 'second-li' || chave == 'third-li')
    addStorage(chave);
  }

  const backgroundSelect = document.querySelector(".background-section");

  backgroundSelect.addEventListener("click", function (event) {
    let selected = event.target;
    if (selected.id == "blue") {
      localStorage.setItem("bcg", selected.id);
      loadBackground()
    }
    if (selected.id == "red") {
      localStorage.setItem("bcg", selected.id);
      loadBackground()
    }
    if (selected.id == "yellow") {
      localStorage.setItem("bcg", selected.id);
      loadBackground()
    }
    if (selected.id == "green") {
      localStorage.setItem("bcg", selected.id);
      loadBackground()
    }
  });
const customBackgroundColor = document.getElementById("customBackgroundColor");
customBackgroundColor.addEventListener("input", function () {
  document.body.style.backgroundColor = customBackgroundColor.value;
  localStorage.setItem("bcg", customBackgroundColor.value)
});

function loadBackground(){
  document.body.style.backgroundColor = localStorage.getItem('bcg')
}

loadBackground()
//
const fontSection = document.querySelector('.font-section');
fontSection.addEventListener('click', function(e){
  selected = e.target;
  if(selected.id == "blue"){
    localStorage.setItem('fntc', selected.id)
    changeFontColor()
  }
  if(selected.id == "red"){
    localStorage.setItem('fntc', selected.id)
    changeFontColor()
  }
  if(selected.id == "yellow"){
    localStorage.setItem('fntc', selected.id)
    changeFontColor()
  }
  if(selected.id == "green"){
    localStorage.setItem('fntc', selected.id)
    changeFontColor()
  }
})

function changeFontColor(){
  document.body.style.color = localStorage.getItem('fntc')
  firstLi.style.color = localStorage.getItem('fntc')
}

const inputcolor = document.getElementById("inputcolor");
inputcolor.addEventListener("input", function () {
  localStorage.setItem("fntc", inputcolor.value)
  changeFontColor()
});

changeFontColor()