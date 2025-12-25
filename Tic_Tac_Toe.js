const xbox = document.getElementById("xBox"),
obox = document.getElementById("oBox"),
box1 = document.getElementById("box1"),
box2 = document.getElementById("box2"),
box3 = document.getElementById("box3"),
box4 = document.getElementById("box4"),
box5 = document.getElementById("box5"),
box6 = document.getElementById("box6"),
box7 = document.getElementById("box7"),
box8 = document.getElementById("box8"),
box9 = document.getElementById("box9");

const screen = document.getElementById("screen");
const display = document.getElementById("display");

// Random choice for X or O
let ranInt = Math.floor(Math.random()*2);
let xred = 1,i = 0;
if(ranInt == 0)
{
    xbox.style.background = "#ff0000";
    obox.style.background = "#212121";
    xred = 1,i = 0;
}
else
{
    xbox.style.background = "#212121";
    obox.style.background = "#ff0000";
    xred = 0,i = 1;
}



let b1 = 0,b2 = 0,b3 =0,b4=0,b5 =0,b6 =0,b7=0,b8=0,b9 =0;
let val = ["X","O","X","O","X","O","X","O","X","O"];
let xVal = [];
let oVal = [];

box1.addEventListener("click",()=>{
    if (b1 == 0)
    {
        box1.innerHTML = val[i];
        changeColor();
        b1 = 1;
        if(i%2 == 0)
        {
            xVal.push(1);
        }
        else
        {
            oVal.push(1);
        }
        gameOver();
        i++;
    }
})
box2.addEventListener("click",()=>{
    if (b2 == 0)
    {
        box2.innerHTML = val[i];
        changeColor();
        b2 = 1;
        if(i%2 == 0)
        {
            xVal.push(2);
        }
        else
        {
            oVal.push(2);
        }
        gameOver();
        i++;
    }
})
box3.addEventListener("click",()=>{
    if (b3 == 0)
    {
        box3.innerHTML = val[i];
        changeColor();
        b3 = 1;
        if(i%2 == 0)
        {
            xVal.push(3);
        }
        else
        {
            oVal.push(3);
        }
        gameOver();
        i++;
    }
})
box4.addEventListener("click",()=>{
    if (b4 == 0)
    {
        box4.innerHTML = val[i];
        changeColor();
        b4 = 1;
        if(i%2 == 0)
        {
            xVal.push(4);
        }
        else
        {
            oVal.push(4);
        }
        gameOver();
        i++;
    }
})
box5.addEventListener("click",()=>{
    if (b5 == 0)
    {
        box5.innerHTML = val[i];
        changeColor();
        b5 = 1;
        if(i%2 == 0)
        {
            xVal.push(5);
        }
        else
        {
            oVal.push(5);
        }
        gameOver();
        i++;
    }
})
box6.addEventListener("click",()=>{
    if (b6 == 0)
    {
        box6.innerHTML = val[i];
        changeColor();
        b6 = 1;
        if(i%2 == 0)
        {
            xVal.push(6);
        }
        else
        {
            oVal.push(6);
        }
        gameOver();
        i++;
    }
})
box7.addEventListener("click",()=>{
    if (b7 == 0)
    {
        box7.innerHTML = val[i];
        changeColor();
        b7 = 1;
        if(i%2 == 0)
        {
            xVal.push(7);
        }
        else
        {
            oVal.push(7);
        }
        gameOver();
        i++;
    }
})
box8.addEventListener("click",()=>{
    if (b8 == 0)
    {
        box8.innerHTML = val[i];
        changeColor();
        b8 = 1;
        if(i%2 == 0)
        {
            xVal.push(8);
        }
        else
        {
            oVal.push(8);
        }
        gameOver();
        i++;
    }
})
box9.addEventListener("click",()=>{
    if (b9 == 0)
    {
        box9.innerHTML = val[i];
        changeColor();
        b9 = 1;
        if(i%2 == 0)
        {
            xVal.push(9);
        }
        else
        {
            oVal.push(9);
        }
        gameOver();
        i++;
    }
})



let checkArray = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[4,5,6],[1,5,9],[3,5,7]];
checkArray.sort()
let xVal1 = [],xVal2 = [];
let oVal1 = [],oVal2 = [];
let count = 0;

function gameOver()
{
    //for 3 values
    if(xVal.length == 3 || oVal.length == 3)
    {
        xVal.sort();
        oVal.sort();
        for(let i = 0;i<checkArray.length;i++) 
        {
            if(JSON.stringify(checkArray[i])===JSON.stringify(xVal))
            {
                done();
                for (let k = 0; k < 3; k++)
                {
                    if(xVal[k]==1)
                    {
                        box1.style.background = "antiquewhite";
                    }
                    if(xVal[k]==2)
                    {
                        box2.style.background = "antiquewhite";
                    }
                    if(xVal[k]==3)
                    {
                        box3.style.background = "antiquewhite";
                    }
                    if(xVal[k]==4)
                    {
                        box4.style.background = "antiquewhite";
                    }
                    if(xVal[k]==5)
                    {
                        box5.style.background = "antiquewhite";
                    }
                    if(xVal[k]==6)
                    {
                        box6.style.background = "antiquewhite";
                    }
                    if(xVal[k]==7)
                    {
                        box7.style.background = "antiquewhite";
                    }
                    if(xVal[k]==8)
                    {
                        box8.style.background = "antiquewhite";
                    }
                    if(xVal[k]==9)
                    {
                        box9.style.background = "antiquewhite";
                    }
                }
                setTimeout(()=>{
                screen.style.visibility = "visible";
                display.innerHTML = "X Wins";
                },1000);
            }
            if(JSON.stringify(checkArray[i])===JSON.stringify(oVal))
            {
                if(JSON.stringify(checkArray[i])===JSON.stringify(oVal))
            {
                done();
                for (let k = 0; k < 3; k++)
                {
                    if(oVal[k]==1)
                    {
                        box1.style.background = "antiquewhite";
                    }
                    if(oVal[k]==2)
                    {
                        box2.style.background = "antiquewhite";
                    }
                    if(oVal[k]==3)
                    {
                        box3.style.background = "antiquewhite";
                    }
                    if(oVal[k]==4)
                    {
                        box4.style.background = "antiquewhite";
                    }
                    if(oVal[k]==5)
                    {
                        box5.style.background = "antiquewhite";
                    }
                    if(oVal[k]==6)
                    {
                        box6.style.background = "antiquewhite";
                    }
                    if(oVal[k]==7)
                    {
                        box7.style.background = "antiquewhite";
                    }
                    if(oVal[k]==8)
                    {
                        box8.style.background = "antiquewhite";
                    }
                    if(oVal[k]==9)
                    {
                        box9.style.background = "antiquewhite";
                    }
                }
                setTimeout(()=>{
                screen.style.visibility = "visible";
                display.innerHTML = "O Wins";
                },1000);
            }
            }
        }
    }

    // for 4 Values
    if(xVal.length == 4)
    {
        // for x values Only
        xVal.sort();
        console.log(xVal)
        for (let y=0; y<3; y++)
        {
            if(xVal1.length<=3)
            {
                xVal1.push(xVal[y]);
                xVal2.push(xVal[y+1]);
            }
        }
        for(let i = 0;i<checkArray.length;i++) 
        {
            if(JSON.stringify(checkArray[i])===JSON.stringify(xVal1))
            {
                done();
                for (let k = 0; k < 3; k++)
                {
                    if(xVal1[k]==1)
                    {
                        box1.style.background = "antiquewhite";
                    }
                    if(xVal1[k]==2)
                    {
                        box2.style.background = "antiquewhite";
                    }
                    if(xVal1[k]==3)
                    {
                        box3.style.background = "antiquewhite";
                    }
                    if(xVal1[k]==4)
                    {
                        box4.style.background = "antiquewhite";
                    }
                    if(xVal1[k]==5)
                    {
                        box5.style.background = "antiquewhite";
                    }
                    if(xVal1[k]==6)
                    {
                        box6.style.background = "antiquewhite";
                    }
                    if(xVal1[k]==7)
                    {
                        box7.style.background = "antiquewhite";
                    }
                    if(xVal1[k]==8)
                    {
                        box8.style.background = "antiquewhite";
                    }
                    if(xVal1[k]==9)
                    {
                        box9.style.background = "antiquewhite";
                    }
                }
                setTimeout(()=>{
                screen.style.visibility = "visible";
                display.innerHTML = "X Wins";
                },1000);
            }
            if(JSON.stringify(checkArray[i])===JSON.stringify(xVal2))
            {
                done();
                for (let k = 0; k < 3; k++)
                {
                    if(xVal2[k]==1)
                    {
                        box1.style.background = "antiquewhite";
                    }
                    if(xVal2[k]==2)
                    {
                        box2.style.background = "antiquewhite";
                    }
                    if(xVal2[k]==3)
                    {
                        box3.style.background = "antiquewhite";
                    }
                    if(xVal2[k]==4)
                    {
                        box4.style.background = "antiquewhite";
                    }
                    if(xVal2[k]==5)
                    {
                        box5.style.background = "antiquewhite";
                    }
                    if(xVal2[k]==6)
                    {
                        box6.style.background = "antiquewhite";
                    }
                    if(xVal2[k]==7)
                    {
                        box7.style.background = "antiquewhite";
                    }
                    if(xVal2[k]==8)
                    {
                        box8.style.background = "antiquewhite";
                    }
                    if(xVal2[k]==9)
                    {
                        box9.style.background = "antiquewhite";
                    }
                }
                setTimeout(()=>{
                screen.style.visibility = "visible";
                display.innerHTML = "X Wins";
                },1000);
            }
        }

    }
    if(oVal.length == 4)
    {
        oVal.sort();
        for (let y=0; y<3; y++)
        {
            if(oVal1.length<=3)
            {
                oVal1.push(oVal[y]);
                oVal2.push(oVal[y+1]);
            }
        }
        for(let i = 0;i<checkArray.length;i++) 
        {
            if(JSON.stringify(checkArray[i])===JSON.stringify(oVal1))
            {
                done();
                for (let k = 0; k < 3; k++)
                {
                    if(oVal1[k]==1)
                    {
                        box1.style.background = "antiquewhite";
                    }
                    if(oVal1[k]==2)
                    {
                        box2.style.background = "antiquewhite";
                    }
                    if(oVal1[k]==3)
                    {
                        box3.style.background = "antiquewhite";
                    }
                    if(oVal1[k]==4)
                    {
                        box4.style.background = "antiquewhite";
                    }
                    if(oVal1[k]==5)
                    {
                        box5.style.background = "antiquewhite";
                    }
                    if(oVal1[k]==6)
                    {
                        box6.style.background = "antiquewhite";
                    }
                    if(oVal1[k]==7)
                    {
                        box7.style.background = "antiquewhite";
                    }
                    if(oVal1[k]==8)
                    {
                        box8.style.background = "antiquewhite";
                    }
                    if(oVal1[k]==9)
                    {
                        box9.style.background = "antiquewhite";
                    }
                }
                setTimeout(()=>{
                screen.style.visibility = "visible";
                display.innerHTML = "O Wins";
                },1000);
            }
            if(JSON.stringify(checkArray[i])===JSON.stringify(oVal2))
            {
                done();
                for (let k = 0; k < 3; k++)
                {
                    if(oVal2[k]==1)
                    {
                        box1.style.background = "antiquewhite";
                    }
                    if(oVal2[k]==2)
                    {
                        box2.style.background = "antiquewhite";
                    }
                    if(oVal2[k]==3)
                    {
                        box3.style.background = "antiquewhite";
                    }
                    if(oVal2[k]==4)
                    {
                        box4.style.background = "antiquewhite";
                    }
                    if(oVal2[k]==5)
                    {
                        box5.style.background = "antiquewhite";
                    }
                    if(oVal2[k]==6)
                    {
                        box6.style.background = "antiquewhite";
                    }
                    if(oVal2[k]==7)
                    {
                        box7.style.background = "antiquewhite";
                    }
                    if(oVal2[k]==8)
                    {
                        box8.style.background = "antiquewhite";
                    }
                    if(oVal2[k]==9)
                    {
                        box9.style.background = "antiquewhite";
                    }
                }
                setTimeout(()=>{
                screen.style.visibility = "visible";
                display.innerHTML = "O Wins";
                },1000);
            }
        }
    }

    // for Draws
    count++
    if(count == 9)
    {
        screen.style.visibility = "visible";
        display.innerHTML = "Draw"
    }
}


function done()
{
    b1 = 1,b2 = 1,b3 = 1,b4 = 1,b5 = 1,b6 = 1,b7 = 1,b8 = 1,b9 =1;
}

// For slide XO-box
function changeColor()
{
    if(xred == 1)
    {
        obox.style.background = "#ff0000";
        xbox.style.background = "#212121";
        xred = 0;
    }
    else
    {
        obox.style.background = "#212121";
        xbox.style.background = "#ff0000";
        xred = 1;
    }
}