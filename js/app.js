// incremented when defining UL item IDs to allow each list item to provide a tag for each list item so they can be deleted individually
let count = 0; 

// event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form-content');
    form.addEventListener('submit', addTaskToList);
});

// event listener for delete button and delete all button
document.addEventListener('submit', () => {
    const deleteButton = document.querySelectorAll('.delete-button');
    deleteButton.forEach((button) => {
        button.addEventListener('click', deleteTaskFromList);
    });
    const deleteAllButton = document.querySelector('#delete-all-button');
    deleteAllButton.addEventListener('click', deleteAllTasks);
})

// each form submit is contained within its own div, which is referenced by this function
const setDivItemTextContent = function (arrayOfDivItems, arrayOfDivItemsTextContent) {
    let arrayOfDivItemsTextContentIndex = 0;
    arrayOfDivItems.forEach((listItem) => {
        listItem.textContent = arrayOfDivItemsTextContent[arrayOfDivItemsTextContentIndex]; 
        arrayOfDivItemsTextContentIndex++;
    });
};

// each form submit div is contained within a list which is referenced by this function
const setListItemClasses = function (arrayOfListItems, arrayOfClassNames){
    let classArrayIndex = 0;
    arrayOfListItems.forEach((listItem) => {
        listItem.className = arrayOfClassNames[classArrayIndex]; 
        classArrayIndex++;
    });
};

// function to set each list item ID
const setListItemID = function (arrayOfListItems, id){
    arrayOfListItems.forEach((arrayItem) => arrayItem.setAttribute('id', id));
};


// function that takes in an array of elements to be deleted that are contained within a Parent list and deletes them all
const deleteAll = function (arrayOfElements, containerList){
    arrayOfElements.forEach((element) => {
        itemsToDelete = containerList.querySelectorAll(element);
        itemsToDelete.forEach((item) => item.remove());
    });
};

// function that allows for 2 levels of appending, however will default to one if third argument is left out
const appendItems = function (arrayOfItems, parentItem1, parentOfParentItem1 = null){
    arrayOfItems.forEach((arrayItem) => {
        if (arrayItem === parentItem1){
            if (parentOfParentItem1){
                parentOfParentItem1.appendChild(arrayItem);
            }else {
                return; 
            };
        }else{
            parentItem1.appendChild(arrayItem);
        };
    });
};

const addTaskToList = function () {
    // allows the changes logged below to remain as permanent features of the webpage
    event.preventDefault();

    // gathers info from form
    const taskTitle = event.target.title.value;
    const taskDescription = event.target.description.value;
    const taskDate = event.target.date.value.split('-').reverse().join('/');

    // selects elements of the dom that relate to this function
    const list = document.querySelector('ul');
    const form = document.querySelector('form');

    // creates the necessary elements for this function to work
    const newDivElement = document.createElement('div');
    const newListElementTitle = document.createElement('li');
    const newListElementDescription = document.createElement('li');
    const newListElementDate = document.createElement('li');
    const newListElementDeleteButton = document.createElement('button');

    // array of elements to be added to the div which contains the form information
    const arrayOfDivItems = [newListElementTitle, newListElementDescription, newListElementDate, newListElementDeleteButton];
    
    // text content of each element which is simply the info from the form defined above
    const arrayOfDivItemTextContent = [`${taskTitle}`, `${taskDescription}`, `${taskDate}`, 'Delete'];

    // array of items which will be added to the list that contains the information on the webpage. This div element acts as a parent to the other elements which contain the form information
    const arrayOfListItems = [newDivElement, newListElementTitle, newListElementDescription, newListElementDate, newListElementDeleteButton];

    // list of classes given to each of these list elements
    const arrayOfListItemClasses = ['tasks', 'task-title', 'task-description', 'task-date', 'delete-button'];

    // functions that set the text content of the div items, set the ID and classes of the list items and then append the div items to the div and the the div to the list. 
    setDivItemTextContent(arrayOfDivItems, arrayOfDivItemTextContent);
    setListItemClasses(arrayOfListItems, arrayOfListItemClasses);
    setListItemID(arrayOfListItems, `item-${count}`);
    appendItems(arrayOfListItems, newDivElement, list);

    // increments the count defined at the top of the file which serves as an incrementing ID for the list items so they can each be individually deleted
    count ++;

    // resets form for next use
    form.reset();
}; 

// function for deleting individual tasks
const deleteTaskFromList = function () {
    const list = document.querySelector('ul');
    const itemsToDelete = list.querySelectorAll(`#${this.id}`);
    itemsToDelete.forEach((item) => item.remove());
};

// function for deleting all tasks 
const deleteAllTasks = function () {
    const list = document.querySelector('ul');  
    itemsToDelete = ['li', 'div', 'button'];
    deleteAll(itemsToDelete, list);
};