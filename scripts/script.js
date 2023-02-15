let todoForm = document.getElementById('todoForm');
let todoList = document.getElementById('todoList');
let inputValue = document.getElementById('inputValue');

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    createItem(inputValue.value);
});

function createItem(x){
     let todoItem = `<li> ${x} </li>`;
     todoList.insertAdjacentHTML('beforeend',todoItem);
     inputValue.value = "";
}
