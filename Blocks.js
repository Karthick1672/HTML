// let r1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// let check = [];
// let display0=[];
// for(let i = 1;i <= 272;i++)
// {
//     check[i]=0;
// }
// let m = 0;
// let n = 0;
// let nk = Math.floor(Math.random() * 2) + 1;
// nk=2;
// let nk1=0;
// let time = 10000;
// let display = [];
// function display(){
//     clearScreen();
//     // line
//     if(m<=256 && nk == 1)
//     {
//         for(let i = 7; i<=10; i++)
//         {
//             document.getElementById("box"+(i+m)).style.visibility = "visible";
//             display[n]=(i+m);
//             n++;
//         }
//         time = 9000;
//     }
//     // triangle
//     let t = 0;
//     // let tri = [];
//     // let tri1 =0;

//     if(nk == 2 && m <= 240 && nk1 == 0)
//     {
//         for(let i = 23; i<=25;i++)
//         {
//             // nk1 = 0;
//             t = i+m;
//             t-=1;
//             for(let i =0;i<display0.length;i++)
//             {
//                 if(display0[i] == t)
//                 {
//                     // console.log(m)
//                     // console.log(t)
//                     // console.log(display0)
//                     nk1 = 1;
//                     // m=-16;
//                 }
//             }
//             if(nk1 == 0)
//             {
//                 document.getElementById("box"+(i+m)).style.visibility = "visible";
//                 display[n]=(i+m);
//                 n++;
//                 if(display.length >= 3)
//                 {
//                     document.getElementById("box"+(display[1]-16)).style.visibility = "visible";
//                     display[3] = display[1]-16;
//                 }
//             }

//             else
//             {

//                 console.log(display+" "+n)
//                 nk = 0;
//                 // alert("")
//                 // i-=16;
//             }
//         }
//         // console.log(display+" "+n)
//     }
//     m+=16;
//     n=0;
// }
// setInterval(display,500);

// function clearScreen()
// {
//     for(let i = 1;i < 273; i++)
//     {
//         if(check[i]!=1)
//         {
//             document.getElementById("box"+i).style.visibility = "hidden";
//         }
//     }
// }

// let j=0;
// function displayScreen()
// {
//     // console.log(display)
//     for(let i = 0; i<display.length; i++)
//     {
//         display0[j] = display[i];
//         j++;
//     }

//     for(let i = 0; i<display0.length;i++)
//     {
//         document.getElementById("box"+display0[i]).style.visibility = "visible";
//         check[display0[i]] = 1;
//     }
//     m=0;
//     nk=Math.floor(Math.random() * 2) + 1;
//     nk=2;
//     nk1=0;
// }
// setInterval(displayScreen, 9000);

window.addEventListener("keydown", keypress);
function keypress(event) {
  const left = 37;
  const up = 38;
  const right = 39;
  const down = 40;
  const space = 32;
  if (event.keyCode == left) {
    if(slot[7]>1)
    {
        slot[7]-=1;
    }
  }
  if (event.keyCode == down) {
    t = 1;
    display();
  }
  if (event.keyCode == up) {
    t = 1000000000;
    display();
  }
  if (event.keyCode == right) {
    if(nk == 1 && slot[7]<13)
    {
      slot[7]+=1;
    }
  }
  if (event.keyCode == space) {
    display();
  }
}

let slot = [];
let checkSpace = [];
checkSpace[0] = 1;
for (let i = 1; i <= 272; i++) {
  slot[i] = i;
  checkSpace[i] = 1;
}
let nk = 1;
let t = 1;
function display() {
  setTimeout(() => {
    clearScreen();
    checkSlot(); 
    shapeMove();
    display(); // for looping
  }, 500 * t);
}
let step = 0;
let dum = slot[7] + step;
let dis = [];
let filledSpot = [];
let n = 0;
function shapeMove() {
  if(nk == 1 && step <= 256)
  {
    for(i = 0; i < 4; i++)
    {
      document.getElementById("box"+(slot[7]+i+step)).style.visibility = "visible";
      dis[i] = slot[7]+i+step
    }
    step+=16;
  }
  if(step > 256)
  {
    for(i = 0; i<dis.length; i++)
    {
      filledSpot[n] = dis[i];
      checkSpace[filledSpot[n]] = 0;
      n++
    }
    displayScreen()
  }
}
function clearScreen() {
  for (let i = 1; i < 273; i++) {
    if (checkSpace[i] != 0) {
      document.getElementById("box" + i).style.visibility = "hidden";
    }
  }
}
function displayScreen() {
  for (i = 0; i < filledSpot.length; i++) {
    document.getElementById("box" + filledSpot[i]).style.visibility = "visible";}
  step = 0;
  slot[7] = 7;
}
let tick = 0
function checkSlot()
{
  for(i=0;i<filledSpot.length;i++)
  {
    if(checkSpace[slot[7]+i+step] == 0)
    {
      tick = 1;
      // console.log(checkSpace[slot[7]+i+step] +" "+ (slot[7]+i+step) )
    }
  }
  if(tick == 1)
  {
    for(i=0;i<4;i++)
    {
      filledSpot[n] = (slot[7]+i+step)-16
      checkSpace[filledSpot[n]] = 0;
      console.log(checkSpace[filledSpot[n]] +" "+filledSpot[n])
      n++;   
    }
    console.log(filledSpot)
    console.log(step)
    displayScreen()
    tick=0
    // step=0;
  }
}