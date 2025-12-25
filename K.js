const brush0 = document.getElementsByClassName("color0")[0];
const brush1 = document.getElementsByClassName("color1")[0];
const brush2 = document.getElementsByClassName("color2")[0];
const brush3 = document.getElementsByClassName("stick3")[0];
const lines = document.getElementsByClassName("lines")[0];
const ball = document.getElementsByClassName("ball1")[0];
const backgroundcol = document.getElementById("background");
const btn1 = document.getElementById("btn0");
const stick4 = document.getElementById("stick4");

const audio1 = new Audio();
audio1.src = "./sword_1.mp3";

const audio2 = new Audio();
audio2.src = "./water_drop_sound.mp3";

setTimeout(() => {
  brush2.style.animation = "reversed 1s ease forwards";
  // audio1.play();
}, 4000);

setTimeout(() => {
  audio1.play();
}, 3500);

setTimeout(() => {
  brush3.style.animation = "reversed 1s ease forwards";
}, 4000);

setTimeout(() => {
  brush0.style.animation = "reversed 1s ease forwards";
}, 5000);

setTimeout(() => {
  brush1.style.animation = "reversed 1s ease forwards";
  // lines.style.display = 'flex'
}, 5000);

setTimeout(() => {
  ball.style.animation = "rightside 1s ease forwards";
}, 6000);

ball.addEventListener("click", changebg);

function changebg() {
  backgroundcol.style.backgroundColor = "orange";
  btn1.style.visibility = "hidden";
  stick4.style.visibility = "hidden";
  audio2.play();
  // setTimeout(()=>{ window.location.assign('Memory_Card_game_level1.html')},1500);
}
