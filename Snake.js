const gameBoard = document.getElementById("gameBoard");

const scoreText = document.getElementById("scoreVal");

// gameBoard = context
const context = gameBoard.getContext("2d");
const width0 = gameBoard.width; // width of gameboard
const height0 = gameBoard.height; //height of gameboard

const up_arrow = document.getElementById("up");
const down_arrow = document.getElementById("down");
const left_arrow = document.getElementById("left");
const right_arrow = document.getElementById("right");
const circle_btn1 = document.getElementById("circle");

const audio1 = new Audio();
audio1.src = "./Snake1.mp3"

const audio2 = new Audio();
audio2.src= "./Snake2.mp3"

const UNIT = 25;
let foodX;
let foodY;
let xVel = 25;
let yVel = 0;
let snake = [
//   {x:UNIT*3,y:0},
//   {x:UNIT*2,y:0},
  // {x:UNIT,y:0},
  {x:0,y:0}
];
let score = 0;
let active = true;
let started = false;

window.addEventListener("keydown",keypress)
right_arrow.addEventListener("click",move_right);
left_arrow.addEventListener("click",move_left);
up_arrow.addEventListener("click",move_up);
down_arrow.addEventListener('click',move_down);
circle_btn1.addEventListener('click',pause_btn);


startGame();
function startGame() {
  context.fillStyle = "#212121";
  context.fillRect(0, 0, width0, height0);
  createFood();
  displayFood();
  drawSnake();
  // nextTick();
}

function clearBoard()
{
  context.fillStyle = "#212121";
  context.fillRect(0, 0, width0, height0);
}

function createFood() {
  foodX = Math.floor((Math.random() * width0) / UNIT) * UNIT;
  foodY = Math.floor((Math.random() * height0) / UNIT) * UNIT;
  // console.log(foodX);
}

function displayFood() {
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, UNIT, UNIT);
}


function drawSnake()
{
  context.fillStyle = 'aqua';
  context.strokeStyle = "#212121";
  snake.forEach((snakepart) =>{
    context.fillRect(snakepart.x,snakepart.y,UNIT,UNIT);
    context.strokeRect(snakepart.x,snakepart.y,UNIT,UNIT);
  })
}

function moveSnake()
{
  const head = {x:snake[0].x+xVel,
  y:snake[0].y+yVel}
  // console.log(head)
  snake.unshift(head)
  if(snake[0].x == foodX && snake[0].y == foodY)
  {
    score = score+1;
    scoreText.textContent = score;
    createFood();
    displayFood();
    audio1.play();
  }
  else
  {  
    snake.pop()
  }


}

function nextTick()
{
  if(active)
  {
    setTimeout(()=>
    {
      clearBoard();
      displayFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    },150);
  }
  else
  {
    clearBoard();
    context.font = " 50px serif";
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText("Game Over!",width0/2,height0/2)
  }
}

function keypress(event)
{
  if(!started)
  {
    started = true;
    nextTick();
  }
  const left = 37
  const up = 38
  const right = 39
  const down = 40
  const space = 32

  switch(true){
    case(event.keyCode==left && xVel!=UNIT):
    xVel = -UNIT;
    yVel = 0;
    left_arrow.style.color="white";
    left_arrow.style.background="black";
    right_arrow.style.color="black";
    right_arrow.style.background="white";
    up_arrow.style.color="black";
    up_arrow.style.background="white";
    down_arrow.style.color="black";
    down_arrow.style.background="white";
    circle_btn1.style.color='black';
    circle_btn1.style.background="white";
    break;

    case(event.keyCode==right && xVel!=-UNIT):
    xVel = UNIT;
    yVel = 0;
    right_arrow.style.color="white";
    right_arrow.style.background="black";
    left_arrow.style.color="black";
    left_arrow.style.background="white";
    up_arrow.style.color="black";
    up_arrow.style.background="white";
    down_arrow.style.color="black";
    down_arrow.style.background="white";
    circle_btn1.style.color='black';
    circle_btn1.style.background="white";
    break;

    case(event.keyCode==up && yVel!=UNIT):
    xVel = 0;
    yVel = -UNIT;
    up_arrow.style.color="white";
    up_arrow.style.background="black";
    left_arrow.style.color="black";
    left_arrow.style.background="white";
    right_arrow.style.color="black";
    right_arrow.style.background="white";
    down_arrow.style.color="black";
    down_arrow.style.background="white";
    circle_btn1.style.color='black';
    circle_btn1.style.background="white";
    break;

    case(event.keyCode==down && yVel!=-UNIT):
    xVel = 0;
    yVel = UNIT;
    down_arrow.style.color="white";
    down_arrow.style.background="black";
    left_arrow.style.color="black";
    left_arrow.style.background="white";
    up_arrow.style.color="black";
    up_arrow.style.background="white";
    right_arrow.style.color="black";
    right_arrow.style.background="white";
    circle_btn1.style.color='black';
    circle_btn1.style.background="white";
    break;

    case(event.keyCode==space):
    xVel = 0;
    yVel = 0;
    circle_btn1.style.color='white';
    circle_btn1.style.background="black";
    down_arrow.style.color="black";
    down_arrow.style.background="white";
    left_arrow.style.color="black";
    left_arrow.style.background="white";
    up_arrow.style.color="black";
    up_arrow.style.background="white";
    right_arrow.style.color="black";
    right_arrow.style.background="white";
    break;
  }
  // to get code of key's user pressed
  // event.keyCode
}

function checkGameOver()
{
  switch(true)
  {
    case(snake[0].x<0):
    case(snake[0].x>=width0):
    case(snake[0].y<0):
    case(snake[0].y>=height0):
    active=false;
    audio2.play();
    break;
  }
}



function move_right()
{
  if(!started)
  {
    started = true;
    nextTick();
  }
  if(xVel!=-UNIT)
  {
    xVel = UNIT;
    yVel = 0;
    right_arrow.style.color="white";
    right_arrow.style.background="black";
    left_arrow.style.color="black";
    left_arrow.style.background="white";
    up_arrow.style.color="black";
    up_arrow.style.background="white";
    down_arrow.style.color="black";
    down_arrow.style.background="white";
    circle_btn1.style.color='black';
    circle_btn1.style.background="white";
  }
}


function pause_btn()
{
  if(!started)
  {
    started = true;
    nextTick();
  }
  xVel = 0;
  yVel = 0;
  circle_btn1.style.color='white';
  circle_btn1.style.background="black";
  down_arrow.style.color="black";
  down_arrow.style.background="white";
  left_arrow.style.color="black";
  left_arrow.style.background="white";
  up_arrow.style.color="black";
  up_arrow.style.background="white";
  right_arrow.style.color="black";
  right_arrow.style.background="white";
}

function move_left()
{
  if(!started)
  {
    started = true;
    nextTick();
  }
  if(xVel!=UNIT)
  {
    xVel = -UNIT;
    yVel = 0;
    left_arrow.style.color="white";
    left_arrow.style.background="black";
    right_arrow.style.color="black";
    right_arrow.style.background="white";
    up_arrow.style.color="black";
    up_arrow.style.background="white";
    down_arrow.style.color="black";
    down_arrow.style.background="white";
    circle_btn1.style.color='black';
    circle_btn1.style.background="white";
  }
}

function move_up()
{
  if(!started)
  {
    started = true;
    nextTick();
  }
  if(yVel!=UNIT)
  {
    xVel = 0;
    yVel = -UNIT;
    up_arrow.style.color="white";
    up_arrow.style.background="black";
    left_arrow.style.color="black";
    left_arrow.style.background="white";
    right_arrow.style.color="black";
    right_arrow.style.background="white";
    down_arrow.style.color="black";
    down_arrow.style.background="white";
    circle_btn1.style.color='black';
    circle_btn1.style.background="white";
  }
}

function move_down()
{
  if(!started)
  {
    started = true;
    nextTick();
  }
  if(yVel!=-UNIT)
  {
    xVel = 0;
    yVel = UNIT;
    down_arrow.style.color="white";
    down_arrow.style.background="black";
    left_arrow.style.color="black";
    left_arrow.style.background="white";
    up_arrow.style.color="black";
    up_arrow.style.background="white";
    right_arrow.style.color="black";
    right_arrow.style.background="white";
    circle_btn1.style.color='black';
    circle_btn1.style.background="white";
  }
}