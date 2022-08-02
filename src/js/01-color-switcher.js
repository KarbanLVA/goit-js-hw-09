
const body = document.querySelector("body");
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let randomColor = null;

buttonStart.addEventListener("click", onClickButtonStart);
buttonStop.addEventListener("click", onClickButtonStop);

function onClickButtonStart(event) {     
    randomColor = setInterval(() => { body.style.backgroundColor = getRandomHexColor() }, 1000);   
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  
}

function onClickButtonStop() {
  clearInterval(randomColor);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
