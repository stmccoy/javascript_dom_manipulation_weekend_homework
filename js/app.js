document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form-content');

    form.addEventListener('submit', addTaskToList);
});


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
    newListElementDeleteButton.textContent = 'delete';

    newDivElement.className = 'tasks';

    newDivElement.appendChild(newListElementTitle);
    newDivElement.appendChild(newListElementDescription);
    newDivElement.appendChild(newListElementDate);  
    newDivElement.appendChild(newListElementDeleteButton);  
    list.appendChild(newDivElement);

    // form.reset();
    
    
    
};