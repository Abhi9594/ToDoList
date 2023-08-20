document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const taskInput = document.getElementById("task");
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);

        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        const checkbox = taskItem.querySelector("input[type='checkbox']");
        checkbox.addEventListener("change", function () {
            taskItem.classList.toggle("completed");
        });
    }
});
