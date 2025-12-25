const slide = document.getElementById("slideBoard");
const brain = document.getElementById("brain");
const abo = document.getElementById("abo");
const ski = document.getElementById("ski");
const pro = document.getElementById("pro");
const con = document.getElementById("con");

const ab = document.getElementById("ab");
const sk = document.getElementById("sk");
const pr = document.getElementById("pr");
const co = document.getElementById("co");

let i = 0;
let w = screen.width;
let h = screen.height;
const ale = document.getElementById("Alert");
ale.style.height = h +"px";
// console.log(h);
// if(w <= 1000)
// {
ab.style.display = "none";
pr.style.display = "none";
sk.style.display = "none";
//     // co.style.display = "none";
// }
// else
// {
//     brain.style.display = "none";
// }
function slideMenu() {
    if(i % 2 == 0)
    {
        brain.style.animation = "rotateOn .5s ease-in-out";
        slide.style.animation = "slideOn .5s ease-in-out";
        slide.style.width = "100%";
        abo.innerHTML = "About";
        ski.innerHTML = "Skill";
        pro.innerHTML = "Project";
        // con.innerHTML = "Contact";
        setTimeout(()=>{brain.style.animation = "fade 1s infinite linear";},500)
        
    }
    else
    {
        brain.style.animation = "rotateOff .5s ease-in-out";
        slide.style.animation = "slideOff .5s ease-in-out";
        slide.style.width = "0%";
        abo.innerHTML = "";
        ski.innerHTML = "";
        pro.innerHTML = "";
        // con.innerHTML = "";
    }
    i++;    
}

function asp()
{
    brain.style.animation = "rotateOff .5s ease-in-out";
    // slide.style.animation = "slideOff .5s ease-in-out";
    slide.style.width = "0%";
    abo.innerHTML = "";
    ski.innerHTML = "";
    pro.innerHTML = "";   
    i++;
}
