let button = document.getElementById("add");
let todoList = document.getElementById("todoList");
let input = document.getElementById("input");

let todo = [];
// if page is loaded or refreshed
window.onload = ()=>{

    // if local storage is empty, then empty array[] is used
    todo = JSON.parse(localStorage.getItem('todo')) || []

    todo.forEach(tod=>addList(tod))
}

button.addEventListener('click',()=>{
    // to add data -- push()
    todo.push(input.value);
    addList(input.value);
    input.value = '';

    // setItem = to set the data from toda array in local storage, by converting the array to string
    localStorage.setItem('todo',JSON.stringify(todo));
})
// if parameter is not given, then it display the whole array
function addList(tod)
{
    // Creating para tag for displaying list
    let par = document.createElement('p');
    par.innerText = tod;

    // the created p-tag is appended to todoList(div)
    todoList.appendChild(par);

    

    par.addEventListener("click",()=>{
        par.style.textDecoration='line-through';
        remove(tod)
    })

    par.addEventListener("dblclick",()=>{
        todoList.removeChild(par)
        // if user double click the data first
        remove(tod)
    })
}

function remove(tod)
{
    let index = todo.indexOf(tod);
    if(index>-1)
    {
        todo.splice(index,1);
    }
    localStorage.setItem('todo',JSON.stringify(todo));
}