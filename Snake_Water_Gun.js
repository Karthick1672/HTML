const snake = document.getElementById("snake");
const water = document.getElementById("water");
const gun = document.getElementById("gun");
const playerDisplay = document.getElementById("playerDisplay");
const systemDisplay = document.getElementById("systemDisplay");
const winScore = document.getElementById("winScore");
const loseScore = document.getElementById("loseScore");
const tieScore = document.getElementById("tieScore");
const ques1 = document.getElementById("ques1");
const ques2 = document.getElementById("ques2");
const snakeImg = document.getElementById("snakeImg1");
const waterImg = document.getElementById("waterImg1");
const gunImg = document.getElementById("gunImg1");
let sys = 0;
let win = 0;
let lose = 0;
let tie = 0;
let time = 500;
snake.addEventListener('click',()=>{    
    sys=Math.floor(Math.random() * 3) + 1;
    snakeImg.style.visibility = "visible";
    ques2.style.visibility = "hidden";
    waterImg.style.visibility = "hidden";
    gunImg.style.visibility = "hidden";

    if(sys == 1)
    {
        
        setTimeout(()=>{
            tie++;
            systemDisplay.innerHTML = "Snake";
            tieScore.innerHTML = tie;
        },time);

    }
    if(sys == 2)
    {
        setTimeout(()=>{
            systemDisplay.innerHTML = "Water";
            win++;
            winScore.innerHTML = win;
        },time);
    }
    if(sys == 3)
    {
        setTimeout(()=>{
            systemDisplay.innerHTML = "Gun";
            lose++;
            loseScore.innerHTML = lose;
        },time);
    }
})

water.addEventListener('click',()=>{    
    sys=Math.floor(Math.random() * 3) + 1;
    snakeImg.style.visibility = "hidden";
    ques2.style.visibility = "hidden";
    waterImg.style.visibility = "visible";
    gunImg.style.visibility = "hidden";

    if(sys == 1)
    {   
        setTimeout(()=>{
            lose++;
            systemDisplay.innerHTML = "Snake";
            loseScore.innerHTML = lose;
            // console.log(win);
        },time);

    }
    if(sys == 2)
    {
        setTimeout(()=>{
            systemDisplay.innerHTML = "Water";
            tie++;
            tieScore.innerHTML = tie;
        },time);
    }
    if(sys == 3)
    {
        setTimeout(()=>{
            systemDisplay.innerHTML = "Gun";
            win++;
            winScore.innerHTML = win;
        },time);
    }
})

gun.addEventListener('click',()=>{    
    sys=Math.floor(Math.random() * 3) + 1;
    snakeImg.style.visibility = "hidden";
    ques2.style.visibility = "hidden";
    waterImg.style.visibility = "hidden";
    gunImg.style.visibility = "visible";
    if(sys == 1)
    {   
        setTimeout(()=>{
            win++;
            systemDisplay.innerHTML = "Snake";
            winScore.innerHTML = win;
            // console.log(win);
        },time);

    }
    if(sys == 2)
    {
        setTimeout(()=>{
            systemDisplay.innerHTML = "Water";
            lose++;
            loseScore.innerHTML = lose;
        },time);
    }
    if(sys == 3)
    {
        setTimeout(()=>{
            systemDisplay.innerHTML = "Gun";
            tie++;
            tieScore.innerHTML = tie;
        },time);
    }
})