document.getElementById('todo-btn').addEventListener('click', function(){
    const input = document.getElementById('todo-text').value;
    
    const todoContainer = document.getElementById('todo-container');
    const p = document.createElement('p');
    p.innerText = input;
    todoContainer.appendChild(p);
    document.getElementById('todo-text').value = '';
})