const mv = document.getElementById("mouseValue");
// let on = 0,e = 0; 
document.addEventListener("mousemove",function(event)
{
    const x = event.clientX;
    const y = event.clientY;
    if(x >=55 && x <=1205 && y >= 140 && y <= 540)
    {
        mv.innerHTML = x+", "+y+"px"
    }
    else
    {
        mv.innerHTML = " ";
    }
});


const context = document.getElementById("myCanvas");
const ctn = context.getContext("2d");

//Initializing the canvas/ Painting Board
// context.width = window.innerWidth-80;  // width of the paint board
// context.height = window.innerHeight-20; // height of the paint board
// console.log(window.innerHeight);
// console.log(context.height);
// ctn.fillStyle = "#3c7781";
// ctn.fillRect(20, 20, context.width-30, context.height-20);

function startPosition(e)
{

}
startPosition(0);