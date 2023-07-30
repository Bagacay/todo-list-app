const inputTask = document.getElementById("input-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const tasks = document.querySelector("tasks")
let list;

addBtn.addEventListener("click", function () {
    list = document.createElement("li");
    list.classList.add("tasks");
    list.innerText = inputTask.value;
    taskList.appendChild(list);
    inputTask.value = "";
})

inputTask.addEventListener("input", function () {
    addBtn.disabled = (inputTask.value === '');
})

tasks.addEventListener("click", function () {
    console.log("You there?")
})