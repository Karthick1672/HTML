function basic()
{
     // It is used only in console page[ctrl+shift+j - to open console page]
 console.log("Hello! Boss")
 
 // [ctrl+shift+esc] to open the chrome storage
 
 
 //this is an alert 
 // alert("404 error") 
 
 // variable
 // Dynamically typed language => It has no datatype
 let score = 0 // initialization
 console.log(score)
 
 // assignment
 score = 10
 console.log("Score is: "+score)
 score = "Hi! Boss"
 console.log(score)
         
 const pi = 3.14
 console.log("value of pi: "+pi)
 
 // user input
 let name = prompt("Movie name: ")  // always as string
 console.log("Selected Movie:",name)
 
 
 let tickets = prompt("how tickets do you want?")
 console.log("you should pay",Number(tickets)*100)
}

console.log("Hello! Boss")

// arrays

let mark = [100,90,80,70]
console.log(mark.length)
console.log(mark[mark.length-1])
console.log(mark)
// to add last elements (push)
mark.push(60)
console.log(mark)
// to remove last elements
console.log(mark.pop())   // which element is removed
console.log(mark)
// to remove first element
console.log(mark.shift())   // which element is removed
console.log(mark)

// to add first elements
console.log(mark.unshift(100))
console.log(mark)

// to delete an element
mark.splice(2,1) //(2,1) => 2-index, 1-how many elements
console.log(mark)

// to delete and replace
mark.splice(2,1,80) //(2,1) => 2-index, 1-how many elements, 80-insert
console.log(mark)

// only replace
mark.splice(3,0,70)
console.log(mark)

// select particular elements
console.log(mark.slice(1,3))

// to reverse permanent
mark.reverse()
console.log(mark)
mark.reverse()
console.log(mark)

// join - array to string
let m = mark.join()
console.log(m)

// split - string to array
let k = 'k,a,r,t,h,i'
let nk = k.split(',')
console.log(nk)

let karthi = "28+56"
let nk1 = karthi.split('+')
let nk2 = karthi.split('-')
let nk3 = karthi.split('*')
let nk4 = karthi.split('/')
// '+'
if (nk1.length == 2)
{
    let x = parseInt(nk1[0])
    let y = parseInt(nk1[1])
    let ans = x + y
    console.log(ans)
}
// '-'
if (nk2.length == 2)
{
    let x = parseInt(nk2[0])
    let y = parseInt(nk2[1])
    let ans = x - y
    console.log(ans)
}
// '*'
if (nk3.length == 2)
{
    let x = parseInt(nk3[0])
    let y = parseInt(nk3[1])
    let ans = x * y
    console.log(ans)
}
// '/'
if (nk4.length == 2)
{
    let x = parseInt(nk4[0])
    let y = parseInt(nk4[1])
    let ans = x / y
    console.log(ans)
}

let item = {
    price:10000,
    material:"metal",
    color:"silver"
}
console.log(item.color)
item.model = "realme"
console.log(item)

for(let i = 1 ; i <= 5 ; i++)
{
    console.log(i);
}

// factorial using FUNCTION
function factorial(num)
{
    if (num == 1)
    {
        return 1;
    }
    return num*factorial(num-1)
}

console.log(factorial(8))

// arrow function

let volume = (l,b,h) => {return l*b*h}
console.log(volume(10,10,10))

// area of circle
let area = r => Math.PI*r*r
console.log("Area of circle: " +area(5).toFixed(2))

// rest parameters
let restpara = function(...args)
{
    let result = 1
    for(let res of args)
    {
        result *= res
    }
    return result
}
console.log("rest parameter: ")
console.log(restpara(1,2,3,4,5,6))

