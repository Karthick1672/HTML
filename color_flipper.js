const btn = document.getElementById("but")
const colortext = document.getElementById("color")
const warp = document.getElementById("warp")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// console.log(ranhex())
btn.addEventListener("click",changebg)

function changebg()
{
    let s = "#"
    for (let i = 1; i<=6; i++)
    {
        s += ranhex()
    }
    // console.log(s)
    warp.style.backgroundColor = s
    colortext.innerHTML = s
}

function ranhex()
{
    // alert()
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]
}

