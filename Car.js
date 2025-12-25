// alert("hi");
const light1 = document.getElementById('light');
const bg = document.getElementById("body");
const sun1 = document.querySelector(".sun");
const moon1 = document.querySelector(".moon");
const car = document.querySelector(".car");
let c = 1;

const sun_bgc = document.querySelector(".sun_bg");
const moon_bgc = document.querySelector(".moon_bg");

const changer = document.querySelector(".change");

changer.addEventListener("click",lighter);

const car_sound = new Audio();
car_sound.src = "Media/car_sound.mp3";

// car_sound.play();


function lighter()
{
    if(c % 2 == 0)
    {
        light1.style.visibility = 'hidden';
        sun1.style.visibility = 'visible';
        c += 1;
        moon1.style.visibility = 'hidden';
        bg.style.backgroundColor = "linear-gradient(red,blue)";
        moon_bgc.style.visibility = 'hidden';
        sun_bgc.style.visibility = 'visible';
        car.style.visibility = 'visible';
        sun1.visibility= 'visible';
        car_sound.play();
    }
    // moon
    else
    {
        light1.style.visibility = 'visible';
        sun1.style.visibility = 'hidden';
        moon1.style.visibility = 'visible';
        c += 1;
        moon_bgc.style.visibility = 'visible';
        sun_bgc.style.visibility = 'hidden';
        car_sound.play();
        car.style.visibility = 'visible';
    }
}