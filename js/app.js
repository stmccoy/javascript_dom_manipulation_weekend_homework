document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form-content');

    form.addEventListener('submit', addTaskToList);
});

document.addEventListener('submit', () => {
    const deleteButton = document.querySelectorAll('.delete-button')
    deleteButton.forEach((button) => {
        button.addEventListener('click', deleteTaskFromList);
    })
})


let count = 0; 

const addTaskToList = function () {
    event.preventDefault();
    const taskTitle = event.target.title.value;
    const taskDescription = event.target.description.value;
    const taskDate = event.target.date.value.split('-').reverse().join('/');

    const list = document.querySelector('ul');
    const form = document.querySelector('form')

    const newDivElement = document.createElement('div');

    const newListElementTitle = document.createElement('li');
    const newListElementDescription = document.createElement('li');
    const newListElementDate = document.createElement('li');
    const newListElementDeleteButton = document.createElement('button');

    newListElementTitle.textContent = `${taskTitle}`;
    newListElementDescription.textContent = `${taskDescription}`;
    newListElementDate.textContent = `${taskDate}`;
    newListElementDeleteButton.textContent = 'Delete';

    newDivElement.className = 'tasks';
    newListElementDeleteButton.className = 'delete-button';
    newListElementTitle.className = 'task-title';
    newListElementDescription.className = 'task-description';
    newListElementDate.className = 'task-date';

    newDivElement.setAttribute('id', `item-${count}`);
    newListElementDeleteButton.setAttribute('id', `item-${count}`);
    newListElementTitle.setAttribute('id', `item-${count}`);
    newListElementDescription.setAttribute('id', `item-${count}`);
    newListElementDate.setAttribute('id', `item-${count}`);
 
    newDivElement.appendChild(newListElementTitle);
    newDivElement.appendChild(newListElementDescription);
    newDivElement.appendChild(newListElementDate);  
    newDivElement.appendChild(newListElementDeleteButton); 
    list.appendChild(newDivElement);

    count ++;
    // form.reset();
};

const deleteTaskFromList = function () {
    const list = document.querySelector('ul');
    const itemsToDelete = list.querySelectorAll(`#${this.id}`)
    itemsToDelete.forEach((item) => item.remove())
    // When you bind an event listener with addEventListener, it's called with this referring to the element you bound the event on. So this.id will be the id of the element (if it has one).
};

