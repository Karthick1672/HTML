function convert()
    {
    let cm = document.getElementById("input").value        
    let answer = cm/2.54
    let ans = document.getElementById("ansres")
    ans.innerHTML = answer.toFixed(2) + " inches"
    }
function convert1()
    {
        let deg = document.getElementById("input2").value
        let answer1 = (deg * 9/5) +32
        let ans1 = document.getElementById("ansres2")
        ans1.innerHTML = answer1.toFixed(1) + " Fahrenheit"
    }
function convert2()
    {
        var color = document.getElementById("input3").value;
        document.getElementById('box3').style.backgroundColor = color;
    }
        
// const calu = document.querySelector(".box4 .cal");
// // console.log(calu)
// const result1 = document.querySelector(".box4 .span");

// const result = () =>
// {
//     result1.innerHTML = "hi";
// }

// document.getElementById('.btn').addEventListener("click",result);

function calculate()
{
    // getElementId - only id no class
    let inp = document.getElementById("calu").value
    let result1 = document.getElementById("span")
    let karthi = inp
let nk1 = karthi.split('+')
let nk2 = karthi.split('-')
let nk3 = karthi.split('*')
let nk4 = karthi.split('/')
let nk5 = karthi.split('%')
// '+'
if (nk1.length == 2)
{
    let x = parseInt(nk1[0])
    let y = parseInt(nk1[1])
    let ans = x + y
    // console.log(ans)
    result1.innerHTML = ans;
}
// '-'
if (nk2.length == 2)
{
    let x = parseInt(nk2[0])
    let y = parseInt(nk2[1])
    let ans = x - y
    // console.log(ans)
    result1.innerHTML = ans;
}
// '*'
if (nk3.length == 2)
{
    let x = parseInt(nk3[0])
    let y = parseInt(nk3[1])
    let ans = x * y
    // console.log(ans)
    result1.innerHTML = ans;
}
// '/'
if (nk4.length == 2)
{
    let x = parseInt(nk4[0])
    let y = parseInt(nk4[1])
    let ans = x / y
    // console.log(ans)
    result1.innerHTML = ans;
}
// '%'
if (nk5.length == 2)
{
    let x = parseInt(nk5[0])
    let y = parseInt(nk5[1])
    let ans = x % y
    // console.log(ans)
    result1.innerHTML = ans;
    
}
}