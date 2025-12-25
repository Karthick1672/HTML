let select=document.querySelectorAll(".currency");
let btn = document.getElementById("btn");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

fetch('https://api.frankfurter.app/currencies')
// first need to convert the json from fetch API
.then(res=>res.json())
// display is an function
.then(res=>display(res))

function display(res)
{
    // to convert into an array
    // console.log(Object.entries(res)[1][1])

    let arr = Object.entries(res)
    for(let i=0;i<arr.length;i++)
    {
        let opt= `<option value="${arr[i][0]}">${arr[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}


function converter1()
{
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let inputValue = input1.value;
    if(curr1 == curr2)
        {
            alert("Choose different Currency")
        }
        else
        {
            const host = 'api.frankfurter.app';
            fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
            .then(resp =>resp.json())
            .then((data) =>
                {
                    // (.value = .innerHTML) for input tag
                   input2.value = Object.values(data.rates)[0];
                });
        }
}

function convertor2()
{
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let inputValue = input2.value;
    if(curr1 == curr2)
        {
            alert("Choose different Currency")
        }
        else
        {
            const host = 'api.frankfurter.app';
            fetch(`https://${host}/latest?amount=${inputValue}&from=${curr2}&to=${curr1}`)
            .then(resp =>resp.json())
            .then((data) =>
                {
                   input1.value = Object.values(data.rates)[0];
                });
        }

}

// function convert(cur1,cur2,inputValue)
// {
//     const host = 'api.frankfurter.app';
//     fetch(`https://${host}/latest?amount=${inputValue}&from=${cur1}&to=${cur2}`)
//     .then(resp =>resp.json())
//     .then((data) =>{
//        input2.value = Object.values(data.rates)[0];
//     });
// }
