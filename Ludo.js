const roll = document.getElementById("d4");
const num1 = document.querySelector(".dot1");
const num2 = document.querySelector(".dot2");
const num3 = document.querySelector(".dot3");
const num4 = document.querySelector(".dot4");
const num5 = document.querySelector(".dot5");
const num6 = document.querySelector(".dot6");
const dice1 = document.getElementById("d2");

roll.addEventListener("click", dice_no);
let nk1 = 0;
function dice_no() {
  clearDice();
  // to spin the dice
  dice1.style.animation = "rotation 3s infinite linear";
  setTimeout(() => {
    // to stop spinning
    dice1.style.animation = "rotation1 3s infinite linear";
    nk1 = numberDisplay();
  }, 1000);
}
function clearDice() {
  num1.style.visibility = "hidden";
  num2.style.visibility = "hidden";
  num3.style.visibility = "hidden";
  num4.style.visibility = "hidden";
  num5.style.visibility = "hidden";
  num6.style.visibility = "hidden";
}
function numberDisplay() {
  n1 = Math.floor(Math.random() * 6) + 1;
  // n1 = 6;
  if (n1 == 1) {
    num2.style.visibility = "hidden";
    num3.style.visibility = "hidden";
    num4.style.visibility = "hidden";
    num5.style.visibility = "hidden";
    num6.style.visibility = "hidden";
    num1.style.visibility = "visible";
  }
  if (n1 == 2) {
    num1.style.visibility = "hidden";
    num3.style.visibility = "hidden";
    num4.style.visibility = "hidden";
    num5.style.visibility = "hidden";
    num6.style.visibility = "hidden";
    num2.style.visibility = "visible";
  }
  if (n1 == 3) {
    num1.style.visibility = "hidden";
    num2.style.visibility = "hidden";
    num4.style.visibility = "hidden";
    num5.style.visibility = "hidden";
    num6.style.visibility = "hidden";
    num3.style.visibility = "visible";
  }
  if (n1 == 4) {
    num1.style.visibility = "hidden";
    num2.style.visibility = "hidden";
    num3.style.visibility = "hidden";
    num5.style.visibility = "hidden";
    num6.style.visibility = "hidden";
    num4.style.visibility = "visible";
  }
  if (n1 == 5) {
    num1.style.visibility = "hidden";
    num2.style.visibility = "hidden";
    num3.style.visibility = "hidden";
    num4.style.visibility = "hidden";
    num6.style.visibility = "hidden";
    num5.style.visibility = "visible";
  }
  if (n1 == 6) {
    num1.style.visibility = "hidden";
    num2.style.visibility = "hidden";
    num3.style.visibility = "hidden";
    num4.style.visibility = "hidden";
    num5.style.visibility = "hidden";
    num6.style.visibility = "visible";
  }
  return n1;
  // if(n2 == 1)
  // {
  //     knum2.style.visibility = 'hidden';
  //     knum3.style.visibility = 'hidden';
  //     knum4.style.visibility = 'hidden';
  //     knum5.style.visibility = 'hidden';
  //     knum6.style.visibility = 'hidden';
  //     knum1.style.visibility = "visible";
  // }
  // if(n2 == 2)
  // {
  //     knum1.style.visibility = 'hidden';
  //     knum3.style.visibility = 'hidden';
  //     knum4.style.visibility = 'hidden';
  //     knum5.style.visibility = 'hidden';
  //     knum6.style.visibility = 'hidden';
  //     knum2.style.visibility = "visible";
  // }
  // if(n2 == 3)
  // {
  //     knum1.style.visibility = 'hidden';
  //     knum2.style.visibility = 'hidden';
  //     knum4.style.visibility = 'hidden';
  //     knum5.style.visibility = 'hidden';
  //     knum6.style.visibility = 'hidden';
  //     knum3.style.visibility = "visible";
  // }
  // if(n2 == 4)
  // {
  //     knum1.style.visibility = 'hidden';
  //     knum2.style.visibility = 'hidden';
  //     knum3.style.visibility = 'hidden';
  //     knum5.style.visibility = 'hidden';
  //     knum6.style.visibility = 'hidden';
  //     knum4.style.visibility = "visible";
  // }
  // if(n2 == 5)
  // {
  //     knum1.style.visibility = 'hidden';
  //     knum2.style.visibility = 'hidden';
  //     knum3.style.visibility = 'hidden';
  //     knum4.style.visibility = 'hidden';
  //     knum6.style.visibility = 'hidden';
  //     knum5.style.visibility = "visible";
  // }
  // if(n2 == 6)
  // {
  //     knum1.style.visibility = 'hidden';
  //     knum2.style.visibility = 'hidden';
  //     knum3.style.visibility = 'hidden';
  //     knum4.style.visibility = 'hidden';
  //     knum5.style.visibility = 'hidden';
  //     knum6.style.visibility = "visible";
  // }
}
const gameLudo = document.getElementById("ludoBoard");
const context = gameLudo.getContext("2d");
const width1 = gameLudo.width;
const height1 = gameLudo.height;
const unit = 25;

// Coin box
context.fillStyle = "#3c7781";
context.fillRect(0, 0, 75, 525);
context.fillStyle = "#3c7781";
context.fillRect(600, 0, 75, 525);

// Center board(center-square)
context.fillStyle = "#52e2fd";
context.fillRect(300, 225, 75, 75);
context.strokeStyle = "black";
context.strokeRect(300, 225, 75, 75);

function createBoard() {
  let topMountain = [
    { x: 300, y: 200 },
    { x: 300, y: 175 },
    { x: 300, y: 150 },
    { x: 300, y: 125 },
    { x: 300, y: 100 },
    { x: 300, y: 75 },
    { x: 325, y: 200 },
    { x: 325, y: 175 },
    { x: 325, y: 150 },
    { x: 325, y: 125 },
    { x: 325, y: 100 },
    { x: 325, y: 75 },
    { x: 350, y: 200 },
    { x: 350, y: 175 },
    { x: 350, y: 150 },
    { x: 350, y: 125 },
    { x: 350, y: 100 },
    { x: 350, y: 75 },
  ];
  context.fillStyle = "red";
  context.strokeStyle = "black";
  topMountain.forEach((mountpart) => {
    context.fillRect(mountpart.x, mountpart.y, unit, unit);
    context.strokeRect(mountpart.x, mountpart.y, unit, unit);
  });

  let bottomMountain = [
    { x: 300, y: 200 + 225 },
    { x: 300, y: 175 + 225 },
    { x: 300, y: 150 + 225 },
    { x: 300, y: 125 + 225 },
    { x: 300, y: 100 + 225 },
    { x: 300, y: 75 + 225 },
    { x: 325, y: 200 + 225 },
    { x: 325, y: 175 + 225 },
    { x: 325, y: 150 + 225 },
    { x: 325, y: 125 + 225 },
    { x: 325, y: 100 + 225 },
    { x: 325, y: 75 + 225 },
    { x: 350, y: 200 + 225 },
    { x: 350, y: 175 + 225 },
    { x: 350, y: 150 + 225 },
    { x: 350, y: 125 + 225 },
    { x: 350, y: 100 + 225 },
    { x: 350, y: 75 + 225 },
  ];
  context.fillStyle = "green";
  context.strokeStyle = "black";
  bottomMountain.forEach((mountpart) => {
    context.fillRect(mountpart.x, mountpart.y, unit, unit);
    context.strokeRect(mountpart.x, mountpart.y, unit, unit);
  });

  let leftMountain = [
    { x: 275, y: 225 },
    { x: 250, y: 225 },
    { x: 225, y: 225 },
    { x: 200, y: 225 },
    { x: 175, y: 225 },
    { x: 150, y: 225 },
    { x: 275, y: 250 },
    { x: 250, y: 250 },
    { x: 225, y: 250 },
    { x: 200, y: 250 },
    { x: 175, y: 250 },
    { x: 150, y: 250 },
    { x: 150, y: 275 },
    { x: 175, y: 275 },
    { x: 200, y: 275 },
    { x: 225, y: 275 },
    { x: 250, y: 275 },
    { x: 275, y: 275 },
  ];
  context.fillStyle = "yellow";
  context.strokeStyle = "black";
  leftMountain.forEach((mountpart) => {
    context.fillRect(mountpart.x, mountpart.y, unit, unit);
    context.strokeRect(mountpart.x, mountpart.y, unit, unit);
  });

  let rightMountain = [
    { x: 275 + 225, y: 225 },
    { x: 250 + 225, y: 225 },
    { x: 225 + 225, y: 225 },
    { x: 200 + 225, y: 225 },
    { x: 175 + 225, y: 225 },
    { x: 150 + 225, y: 225 },
    { x: 275 + 225, y: 250 },
    { x: 250 + 225, y: 250 },
    { x: 225 + 225, y: 250 },
    { x: 200 + 225, y: 250 },
    { x: 175 + 225, y: 250 },
    { x: 150 + 225, y: 250 },
    { x: 150 + 225, y: 275 },
    { x: 175 + 225, y: 275 },
    { x: 200 + 225, y: 275 },
    { x: 225 + 225, y: 275 },
    { x: 250 + 225, y: 275 },
    { x: 275 + 225, y: 275 },
  ];
  context.fillStyle = "blue";
  context.strokeStyle = "black";
  rightMountain.forEach((mountpart) => {
    context.fillRect(mountpart.x, mountpart.y, unit, unit);
    context.strokeRect(mountpart.x, mountpart.y, unit, unit);
  });
  // red triangle
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(300, 225);
  context.lineTo(375, 225);
  context.lineTo(337.5, 262.5);
  context.lineTo(300, 225);
  context.stroke();
  context.fillStyle = "red";
  context.fill();
  context.closePath();
  // blue triangle
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(375, 225);
  context.lineTo(375, 300);
  context.lineTo(337.5, 262.5);
  context.lineTo(375, 225);
  context.stroke();
  context.fillStyle = "blue";
  context.fill();
  context.closePath();
  // green triangle
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(300, 300);
  context.lineTo(375, 300);
  context.lineTo(337.5, 262.5);
  context.lineTo(300, 300);
  context.stroke();
  context.fillStyle = "green";
  context.fill();
  context.closePath();
  // yellow triangle
  context.beginPath();
  context.strokeStyle = "black";
  context.moveTo(300, 225);
  context.lineTo(300, 300);
  context.lineTo(337.5, 262.5);
  context.lineTo(300, 225);
  context.stroke();
  context.fillStyle = "yellow";
  context.fill();
  context.closePath();

  // mountain piece
  let mountainpoint = [
    // blue mountain
    { x: 500, y: 250 },
    { x: 375, y: 250 },
    // green mountain
    { x: 325, y: 300 },
    { x: 325, y: 425 },
    // yellow mountain
    { x: 275, y: 250 },
    { x: 150, y: 250 },
    // red mountain
    { x: 325, y: 200 },
    { x: 325, y: 75 },
  ];
  mountainpoint.forEach((mount) => {
    context.moveTo(mount.x, mount.y);
    context.lineTo(mount.x + 25, mount.y + 25);
    context.stroke();
    context.moveTo(mount.x, mount.y + 25);
    context.lineTo(mount.x + 25, mount.y);
    context.stroke();
  });

  // orange mountain
  let orangemountain = [
    { x: 275, y: 300 },
    { x: 375, y: 300 },
    { x: 275, y: 200 },
    { x: 375, y: 200 },
  ];

  orangemountain.forEach((orange) => {
    context.fillStyle = "aqua";
    context.strokeStyle = "black";
    context.fillRect(orange.x, orange.y, unit, unit);
    context.strokeRect(orange.x, orange.y, unit, unit);
    context.moveTo(orange.x, orange.y);
    context.lineTo(orange.x + 25, orange.y + 25);
    context.stroke();
    context.moveTo(orange.x, orange.y + 25);
    context.lineTo(orange.x + 25, orange.y);
    context.stroke();
  });
}
let white1 = { x: 312.5, y: 262.5 };
function no1() {
  context.beginPath();
  context.arc(white1.x, white1.y, 7.5, 0, 2 * Math.PI);
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "white";
  context.fill();
  context.closePath();
}
let white2 = { x: 312.5, y: 262.5 };
function no2() {
  context.beginPath();
  context.arc(white2.x, white2.y, 7.5, 0, 2 * Math.PI);
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "magenta";
  context.fill();
  context.closePath();
}
let white3 = { x: 312.5, y: 262.5 };
function no3() {
  context.beginPath();
  context.arc(white3.x, white3.y, 7.5, 0, 2 * Math.PI);
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "chartreuse";
  context.fill();
  context.closePath();
}
let white4 = { x: 312.5, y: 262.5 };
function no4() {
  context.beginPath();
  context.arc(white4.x, white4.y, 7.5, 0, 2 * Math.PI);
  context.strokeStyle = "black";
  context.stroke();
  context.fillStyle = "coral";
  context.fill();
  context.closePath();
}
let black1 = { x: 362.5, y: 262.5 };
function ko1() {
  context.beginPath();
  context.arc(black1.x, black1.y, 7.5, 0, 2 * Math.PI);
  context.strokeStyle = "white";
  context.stroke();
  context.fillStyle = "black";
  context.fill();
  context.closePath();
}
let black2 = { x: 362.5, y: 262.5 };
function ko2() {
  context.beginPath();
  context.arc(black2.x, black2.y, 7.5, 0, 2 * Math.PI);
  context.strokeStyle = "white";
  context.stroke();
  context.fillStyle = "cornflowerblue";
  context.fill();
  context.closePath();
}
let black3 = { x: 362.5, y: 262.5 };
function ko3() {
  context.beginPath();
  context.arc(black3.x, black3.y, 7.5, 0, 2 * Math.PI);
  context.strokeStyle = "white";
  context.stroke();
  context.fillStyle = "purple";
  context.fill();
  context.closePath();
}
let black4 = { x: 362.5, y: 262.5 };
function ko4() {
  context.beginPath();
  context.arc(black4.x, black4.y, 7.5, 0, 2 * Math.PI);
  context.strokeStyle = "white";
  context.stroke();
  context.fillStyle = "grey";
  context.fill();
  context.closePath();
}
createBoard();
no1();
no2();
no3();
no4();
ko1();
ko2();
ko3();
ko4();

const white_1 = document.querySelector(".white_1");
const white_2 = document.querySelector(".white_2");
const white_3 = document.querySelector(".white_3");
const white_4 = document.querySelector(".white_4");

const black_1 = document.querySelector(".black_1");
const black_2 = document.querySelector(".black_2");
const black_3 = document.querySelector(".black_3");
const black_4 = document.querySelector(".black_4");

// path of white
let whitePath = [
  { x: 300, y: 250 }, //starting point
  { x: 275, y: 250 },
  { x: 250, y: 250 },
  { x: 225, y: 250 },
  { x: 200, y: 250 },
  { x: 175, y: 250 },
  { x: 150, y: 250 }, //yellow center mountain
  { x: 150, y: 275 },
  { x: 175, y: 275 },
  { x: 200, y: 275 },
  { x: 225, y: 275 },
  { x: 250, y: 275 },
  { x: 275, y: 275 },
  { x: 275, y: 300 }, // corner left bottom
  { x: 300, y: 300 }, //green mountain start
  { x: 300, y: 325 },
  { x: 300, y: 350 },
  { x: 300, y: 375 },
  { x: 300, y: 400 },
  { x: 300, y: 425 },
  { x: 325, y: 425 }, //green mountain center
  { x: 350, y: 425 },
  { x: 350, y: 400 },
  { x: 350, y: 375 },
  { x: 350, y: 350 },
  { x: 350, y: 325 },
  { x: 350, y: 300 },
  { x: 375, y: 300 }, // corner right bottom
  { x: 375, y: 275 }, //blue mountain start
  { x: 400, y: 275 },
  { x: 425, y: 275 },
  { x: 450, y: 275 },
  { x: 475, y: 275 },
  { x: 500, y: 275 },
  { x: 500, y: 250 }, // blue mountain center
  { x: 500, y: 225 },
  { x: 475, y: 225 },
  { x: 450, y: 225 },
  { x: 425, y: 225 },
  { x: 400, y: 225 },
  { x: 375, y: 225 },
  { x: 375, y: 200 }, // corner right top
  { x: 350, y: 200 }, // red mountain start
  { x: 350, y: 175 },
  { x: 350, y: 150 },
  { x: 350, y: 125 },
  { x: 350, y: 100 },
  { x: 350, y: 75 },
  { x: 325, y: 75 }, // red mountain center
  { x: 300, y: 75 },
  { x: 300, y: 100 },
  { x: 300, y: 125 },
  { x: 300, y: 150 },
  { x: 300, y: 175 },
  { x: 300, y: 200 },
  { x: 275, y: 200 }, // corner left top
  { x: 275, y: 225 }, // yellow start
  { x: 250, y: 225 },
  { x: 225, y: 225 },
  { x: 200, y: 225 },
  { x: 175, y: 225 },
  { x: 150, y: 225 },
  { x: 325, y: 75 }, // red mountain center
  { x: 325, y: 100 },
  { x: 325, y: 125 },
  { x: 325, y: 150 },
  { x: 325, y: 175 },
  { x: 325, y: 200 },
  { x: 325, y: 225 },
];
let kill = 0;
function whitelastPath1() {
  createBoard();
  // corner left top(1)
  if (white1.x == 275 + 12.5 && white1.y == 200 + 12.5) {
    if (nk1 == 6) {
      white1.x = 150 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5) {
      white1.x = 175 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white1.x = 200 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white1.x = 225 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white1.x = 250 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 1) {
      white1.x = 275 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (2)
  if (white1.x == 275 + 12.5 && white1.y == 225 + 12.5) {
    if (nk1 == 6 && kill == 1) {
      white1.x = 325;
      white1.y = 100;
      nk1 = 0;
    }
    if (nk1 == 5) {
      white1.x = 150 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white1.x = 175 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white1.x = 200 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white1.x = 225 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 1) {
      white1.x = 250 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (3)
  if (white1.x == 250 + 12.5 && white1.y == 225 + 12.5) {
    if (nk1 == 1) {
      white1.x = 225 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white1.x = 200 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white1.x = 175 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white1.x = 150 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white1.x = 325;
      white1.y = 100;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white1.x = 325;
      white1.y = 125;
      nk1 = 0;
    }
  }
  // (4)
  if (white1.x == 225 + 12.5 && white1.y == 225 + 12.5) {
    if (nk1 == 1) {
      white1.x = 200 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white1.x = 175 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white1.x = 150 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white1.x = 325;
      white1.y = 100;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white1.x = 325;
      white1.y = 125;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white1.x = 325;
      white1.y = 150;
      nk1 = 0;
    }
  }
  // (5)
  if (white1.x == 200 + 12.5 && white1.y == 225 + 12.5) {
    if (nk1 == 1) {
      white1.x = 175 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white1.x = 150 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white1.x = 325;
      white1.y = 100;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white1.x = 325;
      white1.y = 125;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white1.x = 325;
      white1.y = 150;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white1.x = 325;
      white1.y = 175;
      nk1 = 0;
    }
  }
  // (6)
  if (white1.x == 175 + 12.5 && white1.y == 225 + 12.5) {
    if (nk1 == 1) {
      white1.x = 150 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white1.x = 325;
      white1.y = 100;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white1.x = 325;
      white1.y = 125;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white1.x = 325;
      white1.y = 150;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white1.x = 325;
      white1.y = 175;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white1.x = 325;
      white1.y = 200;
      nk1 = 0;
    }
  }
  // (7)
  if (white1.x == 150 + 12.5 && white1.y == 225 + 12.5) {
    if (nk1 == 1 && kill == 1) {
      white1.x = 325;
      white1.y = 100;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white1.x = 325;
      white1.y = 125;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white1.x = 325;
      white1.y = 150;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white1.x = 325;
      white1.y = 175;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white1.x = 325;
      white1.y = 200;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white1.x = 325;
      white1.y = 225;
      nk1 = 0;
    }
  }
  // (8)
  if (white1.x == 325 && white1.y == 100) {
    if (nk1 == 1 && kill == 1) {
      white1.x = 325;
      white1.y = 125;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white1.x = 325;
      white1.y = 150;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white1.x = 325;
      white1.y = 175;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white1.x = 325;
      white1.y = 200;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white1.x = 325;
      white1.y = 225;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white1.x = 325 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (9)
  if (white1.x == 325 && white1.y == 125) {
    if (nk1 == 1 && kill == 1) {
      white1.x = 325;
      white1.y = 150;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white1.x = 325;
      white1.y = 175;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white1.x = 325;
      white1.y = 200;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white1.x = 325;
      white1.y = 225;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white1.x = 325 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (10)
  if (white1.x == 325 && white1.y == 150) {
    if (nk1 == 1 && kill == 1) {
      white1.x = 325;
      white1.y = 175;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white1.x = 325;
      white1.y = 200;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white1.x = 325;
      white1.y = 225;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white1.x = 325 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (11)
  if (white1.x == 325 && white1.y == 175) {
    if (nk1 == 1 && kill == 1) {
      white1.x = 325;
      white1.y = 200;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white1.x = 325;
      white1.y = 225;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white1.x = 325 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (12)
  if (white1.x == 325 && white1.y == 200) {
    if (nk1 == 1 && kill == 1) {
      white1.x = 325;
      white1.y = 225;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white1.x = 325 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (13)
  if (white1.x == 325 && white1.y == 225) {
    if (nk1 == 1 && kill == 1) {
      white1.x = 325 + 12.5;
      white1.y = 225 + 12.5;
      nk1 = 0;
    }
  }

  if (
    (white1.x == 150 + 12.5 && white1.y == 250 + 12.5) ||
    (white1.x == 275 + 12.5 && white1.y == 300 + 12.5) ||
    (white1.x == 325 + 12.5 && white1.y == 425 + 12.5) ||
    (white1.x == 375 + 12.5 && white1.y == 300 + 12.5) ||
    (white1.x == 500 + 12.5 && white1.y == 250 + 12.5) ||
    (white1.x == 325 + 12.5 && white1.y == 75 + 12.5) ||
    (white1.x == 275 + 12.5 && white1.y == 200 + 12.5) ||
    (white1.x == 375 + 12.5 && white1.y == 200 + 12.5)
  ) {
    /*empty if statement */
  } else {
    // shot the coin
    if (white1.x == black1.x && white1.y == black1.y) {
      black1.x = 362.5;
      black1.y = 262.5;
      b1 = 0;
      blackOne[0] = 0;
      kill = 1;
    }
    if (white1.x == black2.x && white1.y == black2.y) {
      black2.x = 362.5;
      black2.y = 262.5;
      b2 = 0;
      blackOne[1] = 0;
      kill = 1;
    }
    if (white1.x == black3.x && white1.y == black3.y) {
      black3.x = 362.5;
      black3.y = 262.5;
      b3 = 0;
      blackOne[2] = 0;
      kill = 1;
    }
    if (white1.x == black4.x && white1.y == black4.y) {
      black4.x = 362.5;
      black4.y = 262.5;
      b4 = 0;
      blackOne[3] = 0;
      kill = 1;
    }
  }
  no1();
  no2();
  no3();
  no4();
  ko1();
  ko2();
  ko3();
  ko4();
}
function whitelastPath2() {
  createBoard();
  // corner left top
  // (1)
  if (white2.x == 275 + 12.5 && white2.y == 200 + 12.5) {
    if (nk1 == 6) {
      white2.x = 150 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5) {
      white2.x = 175 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white2.x = 200 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white2.x = 225 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white2.x = 250 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 1) {
      white2.x = 275 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (2)
  if (white2.x == 275 + 12.5 && white2.y == 225 + 12.5) {
    if (nk1 == 6 && kill == 1) {
      white2.x = 325;
      white2.y = 100;
      nk1 = 0;
    }
    if (nk1 == 5) {
      white2.x = 150 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white2.x = 175 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white2.x = 200 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white2.x = 225 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 1) {
      white2.x = 250 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (3)
  if (white2.x == 250 + 12.5 && white2.y == 225 + 12.5) {
    if (nk1 == 1) {
      white2.x = 225 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white2.x = 200 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white2.x = 175 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white2.x = 150 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white2.x = 325;
      white2.y = 100;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white2.x = 325;
      white2.y = 125;
      nk1 = 0;
    }
  }
  // (4)
  if (white2.x == 225 + 12.5 && white2.y == 225 + 12.5) {
    if (nk1 == 1) {
      white2.x = 200 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white2.x = 175 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white2.x = 150 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white2.x = 325;
      white2.y = 100;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white2.x = 325;
      white2.y = 125;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white2.x = 325;
      white2.y = 150;
      nk1 = 0;
    }
  }
  // (5)
  if (white2.x == 200 + 12.5 && white2.y == 225 + 12.5) {
    if (nk1 == 1) {
      white2.x = 175 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white2.x = 150 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white2.x = 325;
      white2.y = 100;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white2.x = 325;
      white2.y = 125;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white2.x = 325;
      white2.y = 150;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white2.x = 325;
      white2.y = 175;
      nk1 = 0;
    }
  }
  // (6)
  if (white2.x == 175 + 12.5 && white2.y == 225 + 12.5) {
    if (nk1 == 1) {
      white2.x = 150 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white2.x = 325;
      white2.y = 100;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white2.x = 325;
      white2.y = 125;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white2.x = 325;
      white2.y = 150;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white2.x = 325;
      white2.y = 175;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white2.x = 325;
      white2.y = 200;
      nk1 = 0;
    }
  }
  // (7)
  if (white2.x == 150 + 12.5 && white2.y == 225 + 12.5) {
    if (nk1 == 1 && kill == 1) {
      white2.x = 325;
      white2.y = 100;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white2.x = 325;
      white2.y = 125;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white2.x = 325;
      white2.y = 150;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white2.x = 325;
      white2.y = 175;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white2.x = 325;
      white2.y = 200;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white2.x = 325;
      white2.y = 225;
      nk1 = 0;
    }
  }
  // (8)
  if (white2.x == 325 && white2.y == 100) {
    if (nk1 == 1 && kill == 1) {
      white2.x = 325;
      white2.y = 125;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white2.x = 325;
      white2.y = 150;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white2.x = 325;
      white2.y = 175;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white2.x = 325;
      white2.y = 200;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white2.x = 325;
      white2.y = 225;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white2.x = 325 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (9)
  if (white2.x == 325 && white2.y == 125) {
    if (nk1 == 1 && kill == 1) {
      white2.x = 325;
      white2.y = 150;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white2.x = 325;
      white2.y = 175;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white2.x = 325;
      white2.y = 200;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white2.x = 325;
      white2.y = 225;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white2.x = 325 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (10)
  if (white2.x == 325 && white2.y == 150) {
    if (nk1 == 1 && kill == 1) {
      white2.x = 325;
      white2.y = 175;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white2.x = 325;
      white2.y = 200;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white2.x = 325;
      white2.y = 225;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white2.x = 325 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (11)
  if (white2.x == 325 && white2.y == 175) {
    if (nk1 == 1 && kill == 1) {
      white2.x = 325;
      white2.y = 200;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white2.x = 325;
      white2.y = 225;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white2.x = 325 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (12)
  if (white2.x == 325 && white2.y == 200) {
    if (nk1 == 1 && kill == 1) {
      white2.x = 325;
      white2.y = 225;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white2.x = 325 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (13)
  if (white2.x == 325 && white2.y == 225) {
    if (nk1 == 1 && kill == 1) {
      white2.x = 325 + 12.5;
      white2.y = 225 + 12.5;
      nk1 = 0;
    }
  }

  if (
    (white2.x == 150 + 12.5 && white2.y == 250 + 12.5) ||
    (white2.x == 275 + 12.5 && white2.y == 300 + 12.5) ||
    (white2.x == 325 + 12.5 && white2.y == 425 + 12.5) ||
    (white2.x == 375 + 12.5 && white2.y == 300 + 12.5) ||
    (white2.x == 500 + 12.5 && white2.y == 250 + 12.5) ||
    (white2.x == 325 + 12.5 && white2.y == 75 + 12.5) ||
    (white2.x == 275 + 12.5 && white2.y == 200 + 12.5) ||
    (white2.x == 375 + 12.5 && white2.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (white2.x == black1.x && white2.y == black1.y) {
      black1.x = 362.5;
      black1.y = 262.5;
      b1 = 0;
      blackOne[0] = 0;
      kill = 1;
    }
    if (white2.x == black2.x && white2.y == black2.y) {
      black2.x = 362.5;
      black2.y = 262.5;
      b2 = 0;
      blackOne[1] = 0;
      kill = 1;
    }
    if (white2.x == black3.x && white2.y == black3.y) {
      black3.x = 362.5;
      black3.y = 262.5;
      b3 = 0;
      blackOne[2] = 0;
      kill = 1;
    }
    if (white2.x == black4.x && white2.y == black4.y) {
      black4.x = 362.5;
      black4.y = 262.5;
      b4 = 0;
      blackOne[3] = 0;
      kill = 1;
    }
  }
  no1();
  no2();
  no3();
  no4();
  ko1();
  ko2();
  ko3();
  ko4();
}
function whitelastPath3() {
  createBoard();
  // corner left top
  // (1)
  if (white3.x == 275 + 12.5 && white3.y == 200 + 12.5) {
    if (nk1 == 6) {
      white3.x = 150 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5) {
      white3.x = 175 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white3.x = 200 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white3.x = 225 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white3.x = 250 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 1) {
      white3.x = 275 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (2)
  if (white3.x == 275 + 12.5 && white3.y == 225 + 12.5) {
    if (nk1 == 6 && kill == 1) {
      white3.x = 325;
      white3.y = 100;
      nk1 = 0;
    }
    if (nk1 == 5) {
      white3.x = 150 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white3.x = 175 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white3.x = 200 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white3.x = 225 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 1) {
      white3.x = 250 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (3)
  if (white3.x == 250 + 12.5 && white3.y == 225 + 12.5) {
    if (nk1 == 1) {
      white3.x = 225 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white3.x = 200 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white3.x = 175 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white3.x = 150 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white3.x = 325;
      white3.y = 100;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white3.x = 325;
      white3.y = 125;
      nk1 = 0;
    }
  }
  // (4)
  if (white3.x == 225 + 12.5 && white3.y == 225 + 12.5) {
    if (nk1 == 1) {
      white3.x = 200 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white3.x = 175 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white3.x = 150 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white3.x = 325;
      white3.y = 100;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white3.x = 325;
      white3.y = 125;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white3.x = 325;
      white3.y = 150;
      nk1 = 0;
    }
  }
  // (5)
  if (white3.x == 200 + 12.5 && white3.y == 225 + 12.5) {
    if (nk1 == 1) {
      white3.x = 175 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white3.x = 150 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white3.x = 325;
      white3.y = 100;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white3.x = 325;
      white3.y = 125;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white3.x = 325;
      white3.y = 150;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white3.x = 325;
      white3.y = 175;
      nk1 = 0;
    }
  }
  // (6)
  if (white3.x == 175 + 12.5 && white3.y == 225 + 12.5) {
    if (nk1 == 1) {
      white3.x = 150 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white3.x = 325;
      white3.y = 100;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white3.x = 325;
      white3.y = 125;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white3.x = 325;
      white3.y = 150;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white3.x = 325;
      white3.y = 175;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white3.x = 325;
      white3.y = 200;
      nk1 = 0;
    }
  }
  // (7)
  if (white3.x == 150 + 12.5 && white3.y == 225 + 12.5) {
    if (nk1 == 1 && kill == 1) {
      white3.x = 325;
      white3.y = 100;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white3.x = 325;
      white3.y = 125;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white3.x = 325;
      white3.y = 150;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white3.x = 325;
      white3.y = 175;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white3.x = 325;
      white3.y = 200;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white3.x = 325;
      white3.y = 225;
      nk1 = 0;
    }
  }
  // (8)
  if (white3.x == 325 && white3.y == 100) {
    if (nk1 == 1 && kill == 1) {
      white3.x = 325;
      white3.y = 125;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white3.x = 325;
      white3.y = 150;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white3.x = 325;
      white3.y = 175;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white3.x = 325;
      white3.y = 200;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white3.x = 325;
      white3.y = 225;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white3.x = 325 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (9)
  if (white3.x == 325 && white3.y == 125) {
    if (nk1 == 1 && kill == 1) {
      white3.x = 325;
      white3.y = 150;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white3.x = 325;
      white3.y = 175;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white3.x = 325;
      white3.y = 200;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white3.x = 325;
      white3.y = 225;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white3.x = 325 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (10)
  if (white3.x == 325 && white3.y == 150) {
    if (nk1 == 1 && kill == 1) {
      white3.x = 325;
      white3.y = 175;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white3.x = 325;
      white3.y = 200;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white3.x = 325;
      white3.y = 225;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white3.x = 325 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (11)
  if (white3.x == 325 && white3.y == 175) {
    if (nk1 == 1 && kill == 1) {
      white3.x = 325;
      white3.y = 200;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white3.x = 325;
      white3.y = 225;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white3.x = 325 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (12)
  if (white3.x == 325 && white3.y == 200) {
    if (nk1 == 1 && kill == 1) {
      white3.x = 325;
      white3.y = 225;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white3.x = 325 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (13)
  if (white3.x == 325 && white3.y == 225) {
    if (nk1 == 1 && kill == 1) {
      white3.x = 325 + 12.5;
      white3.y = 225 + 12.5;
      nk1 = 0;
    }
  }

  if (
    (white3.x == 150 + 12.5 && white3.y == 250 + 12.5) ||
    (white3.x == 275 + 12.5 && white3.y == 300 + 12.5) ||
    (white3.x == 325 + 12.5 && white3.y == 425 + 12.5) ||
    (white3.x == 375 + 12.5 && white3.y == 300 + 12.5) ||
    (white3.x == 500 + 12.5 && white3.y == 250 + 12.5) ||
    (white3.x == 325 + 12.5 && white3.y == 75 + 12.5) ||
    (white3.x == 275 + 12.5 && white3.y == 200 + 12.5) ||
    (white3.x == 375 + 12.5 && white3.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (white3.x == black1.x && white3.y == black1.y) {
      black1.x = 362.5;
      black1.y = 262.5;
      b1 = 0;
      blackOne[0] = 0;
      kill = 1;
    }
    if (white3.x == black2.x && white3.y == black2.y) {
      black2.x = 362.5;
      black2.y = 262.5;
      b2 = 0;
      blackOne[1] = 0;
      kill = 1;
    }
    if (white3.x == black3.x && white3.y == black3.y) {
      black3.x = 362.5;
      black3.y = 262.5;
      b3 = 0;
      blackOne[2] = 0;
      kill = 1;
    }
    if (white3.x == black4.x && white3.y == black4.y) {
      black4.x = 362.5;
      black4.y = 262.5;
      b4 = 0;
      blackOne[3] = 0;
      kill = 1;
    }
  }
  no1();
  no2();
  no3();
  no4();
  ko1();
  ko2();
  ko3();
  ko4();
}
function whitelastPath4() {
  createBoard();
  // corner left top
  // (1)
  if (white4.x == 275 + 12.5 && white4.y == 200 + 12.5) {
    if (nk1 == 6) {
      white4.x = 150 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5) {
      white4.x = 175 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white4.x = 200 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white4.x = 225 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white4.x = 250 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 1) {
      white4.x = 275 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (2)
  if (white4.x == 275 + 12.5 && white4.y == 225 + 12.5) {
    if (nk1 == 6 && kill == 1) {
      white4.x = 325;
      white4.y = 100;
      nk1 = 0;
    }
    if (nk1 == 5) {
      white4.x = 150 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white4.x = 175 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white4.x = 200 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white4.x = 225 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 1) {
      white4.x = 250 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (3)
  if (white4.x == 250 + 12.5 && white4.y == 225 + 12.5) {
    if (nk1 == 1) {
      white4.x = 225 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white4.x = 200 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white4.x = 175 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      white4.x = 150 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white4.x = 325;
      white4.y = 100;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white4.x = 325;
      white4.y = 125;
      nk1 = 0;
    }
  }
  // (4)
  if (white4.x == 225 + 12.5 && white4.y == 225 + 12.5) {
    if (nk1 == 1) {
      white4.x = 200 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white4.x = 175 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      white4.x = 150 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white4.x = 325;
      white4.y = 100;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white4.x = 325;
      white4.y = 125;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white4.x = 325;
      white4.y = 150;
      nk1 = 0;
    }
  }
  // (5)
  if (white4.x == 200 + 12.5 && white4.y == 225 + 12.5) {
    if (nk1 == 1) {
      white4.x = 175 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      white4.x = 150 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white4.x = 325;
      white4.y = 100;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white4.x = 325;
      white4.y = 125;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white4.x = 325;
      white4.y = 150;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white4.x = 325;
      white4.y = 175;
      nk1 = 0;
    }
  }
  // (6)
  if (white4.x == 175 + 12.5 && white4.y == 225 + 12.5) {
    if (nk1 == 1) {
      white4.x = 150 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white4.x = 325;
      white4.y = 100;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white4.x = 325;
      white4.y = 125;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white4.x = 325;
      white4.y = 150;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white4.x = 325;
      white4.y = 175;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white4.x = 325;
      white4.y = 200;
      nk1 = 0;
    }
  }
  // (7)
  if (white4.x == 150 + 12.5 && white4.y == 225 + 12.5) {
    if (nk1 == 1 && kill == 1) {
      white4.x = 325;
      white4.y = 100;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white4.x = 325;
      white4.y = 125;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white4.x = 325;
      white4.y = 150;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white4.x = 325;
      white4.y = 175;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white4.x = 325;
      white4.y = 200;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white4.x = 325;
      white4.y = 225;
      nk1 = 0;
    }
  }
  // (8)
  if (white4.x == 325 && white4.y == 100) {
    if (nk1 == 1 && kill == 1) {
      white4.x = 325;
      white4.y = 125;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white4.x = 325;
      white4.y = 150;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white4.x = 325;
      white4.y = 175;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white4.x = 325;
      white4.y = 200;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white4.x = 325;
      white4.y = 225;
      nk1 = 0;
    }
    if (nk1 == 6 && kill == 1) {
      white4.x = 325 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (9)
  if (white4.x == 325 && white4.y == 125) {
    if (nk1 == 1 && kill == 1) {
      white4.x = 325;
      white4.y = 150;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white4.x = 325;
      white4.y = 175;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white4.x = 325;
      white4.y = 200;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white4.x = 325;
      white4.y = 225;
      nk1 = 0;
    }
    if (nk1 == 5 && kill == 1) {
      white4.x = 325 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (10)
  if (white4.x == 325 && white4.y == 150) {
    if (nk1 == 1 && kill == 1) {
      white4.x = 325;
      white4.y = 175;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white4.x = 325;
      white4.y = 200;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white4.x = 325;
      white4.y = 225;
      nk1 = 0;
    }
    if (nk1 == 4 && kill == 1) {
      white4.x = 325 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (11)
  if (white4.x == 325 && white4.y == 175) {
    if (nk1 == 1 && kill == 1) {
      white4.x = 325;
      white4.y = 200;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white4.x = 325;
      white4.y = 225;
      nk1 = 0;
    }
    if (nk1 == 3 && kill == 1) {
      white4.x = 325 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (12)
  if (white4.x == 325 && white4.y == 200) {
    if (nk1 == 1 && kill == 1) {
      white4.x = 325;
      white4.y = 225;
      nk1 = 0;
    }
    if (nk1 == 2 && kill == 1) {
      white4.x = 325 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
  }
  // (13)
  if (white4.x == 325 && white4.y == 225) {
    if (nk1 == 1 && kill == 1) {
      white4.x = 325 + 12.5;
      white4.y = 225 + 12.5;
      nk1 = 0;
    }
  }

  if (
    (white4.x == 150 + 12.5 && white4.y == 250 + 12.5) ||
    (white4.x == 275 + 12.5 && white4.y == 300 + 12.5) ||
    (white4.x == 325 + 12.5 && white4.y == 425 + 12.5) ||
    (white4.x == 375 + 12.5 && white4.y == 300 + 12.5) ||
    (white4.x == 500 + 12.5 && white4.y == 250 + 12.5) ||
    (white4.x == 325 + 12.5 && white4.y == 75 + 12.5) ||
    (white4.x == 275 + 12.5 && white4.y == 200 + 12.5) ||
    (white4.x == 375 + 12.5 && white4.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (white4.x == black1.x && white4.y == black1.y) {
      black1.x = 362.5;
      black1.y = 262.5;
      b1 = 0;
      blackOne[0] = 0;
      kill = 1;
    }
    if (white4.x == black2.x && white4.y == black2.y) {
      black2.x = 362.5;
      black2.y = 262.5;
      b2 = 0;
      blackOne[1] = 0;
      kill = 1;
    }
    if (white4.x == black3.x && white4.y == black3.y) {
      black3.x = 362.5;
      black3.y = 262.5;
      b3 = 0;
      blackOne[2] = 0;
      kill = 1;
    }
    if (white4.x == black4.x && white4.y == black4.y) {
      black4.x = 362.5;
      black4.y = 262.5;
      b4 = 0;
      blackOne[3] = 0;
      kill = 1;
    }
  }
  no1();
  no2();
  no3();
  no4();
  ko1();
  ko2();
  ko3();
  ko4();
}

// path of black
let blackPath = [
  { x: 350, y: 250 }, //starting point
  { x: 375, y: 250 },
  { x: 400, y: 250 },
  { x: 425, y: 250 },
  { x: 450, y: 250 },
  { x: 475, y: 250 },
  { x: 500, y: 250 },
  { x: 500, y: 225 },
  { x: 475, y: 225 },
  { x: 450, y: 225 },
  { x: 425, y: 225 },
  { x: 400, y: 225 },
  { x: 375, y: 225 },
  { x: 375, y: 200 }, // corner right top
  { x: 350, y: 200 }, // red mountain start
  { x: 350, y: 175 },
  { x: 350, y: 150 },
  { x: 350, y: 125 },
  { x: 350, y: 100 },
  { x: 350, y: 75 },
  { x: 325, y: 75 }, // red mountain center
  { x: 300, y: 75 },
  { x: 300, y: 100 },
  { x: 300, y: 125 },
  { x: 300, y: 150 },
  { x: 300, y: 175 },
  { x: 300, y: 200 },
  { x: 275, y: 200 }, // corner left top
  { x: 275, y: 225 }, // yellow start
  { x: 250, y: 225 },
  { x: 225, y: 225 },
  { x: 200, y: 225 },
  { x: 175, y: 225 },
  { x: 150, y: 225 },
  { x: 150, y: 250 },
  { x: 150, y: 275 },
  { x: 175, y: 275 },
  { x: 200, y: 275 },
  { x: 225, y: 275 },
  { x: 250, y: 275 },
  { x: 275, y: 275 },
  { x: 275, y: 300 }, // corner left bottom
  { x: 300, y: 300 }, //green mountain start
  { x: 300, y: 325 },
  { x: 300, y: 350 },
  { x: 300, y: 375 },
  { x: 300, y: 400 },
  { x: 300, y: 425 },
  { x: 325, y: 425 }, //green mountain center
  { x: 350, y: 425 },
  { x: 350, y: 400 },
  { x: 350, y: 375 },
  { x: 350, y: 350 },
  { x: 350, y: 325 },
  { x: 350, y: 300 },
  { x: 375, y: 300 }, // corner right bottom
  { x: 375, y: 275 },
  { x: 400, y: 275 },
  { x: 425, y: 275 },
  { x: 450, y: 275 },
  { x: 475, y: 275 },
  { x: 500, y: 275 },
  { x: 500, y: 250 }, // blue mountain center
  { x: 475, y: 250 },
  { x: 450, y: 250 },
  { x: 425, y: 250 },
  { x: 400, y: 250 },
  { x: 375, y: 250 },
  { x: 350, y: 250 },
];

let B_kill = 0;
function blacklastPath1() {
  createBoard();
  // (1)
  if (black1.x == 375 + 12.5 && black1.y == 275 + 12.5) {
    if (nk1 == 1) {
      black1.x = 400 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black1.x = 425 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black1.x = 450 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      black1.x = 475 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5) {
      black1.x = 500 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black1.x = 325;
      black1.y = 425;
      nk1 = 0;
    }
  }
  // (2)
  if (black1.x == 400 + 12.5 && black1.y == 275 + 12.5) {
    if (nk1 == 1) {
      black1.x = 425 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black1.x = 450 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black1.x = 475 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      black1.x = 500 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black1.x = 325;
      black1.y = 425;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black1.x = 325;
      black1.y = 400;
      nk1 = 0;
    }
  }
  // (3)
  if (black1.x == 425 + 12.5 && black1.y == 275 + 12.5) {
    if (nk1 == 1) {
      black1.x = 450 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black1.x = 475 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black1.x = 500 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black1.x = 325;
      black1.y = 425;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black1.x = 325;
      black1.y = 400;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black1.x = 325;
      black1.y = 375;
      nk1 = 0;
    }
  }
  // (4)
  if (black1.x == 450 + 12.5 && black1.y == 275 + 12.5) {
    if (nk1 == 1) {
      black1.x = 475 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black1.x = 500 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black1.x = 325;
      black1.y = 425;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black1.x = 325;
      black1.y = 400;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black1.x = 325;
      black1.y = 375;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black1.x = 325;
      black1.y = 350;
      nk1 = 0;
    }
  }
  // (5)
  if (black1.x == 475 + 12.5 && black1.y == 275 + 12.5) {
    if (nk1 == 1) {
      black1.x = 500 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black1.x = 325;
      black1.y = 425;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black1.x = 325;
      black1.y = 400;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black1.x = 325;
      black1.y = 375;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black1.x = 325;
      black1.y = 350;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black1.x = 325;
      black1.y = 325;
      nk1 = 0;
    }
  }
  // (6)
  if (black1.x == 500 + 12.5 && black1.y == 275 + 12.5) {
    if (nk1 == 1 && B_kill == 1) {
      black1.x = 325;
      black1.y = 425;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black1.x = 325;
      black1.y = 400;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black1.x = 325;
      black1.y = 375;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black1.x = 325;
      black1.y = 350;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black1.x = 325;
      black1.y = 325;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black1.x = 325;
      black1.y = 300;
      nk1 = 0;
    }
  }
  // (7)
  if (black1.x == 325 && black1.y == 425) {
    if (nk1 == 1 && B_kill == 1) {
      black1.x = 325;
      black1.y = 400;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black1.x = 325;
      black1.y = 375;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black1.x = 325;
      black1.y = 350;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black1.x = 325;
      black1.y = 325;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black1.x = 325;
      black1.y = 300;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black1.x = 325 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (8)
  if (black1.x == 325 && black1.y == 400) {
    if (nk1 == 1 && B_kill == 1) {
      black1.x = 325;
      black1.y = 375;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black1.x = 325;
      black1.y = 350;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black1.x = 325;
      black1.y = 325;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black1.x = 325;
      black1.y = 300;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black1.x = 325 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (9)
  if (black1.x == 325 && black1.y == 375) {
    if (nk1 == 1 && B_kill == 1) {
      black1.x = 325;
      black1.y = 350;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black1.x = 325;
      black1.y = 325;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black1.x = 325;
      black1.y = 300;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black1.x = 325 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (10)
  if (black1.x == 325 && black1.y == 350) {
    if (nk1 == 1 && B_kill == 1) {
      black1.x = 325;
      black1.y = 325;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black1.x = 325;
      black1.y = 300;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black1.x = 325 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (11)
  if (black1.x == 325 && black1.y == 325) {
    if (nk1 == 1 && B_kill == 1) {
      black1.x = 325;
      black1.y = 300;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black1.x = 325 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (12)
  if (black1.x == 325 && black1.y == 300) {
    if (nk1 == 1 && B_kill == 1) {
      black1.x = 325 + 12.5;
      black1.y = 275 + 12.5;
      nk1 = 0;
    }
  }

  if (
    (black1.x == 150 + 12.5 && black1.y == 250 + 12.5) ||
    (black1.x == 275 + 12.5 && black1.y == 300 + 12.5) ||
    (black1.x == 325 + 12.5 && black1.y == 425 + 12.5) ||
    (black1.x == 375 + 12.5 && black1.y == 300 + 12.5) ||
    (black1.x == 500 + 12.5 && black1.y == 250 + 12.5) ||
    (black1.x == 325 + 12.5 && black1.y == 75 + 12.5) ||
    (black1.x == 275 + 12.5 && black1.y == 200 + 12.5) ||
    (black1.x == 375 + 12.5 && black1.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (black1.x == white1.x && black1.y == white1.y) {
      white1.x = 312.5;
      white1.y = 262.5;
      k1 = 0;
      one[0] = 0;
      B_kill = 1;
    }
    if (black1.x == white2.x && black1.y == white2.y) {
      white2.x = 312.5;
      white2.y = 262.5;
      k2 = 0;
      one[1] = 0;
      B_kill = 1;
    }
    if (black1.x == white3.x && black1.y == white3.y) {
      white3.x = 312.5;
      white3.y = 262.5;
      k3 = 0;
      one[2] = 0;
      B_kill = 1;
    }
    if (black1.x == white4.x && black1.y == white4.y) {
      white4.x = 312.5;
      white4.y = 262.5;
      k4 = 0;
      one[3] = 0;
      B_kill = 1;
    }
  }
  ko1();
  ko2();
  ko3();
  ko4();
  no1();
  no2();
  no3();
  no4();
}
function blacklastPath2() {
  createBoard();
  // (1)
  if (black2.x == 375 + 12.5 && black2.y == 275 + 12.5) {
    if (nk1 == 1) {
      black2.x = 400 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black2.x = 425 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black2.x = 450 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      black2.x = 475 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5) {
      black2.x = 500 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black2.x = 325;
      black2.y = 425;
      nk1 = 0;
    }
  }
  // (2)
  if (black2.x == 400 + 12.5 && black2.y == 275 + 12.5) {
    if (nk1 == 1) {
      black2.x = 425 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black2.x = 450 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black2.x = 475 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      black2.x = 500 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black2.x = 325;
      black2.y = 425;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black2.x = 325;
      black2.y = 400;
      nk1 = 0;
    }
  }
  // (3)
  if (black2.x == 425 + 12.5 && black2.y == 275 + 12.5) {
    if (nk1 == 1) {
      black2.x = 450 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black2.x = 475 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black2.x = 500 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black2.x = 325;
      black2.y = 425;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black2.x = 325;
      black2.y = 400;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black2.x = 325;
      black2.y = 375;
      nk1 = 0;
    }
  }
  // (4)
  if (black2.x == 450 + 12.5 && black2.y == 275 + 12.5) {
    if (nk1 == 1) {
      black2.x = 475 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black2.x = 500 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black2.x = 325;
      black2.y = 425;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black2.x = 325;
      black2.y = 400;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black2.x = 325;
      black2.y = 375;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black2.x = 325;
      black2.y = 350;
      nk1 = 0;
    }
  }
  // (5)
  if (black2.x == 475 + 12.5 && black2.y == 275 + 12.5) {
    if (nk1 == 1) {
      black2.x = 500 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black2.x = 325;
      black2.y = 425;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black2.x = 325;
      black2.y = 400;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black2.x = 325;
      black2.y = 375;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black2.x = 325;
      black2.y = 350;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black2.x = 325;
      black2.y = 325;
      nk1 = 0;
    }
  }
  // (6)
  if (black2.x == 500 + 12.5 && black2.y == 275 + 12.5) {
    if (nk1 == 1 && B_kill == 1) {
      black2.x = 325;
      black2.y = 425;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black2.x = 325;
      black2.y = 400;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black2.x = 325;
      black2.y = 375;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black2.x = 325;
      black2.y = 350;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black2.x = 325;
      black2.y = 325;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black2.x = 325;
      black2.y = 300;
      nk1 = 0;
    }
  }
  // (7)
  if (black2.x == 325 && black2.y == 425) {
    if (nk1 == 1 && B_kill == 1) {
      black2.x = 325;
      black2.y = 400;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black2.x = 325;
      black2.y = 375;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black2.x = 325;
      black2.y = 350;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black2.x = 325;
      black2.y = 325;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black2.x = 325;
      black2.y = 300;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black2.x = 325 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (8)
  if (black2.x == 325 && black2.y == 400) {
    if (nk1 == 1 && B_kill == 1) {
      black2.x = 325;
      black2.y = 375;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black2.x = 325;
      black2.y = 350;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black2.x = 325;
      black2.y = 325;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black2.x = 325;
      black2.y = 300;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black2.x = 325 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (9)
  if (black2.x == 325 && black2.y == 375) {
    if (nk1 == 1 && B_kill == 1) {
      black2.x = 325;
      black2.y = 350;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black2.x = 325;
      black2.y = 325;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black2.x = 325;
      black2.y = 300;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black2.x = 325 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (10)
  if (black2.x == 325 && black2.y == 350) {
    if (nk1 == 1 && B_kill == 1) {
      black2.x = 325;
      black2.y = 325;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black2.x = 325;
      black2.y = 300;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black2.x = 325 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (11)
  if (black2.x == 325 && black2.y == 325) {
    if (nk1 == 1 && B_kill == 1) {
      black2.x = 325;
      black2.y = 300;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black2.x = 325 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (12)
  if (black2.x == 325 && black2.y == 300) {
    if (nk1 == 1 && B_kill == 1) {
      black2.x = 325 + 12.5;
      black2.y = 275 + 12.5;
      nk1 = 0;
    }
  }

  if (
    (black2.x == 150 + 12.5 && black2.y == 250 + 12.5) ||
    (black2.x == 275 + 12.5 && black2.y == 300 + 12.5) ||
    (black2.x == 325 + 12.5 && black2.y == 425 + 12.5) ||
    (black2.x == 375 + 12.5 && black2.y == 300 + 12.5) ||
    (black2.x == 500 + 12.5 && black2.y == 250 + 12.5) ||
    (black2.x == 325 + 12.5 && black2.y == 75 + 12.5) ||
    (black2.x == 275 + 12.5 && black2.y == 200 + 12.5) ||
    (black2.x == 375 + 12.5 && black2.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (black2.x == white1.x && black2.y == white1.y) {
      white1.x = 312.5;
      white1.y = 262.5;
      k1 = 0;
      one[0] = 0;
      B_kill = 1;
    }
    if (black2.x == white2.x && black2.y == white2.y) {
      white2.x = 312.5;
      white2.y = 262.5;
      k2 = 0;
      one[1] = 0;
      B_kill = 1;
    }
    if (black2.x == white3.x && black2.y == white3.y) {
      white3.x = 312.5;
      white3.y = 262.5;
      k3 = 0;
      one[2] = 0;
      B_kill = 1;
    }
    if (black2.x == white4.x && black2.y == white4.y) {
      white4.x = 312.5;
      white4.y = 262.5;
      k4 = 0;
      one[3] = 0;
      B_kill = 1;
    }
  }
  ko1();
  ko2();
  ko3();
  ko4();
  no1();
  no2();
  no3();
  no4();
}
function blacklastPath3() {
  createBoard();
  // (1)
  if (black3.x == 375 + 12.5 && black3.y == 275 + 12.5) {
    if (nk1 == 1) {
      black3.x = 400 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black3.x = 425 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black3.x = 450 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      black3.x = 475 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5) {
      black3.x = 500 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black3.x = 325;
      black3.y = 425;
      nk1 = 0;
    }
  }
  // (2)
  if (black3.x == 400 + 12.5 && black3.y == 275 + 12.5) {
    if (nk1 == 1) {
      black3.x = 425 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black3.x = 450 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black3.x = 475 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      black3.x = 500 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black3.x = 325;
      black3.y = 425;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black3.x = 325;
      black3.y = 400;
      nk1 = 0;
    }
  }
  // (3)
  if (black3.x == 425 + 12.5 && black3.y == 275 + 12.5) {
    if (nk1 == 1) {
      black3.x = 450 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black3.x = 475 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black3.x = 500 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black3.x = 325;
      black3.y = 425;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black3.x = 325;
      black3.y = 400;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black3.x = 325;
      black3.y = 375;
      nk1 = 0;
    }
  }
  // (4)
  if (black3.x == 450 + 12.5 && black3.y == 275 + 12.5) {
    if (nk1 == 1) {
      black3.x = 475 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black3.x = 500 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black3.x = 325;
      black3.y = 425;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black3.x = 325;
      black3.y = 400;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black3.x = 325;
      black3.y = 375;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black3.x = 325;
      black3.y = 350;
      nk1 = 0;
    }
  }
  // (5)
  if (black3.x == 475 + 12.5 && black3.y == 275 + 12.5) {
    if (nk1 == 1) {
      black3.x = 500 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black3.x = 325;
      black3.y = 425;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black3.x = 325;
      black3.y = 400;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black3.x = 325;
      black3.y = 375;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black3.x = 325;
      black3.y = 350;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black3.x = 325;
      black3.y = 325;
      nk1 = 0;
    }
  }
  // (6)
  if (black3.x == 500 + 12.5 && black3.y == 275 + 12.5) {
    if (nk1 == 1 && B_kill == 1) {
      black3.x = 325;
      black3.y = 425;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black3.x = 325;
      black3.y = 400;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black3.x = 325;
      black3.y = 375;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black3.x = 325;
      black3.y = 350;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black3.x = 325;
      black3.y = 325;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black3.x = 325;
      black3.y = 300;
      nk1 = 0;
    }
  }
  // (7)
  if (black3.x == 325 && black3.y == 425) {
    if (nk1 == 1 && B_kill == 1) {
      black3.x = 325;
      black3.y = 400;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black3.x = 325;
      black3.y = 375;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black3.x = 325;
      black3.y = 350;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black3.x = 325;
      black3.y = 325;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black3.x = 325;
      black3.y = 300;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black3.x = 325 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (8)
  if (black3.x == 325 && black3.y == 400) {
    if (nk1 == 1 && B_kill == 1) {
      black3.x = 325;
      black3.y = 375;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black3.x = 325;
      black3.y = 350;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black3.x = 325;
      black3.y = 325;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black3.x = 325;
      black3.y = 300;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black3.x = 325 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (9)
  if (black3.x == 325 && black3.y == 375) {
    if (nk1 == 1 && B_kill == 1) {
      black3.x = 325;
      black3.y = 350;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black3.x = 325;
      black3.y = 325;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black3.x = 325;
      black3.y = 300;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black3.x = 325 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (10)
  if (black3.x == 325 && black3.y == 350) {
    if (nk1 == 1 && B_kill == 1) {
      black3.x = 325;
      black3.y = 325;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black3.x = 325;
      black3.y = 300;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black3.x = 325 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (11)
  if (black3.x == 325 && black3.y == 325) {
    if (nk1 == 1 && B_kill == 1) {
      black3.x = 325;
      black3.y = 300;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black3.x = 325 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (12)
  if (black3.x == 325 && black3.y == 300) {
    if (nk1 == 1 && B_kill == 1) {
      black3.x = 325 + 12.5;
      black3.y = 275 + 12.5;
      nk1 = 0;
    }
  }

  if (
    (black3.x == 150 + 12.5 && black3.y == 250 + 12.5) ||
    (black3.x == 275 + 12.5 && black3.y == 300 + 12.5) ||
    (black3.x == 325 + 12.5 && black3.y == 425 + 12.5) ||
    (black3.x == 375 + 12.5 && black3.y == 300 + 12.5) ||
    (black3.x == 500 + 12.5 && black3.y == 250 + 12.5) ||
    (black3.x == 325 + 12.5 && black3.y == 75 + 12.5) ||
    (black3.x == 275 + 12.5 && black3.y == 200 + 12.5) ||
    (black3.x == 375 + 12.5 && black3.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (black3.x == white1.x && black3.y == white1.y) {
      white1.x = 312.5;
      white1.y = 262.5;
      k1 = 0;
      one[0] = 0;
      B_kill = 1;
    }
    if (black3.x == white2.x && black3.y == white2.y) {
      white2.x = 312.5;
      white2.y = 262.5;
      k2 = 0;
      one[1] = 0;
      B_kill = 1;
    }
    if (black3.x == white3.x && black3.y == white3.y) {
      white3.x = 312.5;
      white3.y = 262.5;
      k3 = 0;
      one[2] = 0;
      B_kill = 1;
    }
    if (black3.x == white4.x && black3.y == white4.y) {
      white4.x = 312.5;
      white4.y = 262.5;
      k4 = 0;
      one[3] = 0;
      B_kill = 1;
    }
  }
  ko1();
  ko2();
  ko3();
  ko4();
  no1();
  no2();
  no3();
  no4();
}
function blacklastPath4() {
  createBoard();
  // (1)
  if (black4.x == 375 + 12.5 && black4.y == 275 + 12.5) {
    if (nk1 == 1) {
      black4.x = 400 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black4.x = 425 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black4.x = 450 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      black4.x = 475 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5) {
      black4.x = 500 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black4.x = 325;
      black4.y = 425;
      nk1 = 0;
    }
  }
  // (2)
  if (black4.x == 400 + 12.5 && black4.y == 275 + 12.5) {
    if (nk1 == 1) {
      black4.x = 425 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black4.x = 450 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black4.x = 475 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4) {
      black4.x = 500 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black4.x = 325;
      black4.y = 425;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black4.x = 325;
      black4.y = 400;
      nk1 = 0;
    }
  }
  // (3)
  if (black4.x == 425 + 12.5 && black4.y == 275 + 12.5) {
    if (nk1 == 1) {
      black4.x = 450 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black4.x = 475 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3) {
      black4.x = 500 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black4.x = 325;
      black4.y = 425;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black4.x = 325;
      black4.y = 400;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black4.x = 325;
      black4.y = 375;
      nk1 = 0;
    }
  }
  // (4)
  if (black4.x == 450 + 12.5 && black4.y == 275 + 12.5) {
    if (nk1 == 1) {
      black4.x = 475 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2) {
      black4.x = 500 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black4.x = 325;
      black4.y = 425;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black4.x = 325;
      black4.y = 400;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black4.x = 325;
      black4.y = 375;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black4.x = 325;
      black4.y = 350;
      nk1 = 0;
    }
  }
  // (5)
  if (black4.x == 475 + 12.5 && black4.y == 275 + 12.5) {
    if (nk1 == 1) {
      black4.x = 500 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black4.x = 325;
      black4.y = 425;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black4.x = 325;
      black4.y = 400;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black4.x = 325;
      black4.y = 375;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black4.x = 325;
      black4.y = 350;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black4.x = 325;
      black4.y = 325;
      nk1 = 0;
    }
  }
  // (6)
  if (black4.x == 500 + 12.5 && black4.y == 275 + 12.5) {
    if (nk1 == 1 && B_kill == 1) {
      black4.x = 325;
      black4.y = 425;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black4.x = 325;
      black4.y = 400;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black4.x = 325;
      black4.y = 375;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black4.x = 325;
      black4.y = 350;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black4.x = 325;
      black4.y = 325;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black4.x = 325;
      black4.y = 300;
      nk1 = 0;
    }
  }
  // (7)
  if (black4.x == 325 && black4.y == 425) {
    if (nk1 == 1 && B_kill == 1) {
      black4.x = 325;
      black4.y = 400;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black4.x = 325;
      black4.y = 375;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black4.x = 325;
      black4.y = 350;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black4.x = 325;
      black4.y = 325;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black4.x = 325;
      black4.y = 300;
      nk1 = 0;
    }
    if (nk1 == 6 && B_kill == 1) {
      black4.x = 325 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (8)
  if (black4.x == 325 && black4.y == 400) {
    if (nk1 == 1 && B_kill == 1) {
      black4.x = 325;
      black4.y = 375;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black4.x = 325;
      black4.y = 350;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black4.x = 325;
      black4.y = 325;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black4.x = 325;
      black4.y = 300;
      nk1 = 0;
    }
    if (nk1 == 5 && B_kill == 1) {
      black4.x = 325 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (9)
  if (black4.x == 325 && black4.y == 375) {
    if (nk1 == 1 && B_kill == 1) {
      black4.x = 325;
      black4.y = 350;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black4.x = 325;
      black4.y = 325;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black4.x = 325;
      black4.y = 300;
      nk1 = 0;
    }
    if (nk1 == 4 && B_kill == 1) {
      black4.x = 325 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (10)
  if (black4.x == 325 && black4.y == 350) {
    if (nk1 == 1 && B_kill == 1) {
      black4.x = 325;
      black4.y = 325;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black4.x = 325;
      black4.y = 300;
      nk1 = 0;
    }
    if (nk1 == 3 && B_kill == 1) {
      black4.x = 325 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (11)
  if (black4.x == 325 && black4.y == 325) {
    if (nk1 == 1 && B_kill == 1) {
      black4.x = 325;
      black4.y = 300;
      nk1 = 0;
    }
    if (nk1 == 2 && B_kill == 1) {
      black4.x = 325 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
  }
  // (12)
  if (black4.x == 325 && black4.y == 300) {
    if (nk1 == 1 && B_kill == 1) {
      black4.x = 325 + 12.5;
      black4.y = 275 + 12.5;
      nk1 = 0;
    }
  }

  if (
    (black4.x == 150 + 12.5 && black4.y == 250 + 12.5) ||
    (black4.x == 275 + 12.5 && black4.y == 300 + 12.5) ||
    (black4.x == 325 + 12.5 && black4.y == 425 + 12.5) ||
    (black4.x == 375 + 12.5 && black4.y == 300 + 12.5) ||
    (black4.x == 500 + 12.5 && black4.y == 250 + 12.5) ||
    (black4.x == 325 + 12.5 && black4.y == 75 + 12.5) ||
    (black4.x == 275 + 12.5 && black4.y == 200 + 12.5) ||
    (black4.x == 375 + 12.5 && black4.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (black4.x == white1.x && black4.y == white1.y) {
      white1.x = 312.5;
      white1.y = 262.5;
      k1 = 0;
      one[0] = 0;
      B_kill = 1;
    }
    if (black4.x == white2.x && black4.y == white2.y) {
      white2.x = 312.5;
      white2.y = 262.5;
      k2 = 0;
      one[1] = 0;
      B_kill = 1;
    }
    if (black4.x == white3.x && black4.y == white3.y) {
      white3.x = 312.5;
      white3.y = 262.5;
      k3 = 0;
      one[2] = 0;
      B_kill = 1;
    }
    if (black4.x == white4.x && black4.y == white4.y) {
      white4.x = 312.5;
      white4.y = 262.5;
      k4 = 0;
      one[3] = 0;
      B_kill = 1;
    }
  }
  ko1();
  ko2();
  ko3();
  ko4();
  no1();
  no2();
  no3();
  no4();
}

let one = [0, 0, 0, 0];
function dhaayam1() {
  if (nk1 == 1) {
    if (white1.x == 312.5 && white1.y == 262.5) {
      one[0] = 1;
    }
  }
}
function dhaayam2() {
  if (nk1 == 1) {
    if (white1.x != 312.5 || (white1.y != 262.5 && co2 != 0)) {
      one[1] = 1;
    }
  }
}
function dhaayam3() {
  if (nk1 == 1) {
    if (white2.x != 312.5 || (white2.y != 262.5 && co3 != 0)) {
      one[2] = 1;
    }
  }
}
function dhaayam4() {
  if (nk1 == 1) {
    if (white3.x != 312.5 || (white3.y != 262.5 && co4 != 0)) {
      one[3] = 1;
    }
  }
}

let blackOne = [0, 0, 0, 0];
function dhaayam10() {
  if (nk1 == 1) {
    if (black1.x == 362.5 && black1.y == 262.5) {
      blackOne[0] = 1;
    }
  }
}
function dhaayam20() {
  if (nk1 == 1) {
    if (black1.x != 312.5 && do2 != 0) {
      blackOne[1] = 1;
    }
  }
}
function dhaayam30() {
  if (nk1 == 1) {
    if ((black2.x != 362.5 || black2.y) != 262.5 && do3 != 0) {
      blackOne[2] = 1;
    }
  }
}
function dhaayam40() {
  if (nk1 == 1) {
    if (black3.x != 362.5 || (black3.y != 262.5 && do4 != 0)) {
      blackOne[3] = 1;
    }
  }
}

let k1 = 0;
let k2 = 0;
let k3 = 0;
let k4 = 0;
let co2 = 0;
let co3 = 0;
let co4 = 0;
white_1.addEventListener("click", move10);
function move10() {
  dhaayam1();

  if (one[0] == 1 && k1 <= 55) {
    move1();
  }
  if (one[0] == 1 && k1 > 55) {
    whitelastPath1();
  }
}
function move1() {
  createBoard();
  k1 = k1 + nk1;
  nk1 = 0;
  white1.x = whitePath[k1].x + 12.5;
  white1.y = whitePath[k1].y + 12.5;
  if (
    (white1.x == 150 + 12.5 && white1.y == 250 + 12.5) ||
    (white1.x == 275 + 12.5 && white1.y == 300 + 12.5) ||
    (white1.x == 325 + 12.5 && white1.y == 425 + 12.5) ||
    (white1.x == 375 + 12.5 && white1.y == 300 + 12.5) ||
    (white1.x == 500 + 12.5 && white1.y == 250 + 12.5) ||
    (white1.x == 325 + 12.5 && white1.y == 75 + 12.5) ||
    (white1.x == 275 + 12.5 && white1.y == 200 + 12.5) ||
    (white1.x == 375 + 12.5 && white1.y == 200 + 12.5)
  ) {
  } else {
    // shot the coin
    if (white1.x == black1.x && white1.y == black1.y) {
      black1.x = 362.5;
      black1.y = 262.5;
      b1 = 0;
      blackOne[0] = 0;
      kill = 1;
    }
    if (white1.x == black2.x && white1.y == black2.y) {
      black2.x = 362.5;
      black2.y = 262.5;
      b2 = 0;
      blackOne[1] = 0;
      kill = 1;
    }
    if (white1.x == black3.x && white1.y == black3.y) {
      black3.x = 362.5;
      black3.y = 262.5;
      b3 = 0;
      blackOne[2] = 0;
      kill = 1;
    }
    if (white1.x == black4.x && white1.y == black4.y) {
      black4.x = 362.5;
      black4.y = 262.5;
      b4 = 0;
      blackOne[3] = 0;
      kill = 1;
    }
  }

  no1();
  no2();
  no3();
  no4();
  ko1();
  ko2();
  ko3();
  ko4();
}

white_2.addEventListener("click", move20);
function move20() {
  co2 = co2 + 1;
  dhaayam2();
  if (one[1] == 1 && k2 <= 55) {
    move2();
  }
  if (one[1] == 1 && k2 > 55) {
    whitelastPath2();
  }
}
function move2() {
  createBoard();
  k2 = k2 + nk1;
  nk1 = 0;
  white2.x = whitePath[k2].x + 12.5;
  white2.y = whitePath[k2].y + 12.5;

  if (
    (white2.x == 150 + 12.5 && white2.y == 250 + 12.5) ||
    (white2.x == 275 + 12.5 && white2.y == 300 + 12.5) ||
    (white2.x == 325 + 12.5 && white2.y == 425 + 12.5) ||
    (white2.x == 375 + 12.5 && white2.y == 300 + 12.5) ||
    (white2.x == 500 + 12.5 && white2.y == 250 + 12.5) ||
    (white2.x == 325 + 12.5 && white2.y == 75 + 12.5) ||
    (white2.x == 275 + 12.5 && white2.y == 200 + 12.5) ||
    (white2.x == 375 + 12.5 && white2.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (white2.x == black1.x && white2.y == black1.y) {
      black1.x = 362.5;
      black1.y = 262.5;
      b1 = 0;
      blackOne[0] = 0;
      kill = 1;
    }
    if (white2.x == black2.x && white2.y == black2.y) {
      black2.x = 362.5;
      black2.y = 262.5;
      b2 = 0;
      blackOne[1] = 0;
      kill = 1;
    }
    if (white2.x == black3.x && white2.y == black3.y) {
      black3.x = 362.5;
      black3.y = 262.5;
      b3 = 0;
      blackOne[2] = 0;
      kill = 1;
    }
    if (white2.x == black4.x && white2.y == black4.y) {
      black4.x = 362.5;
      black4.y = 262.5;
      b4 = 0;
      blackOne[3] = 0;
      kill = 1;
    }
  }
  no1();
  no2();
  no3();
  no4();
  ko1();
  ko2();
  ko3();
  ko4();
}

white_3.addEventListener("click", move30);
function move30() {
  co3 = co3 + 1;
  dhaayam3();
  if (one[2] == 1 && k3 <= 55) {
    move3();
  }
  if (one[2] == 1 && k3 > 55) {
    whitelastPath3();
  }
}
function move3() {
  createBoard();
  k3 = k3 + nk1;
  nk1 = 0;
  white3.x = whitePath[k3].x + 12.5;
  white3.y = whitePath[k3].y + 12.5;

  if (
    (white3.x == 150 + 12.5 && white3.y == 250 + 12.5) ||
    (white3.x == 275 + 12.5 && white3.y == 300 + 12.5) ||
    (white3.x == 325 + 12.5 && white3.y == 425 + 12.5) ||
    (white3.x == 375 + 12.5 && white3.y == 300 + 12.5) ||
    (white3.x == 500 + 12.5 && white3.y == 250 + 12.5) ||
    (white3.x == 325 + 12.5 && white3.y == 75 + 12.5) ||
    (white3.x == 275 + 12.5 && white3.y == 200 + 12.5) ||
    (white3.x == 375 + 12.5 && white3.y == 200 + 12.5)
  ) {
  } else {
    if (white3.x == black1.x && white3.y == black1.y) {
      black1.x = 362.5;
      black1.y = 262.5;
      b1 = 0;
      blackOne[0] = 0;
      kill = 1;
    }
    if (white3.x == black2.x && white3.y == black2.y) {
      black2.x = 362.5;
      black2.y = 262.5;
      b2 = 0;
      blackOne[1] = 0;
      kill = 1;
    }
    if (white3.x == black3.x && white3.y == black3.y) {
      black3.x = 362.5;
      black3.y = 262.5;
      b3 = 0;
      blackOne[2] = 0;
      kill = 1;
    }
    if (white3.x == black4.x && white3.y == black4.y) {
      black4.x = 362.5;
      black4.y = 262.5;
      b4 = 0;
      blackOne[3] = 0;
      kill = 1;
    }
  }

  no1();
  no2();
  no3();
  no4();
  ko1();
  ko2();
  ko3();
  ko4();
}

white_4.addEventListener("click", move40);
function move40() {
  co4 = co4 + 1;
  dhaayam4();
  if (one[3] == 1 && k4 <= 55) {
    move4();
  }
  if (one[3] == 1 && k4 > 55) {
    whitelastPath4();
  }
}
function move4() {
  createBoard();
  k4 = k4 + nk1;
  nk1 = 0;
  white4.x = whitePath[k4].x + 12.5;
  white4.y = whitePath[k4].y + 12.5;

  if (
    (white4.x == 150 + 12.5 && white4.y == 250 + 12.5) ||
    (white4.x == 275 + 12.5 && white4.y == 300 + 12.5) ||
    (white4.x == 325 + 12.5 && white4.y == 425 + 12.5) ||
    (white4.x == 375 + 12.5 && white4.y == 300 + 12.5) ||
    (white4.x == 500 + 12.5 && white4.y == 250 + 12.5) ||
    (white4.x == 325 + 12.5 && white4.y == 75 + 12.5) ||
    (white4.x == 275 + 12.5 && white4.y == 200 + 12.5) ||
    (white4.x == 375 + 12.5 && white4.y == 200 + 12.5)
  ) {
  } else {
    if (white4.x == black1.x && white4.y == black1.y) {
      black1.x = 362.5;
      black1.y = 262.5;
      b1 = 0;
      blackOne[0] = 0;
      kill = 1;
    }
    if (white4.x == black2.x && white4.y == black2.y) {
      black2.x = 362.5;
      black2.y = 262.5;
      b2 = 0;
      blackOne[1] = 0;
      kill = 1;
    }
    if (white4.x == black3.x && white4.y == black3.y) {
      black3.x = 362.5;
      black3.y = 262.5;
      b3 = 0;
      blackOne[2] = 0;
      kill = 1;
    }
    if (white4.x == black4.x && white4.y == black4.y) {
      black4.x = 362.5;
      black4.y = 262.5;
      b4 = 0;
      blackOne[3] = 0;
      kill = 1;
    }
  }
  no1();
  no2();
  no3();
  no4();
  ko1();
  ko2();
  ko3();
  ko4();
}

let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;
let do2 = 0;
let do3 = 0;
let do4 = 0;

// black coins

black_1.addEventListener("click", blackMove10);
function blackMove10() {
  dhaayam10();
  if (blackOne[0] == 1 && b1 <= 55) {
    blackMove1();
  }
  if (blackOne[0] == 1 && b1 > 55) {
    blacklastPath1();
  }
}
function blackMove1() {
  createBoard();
  b1 = b1 + nk1;
  nk1 = 0;
  black1.x = blackPath[b1].x + 12.5;
  black1.y = blackPath[b1].y + 12.5;

  if (
    (black1.x == 150 + 12.5 && black1.y == 250 + 12.5) ||
    (black1.x == 275 + 12.5 && black1.y == 300 + 12.5) ||
    (black1.x == 325 + 12.5 && black1.y == 425 + 12.5) ||
    (black1.x == 375 + 12.5 && black1.y == 300 + 12.5) ||
    (black1.x == 500 + 12.5 && black1.y == 250 + 12.5) ||
    (black1.x == 325 + 12.5 && black1.y == 75 + 12.5) ||
    (black1.x == 275 + 12.5 && black1.y == 200 + 12.5) ||
    (black1.x == 375 + 12.5 && black1.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (black1.x == white1.x && black1.y == white1.y) {
      white1.x = 312.5;
      white1.y = 262.5;
      k1 = 0;
      one[0] = 0;
      B_kill = 1;
    }
    if (black1.x == white2.x && black1.y == white2.y) {
      white2.x = 312.5;
      white2.y = 262.5;
      k2 = 0;
      one[1] = 0;
      B_kill = 1;
    }
    if (black1.x == white3.x && black1.y == white3.y) {
      white3.x = 312.5;
      white3.y = 262.5;
      k3 = 0;
      one[2] = 0;
      B_kill = 1;
    }
    if (black1.x == white4.x && black1.y == white4.y) {
      white4.x = 312.5;
      white4.y = 262.5;
      k4 = 0;
      one[3] = 0;
      B_kill = 1;
    }
  }
  ko1();
  ko2();
  ko3();
  ko4();
  no1();
  no2();
  no3();
  no4();
}

black_2.addEventListener("click", blackMove20);
function blackMove20() {
  do2 = do2 + 1;
  dhaayam20();
  if (blackOne[1] == 1 && b2 <= 55) {
    blackMove2();
  }
  if (blackOne[1] == 1 && b2 > 55) {
    blacklastPath2();
  }
}
function blackMove2() {
  createBoard();
  b2 = b2 + nk1;
  nk1 = 0;

  black2.x = blackPath[b2].x + 12.5;
  black2.y = blackPath[b2].y + 12.5;

  if (
    (black2.x == 150 + 12.5 && black2.y == 250 + 12.5) ||
    (black2.x == 275 + 12.5 && black2.y == 300 + 12.5) ||
    (black2.x == 325 + 12.5 && black2.y == 425 + 12.5) ||
    (black2.x == 375 + 12.5 && black2.y == 300 + 12.5) ||
    (black2.x == 500 + 12.5 && black2.y == 250 + 12.5) ||
    (black2.x == 325 + 12.5 && black2.y == 75 + 12.5) ||
    (black2.x == 275 + 12.5 && black2.y == 200 + 12.5) ||
    (black2.x == 375 + 12.5 && black2.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (black2.x == white1.x && black2.y == white1.y) {
      white1.x = 312.5;
      white1.y = 262.5;
      k1 = 0;
      one[0] = 0;
      B_kill = 1;
    }
    if (black2.x == white2.x && black2.y == white2.y) {
      white2.x = 312.5;
      white2.y = 262.5;
      k2 = 0;
      one[1] = 0;
      B_kill = 1;
    }
    if (black2.x == white3.x && black2.y == white3.y) {
      white3.x = 312.5;
      white3.y = 262.5;
      k3 = 0;
      one[2] = 0;
      B_kill = 1;
    }
    if (black2.x == white4.x && black2.y == white4.y) {
      white4.x = 312.5;
      white4.y = 262.5;
      k4 = 0;
      one[3] = 0;
      B_kill = 1;
    }
  }
  ko1();
  ko2();
  ko3();
  ko4();
  no1();
  no2();
  no3();
  no4();
}

black_3.addEventListener("click", blackMove30);
function blackMove30() {
  do3 = do3 + 1;
  dhaayam30();
  if (blackOne[2] == 1 && b3 <= 55) {
    blackMove3();
  }
  if (blackOne[2] == 1 && b3 > 55) {
    blacklastPath3();
  }
}
function blackMove3() {
  createBoard();
  b3 = b3 + nk1;
  nk1 = 0;
  black3.x = blackPath[b3].x + 12.5;
  black3.y = blackPath[b3].y + 12.5;
  if (
    (black3.x == 150 + 12.5 && black3.y == 250 + 12.5) ||
    (black3.x == 275 + 12.5 && black3.y == 300 + 12.5) ||
    (black3.x == 325 + 12.5 && black3.y == 425 + 12.5) ||
    (black3.x == 375 + 12.5 && black3.y == 300 + 12.5) ||
    (black3.x == 500 + 12.5 && black3.y == 250 + 12.5) ||
    (black3.x == 325 + 12.5 && black3.y == 75 + 12.5) ||
    (black3.x == 275 + 12.5 && black3.y == 200 + 12.5) ||
    (black3.x == 375 + 12.5 && black3.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (black3.x == white1.x && black3.y == white1.y) {
      white1.x = 312.5;
      white1.y = 262.5;
      k1 = 0;
      one[0] = 0;
      B_kill = 1;
    }
    if (black3.x == white2.x && black3.y == white2.y) {
      white2.x = 312.5;
      white2.y = 262.5;
      k2 = 0;
      one[1] = 0;
      B_kill = 1;
    }
    if (black3.x == white3.x && black3.y == white3.y) {
      white3.x = 312.5;
      white3.y = 262.5;
      k3 = 0;
      one[2] = 0;
      B_kill = 1;
    }
    if (black3.x == white4.x && black3.y == white4.y) {
      white4.x = 312.5;
      white4.y = 262.5;
      k4 = 0;
      one[3] = 0;
      B_kill = 1;
    }
  }
  ko1();
  ko2();
  ko3();
  ko4();
  no1();
  no2();
  no3();
  no4();
}
black_4.addEventListener("click", blackMove40);
function blackMove40() {
  do4 = do4 + 1;
  dhaayam40();
  if (blackOne[3] == 1 && b4 <= 55) {
    blackMove4();
  }
  if (blackOne[3] && b4 > 55) {
    blacklastPath4();
  }
}
function blackMove4() {
  createBoard();
  b4 = b4 + nk1;
  nk1 = 0;
  black4.x = blackPath[b4].x + 12.5;
  black4.y = blackPath[b4].y + 12.5;

  if (
    (black4.x == 150 + 12.5 && black4.y == 250 + 12.5) ||
    (black4.x == 275 + 12.5 && black4.y == 300 + 12.5) ||
    (black4.x == 325 + 12.5 && black4.y == 425 + 12.5) ||
    (black4.x == 375 + 12.5 && black4.y == 300 + 12.5) ||
    (black4.x == 500 + 12.5 && black4.y == 250 + 12.5) ||
    (black4.x == 325 + 12.5 && black4.y == 75 + 12.5) ||
    (black4.x == 275 + 12.5 && black4.y == 200 + 12.5) ||
    (black4.x == 375 + 12.5 && black4.y == 200 + 12.5)
  ) {
    // if empty set
  } else {
    if (black4.x == white1.x && black4.y == white1.y) {
      white1.x = 312.5;
      white1.y = 262.5;
      k1 = 0;
      one[0] = 0;
      B_kill = 1;
    }
    if (black4.x == white2.x && black4.y == white2.y) {
      white2.x = 312.5;
      white2.y = 262.5;
      k2 = 0;
      one[1] = 0;
      B_kill = 1;
    }
    if (black4.x == white3.x && black4.y == white3.y) {
      white3.x = 312.5;
      white3.y = 262.5;
      k3 = 0;
      one[2] = 0;
      B_kill = 1;
    }
    if (black4.x == white4.x && black4.y == white4.y) {
      white4.x = 312.5;
      white4.y = 262.5;
      k4 = 0;
      one[3] = 0;
      B_kill = 1;
    }
  }
  ko1();
  ko2();
  ko3();
  ko4();
  no1();
  no2();
  no3();
  no4();
}
