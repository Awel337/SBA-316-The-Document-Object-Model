const taskInput = document.getElementById("taskInput");
const taskList = document.querySelector("#taskList");
const errorMsg = document.getElementById("errorMsg");
const todoForm = document.getElementById("todoForm");
const completedCount = document.getElementById("completedCount");
const remainingCount = document.getElementById("remainingCount");

todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (taskInput.value.trim() === "") {
        errorMsg.hidden = false;
        return;
    }
    errorMsg.hidden = true;
    
    const li = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskInput.value;

    const checkButton = document.createElement("button");
    checkButton.textContent = "✔";
    checkButton.addEventListener("click", function() {
        taskSpan.classList.toggle("done");
        updateTaskCount();
    });

    const editButton = document.createElement("button");
    editButton.textContent = "✎";
    editButton.addEventListener("click", function() {
        const newTask = prompt("Edit task:", taskSpan.textContent);
        if (newTask) {
            taskSpan.textContent = newTask;
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function() {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(checkButton);
    li.appendChild(taskSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
    updateTaskCount();
});

function updateTaskCount() {
    const totalTasks = document.querySelectorAll("#taskList li").length;
    const completedTasks = document.querySelectorAll("#taskList .done").length;
    completedCount.textContent = completedTasks;
    remainingCount.textContent = totalTasks - completedTasks;
}