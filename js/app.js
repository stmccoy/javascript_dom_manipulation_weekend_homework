document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form-content');

    form.addEventListener('submit', addTaskToList);
});


const addTaskToList = function () {
    event.preventDefault();
    const taskTitle = event.target.title.value;
    const taskDescription = event.target.description.value;
    const taskDate = event.target.date.value;
    console.log(taskTitle);
    console.log(taskDescription);
    console.log(taskDate.split('-').reverse().join('-'));
};