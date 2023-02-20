let todoForm = document.getElementById('todoForm');
let todoList = document.getElementById('todoList');
let inputValue = document.getElementById('inputValue');

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    createItem(inputValue.value);
});



const request = new XMLHttpRequest();
request.open("GET","http://127.0.0.1:3000/todos");
request.send();
request.onload = () =>{
    let result = JSON.parse(request.response);
    console.log(result)
    for(const data in result){
        let todoItem = 
        `<li> 
        ${result[data].todo} <a href="/todo/${result[data].id}" class="">Edit</a> <a href="/todo/${result[data].id}" class="">Delete</a>
        
        </li>`;
        todoList.insertAdjacentHTML('beforeend',todoItem);
    }

}




// Function for adding demo data
// function createItem(x){
//      let todoItem = `<li> ${x} </li>`;
//      todoList.insertAdjacentHTML('beforeend',todoItem);
//      inputValue.value = "";
// }


