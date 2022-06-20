let inputList = document.querySelector('.input-container');
let sortButton = document.querySelector('.sort-tasks');
let ifSortAlfa = -1;

//Создаю элемент крестик и сразу навешиваю на него обработчик события
document.querySelector('.delete').addEventListener('click', () => { 
    if (inputList.children.length > 1) {
        document.querySelector('.delete').parentElement.remove();
    } else {
        document.querySelector('.delete').parentElement.querySelector('input').value = '';
    } 
});


document.querySelector('.action').addEventListener('click', () => {
    let newTask = document.createElement('div');
    newTask.classList.add('item');
    newTask.innerHTML = `<input class="task" type="text">
    <button class="delete">X</button>`;
    inputList.append(newTask);
   
    newTask.querySelector('.delete').addEventListener('click', () => {
        if (inputList.children.length > 1) {
            newTask.remove();
        } else {
            newTask.querySelector('input').value = '';
        } 
    });
});    


sortButton.addEventListener('click', () => {
    let sortRow = [];
    document.querySelectorAll('.task').forEach((item) => {
        sortRow.push(item.value);
    });
    ifSortAlfa = !sortButton.classList.contains('reversed') ? 1 : -1;
    sortRow.sort((a, b) => (a > b ? ifSortAlfa : ifSortAlfa * -1));
    
    document.querySelectorAll('.task').forEach((item, index) => {
        item.value = sortRow[index];
    });
    
    sortButton.classList.toggle('reversed');
})


