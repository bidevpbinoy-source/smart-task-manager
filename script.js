let tasks = [];
const completedCount = document.getElementById("completedCount");
const pendingCount = document.getElementById("pendingCount");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const taskCount = document.getElementById("taskCount");


addBtn.addEventListener("click", function () {
    addTask();
});

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        message.textContent = "Please enter a task!";
        message.style.color = "red";
        return;
    }

    message.textContent = "";

    tasks.push({
        text: taskText,
        completed: false
    });

    taskInput.value = "";
    displayTasks();
}

function displayTasks() {

    taskList.innerHTML = "";

    let completed = 0;

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = tasks[i].text;

        if (tasks[i].completed) {
            span.classList.add("completed");
            completed++;
        }

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✓";

        completeBtn.addEventListener("click", function () {
            tasks[i].completed = !tasks[i].completed;
            displayTasks();
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✕";

        deleteBtn.addEventListener("click", function () {
            tasks.splice(i, 1);
            displayTasks();
        });

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }

    
    taskCount.textContent = tasks.length;
    completedCount.textContent = completed;
    pendingCount.textContent = tasks.length - completed;

    if (tasks.length === 0) {
        message.textContent = "No tasks available.";
        message.style.color = "blue";
    } else {
        message.textContent = "";
    }
}

