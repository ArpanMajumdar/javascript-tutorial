// Declare UI variables
const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const addTaskBtn = document.querySelector('.btn');
const taskInput = document.querySelector('#task');
const filterInput = document.querySelector('#filter');
const clearTaskBtn = document.querySelector('.clear-tasks');
let tasks = []

function loadAllEventListeners() {
    // Display tasks
    document.addEventListener('DOMContentLoaded', displayTasks);

    // Add task
    taskForm.addEventListener('submit', addTask);

    // Remove task
    taskList.addEventListener('click', removeTask);

    // Clear tasks
    clearTaskBtn.addEventListener('click', clearTasks);

    // Filter tasks
    filterInput.addEventListener('keyup', filterTasks);
}

loadAllEventListeners();

function addTask(event) {
    const taskName = taskInput.value;
    if (taskName === '') {
        alert('Task cannot be blank');
    } else {
        // Create task list item
        renderTaskItem(taskName);
        taskInput.value = ''
        addTaskToLocalStorage(taskName);
    }
    event.preventDefault();
}

function renderTaskItem(taskName) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskName));
    // Create remote task link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Create link child of list item
    li.appendChild(link);
    // Add list item to task list
    taskList.appendChild(li);
}

function removeTask(event) {
    if (event.target.parentElement.classList.contains('delete-item')) {
        let li = event.target.parentElement.parentElement;
        const taskName = li.firstChild.textContent;

        if (confirm('Are you sure?')) {
            console.log(`Task  "${taskName}" deleted.`)
            li.remove();
            removeTaskFromLocalStorage(taskName);
        }
    }
    event.preventDefault();
}

function clearTasks(event) {
    // Slower implementation
    // taskList.innerHTML=''

    // Faster implementation
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearLocalStorage();
}

function filterTasks(event) {
    const searchText = event.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function (task) {
            const taskItem = task.firstChild.textContent.toLowerCase();

            if (taskItem.indexOf(searchText) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    )
}

// Task repository

function addTaskToLocalStorage(task) {
    tasks = getTasksFromLocalStorage();
    tasks.push(task);
    saveTasksToLocalStorage(tasks);
}

function removeTaskFromLocalStorage(taskToBeDeleted) {
    tasks = getTasksFromLocalStorage();

    tasks.forEach(function (task, index) {
        if (task === taskToBeDeleted) {
            tasks.splice(index, 1);
        }
    })

    console.log(tasks);
    saveTasksToLocalStorage(tasks);
}

function displayTasks(event) {
    tasks = getTasksFromLocalStorage();
    tasks.forEach(function (task) {
        renderTaskItem(task);
    })
}

function getTasksFromLocalStorage() {
    tasks = localStorage.getItem('tasks');
    if (tasks === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(tasks);
    }
    return tasks;
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearLocalStorage(){
    localStorage.clear();
}


