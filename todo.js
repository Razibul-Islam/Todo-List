let count = 0;
document.getElementById('btn').addEventListener('click', function () {
    count++;
    const input = document.getElementById('input').value;

    const tableBody = document.getElementById('table-body');
    const trElement = document.createElement('tr');
    if(trElement.style.display = 'none'){
        trElement.style.display = 'block';
    }
    trElement.innerHTML = `
        <th scope="row" class="done">${count}</th>
        <td class="done">${input}</td>
        <td>
        <button class="btn bg-primary btn-outline-primary text-white complete" type="button">Done</button>
        <button class="btn bg-danger btn-outline-danger text-white delete-btn" type="button">Delete</button>
        </td>
    `
    tableBody.appendChild(trElement);
    document.getElementById('input').value = '';

    
    const complete = document.getElementsByClassName('complete');
    for (const button of complete) {
        button.addEventListener('click', function(event){
            event.target.parentNode.parentNode.style.textDecoration = 'line-through';
        })
    }
    const deleteBtn = document.getElementsByClassName('delete-btn');
    for (const button of deleteBtn) {
        button.addEventListener('click', function(event){
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }
    const deleteAll = document.getElementById('clear');
    deleteAll.addEventListener('click', function(){
        // tableBody.style.display
        tableBody.style.display = 'none';
    })
    
    
})
