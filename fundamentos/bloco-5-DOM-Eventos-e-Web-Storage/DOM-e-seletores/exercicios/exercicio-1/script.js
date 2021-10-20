const title = document.querySelector('header').style.backgroundColor = '#03A65A';
const emergency = document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor ='#FF9F84';
const noEmergency = document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#F2CD5E';
let subTitlesEmergency = document.querySelectorAll(".emergency-tasks h3");
let subTitlesNoEmergency = document.querySelectorAll(".no-emergency-tasks h3");
const lastInfo = document.getElementById("footer-container").style.backgroundColor = "#01403A"

for(let i = 0; i < subTitlesEmergency.length; i++){
    subTitlesEmergency[i].style.backgroundColor = '#A500F3';
    subTitlesNoEmergency[i].style.backgroundColor = '#232525';
}

