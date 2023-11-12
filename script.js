const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const prioritySelect = document.querySelector("#priority-select");
const taskTable = document.querySelector("#task-table");

taskForm.addEventListener("submit", function(event) {
  event.preventDefault();

  
  const taskName = taskInput.value;
  const priority = prioritySelect.value;

  
  const tableRow = document.createElement("tr");

  
  const taskNameCell = document.createElement("td");
  const priorityCell = document.createElement("td");
  const favoriteCell = document.createElement("td");

  
  taskNameCell.textContent = taskName;

  
  priorityCell.textContent = priority;

  
  if (priority === "High") {
    priorityCell.classList.add("priority-high");
  } else if (priority === "Medium") {
    priorityCell.classList.add("priority-medium");
  } else {
    priorityCell.classList.add("priority-low");
  }

  
  tableRow.appendChild(taskNameCell);
  tableRow.appendChild(priorityCell);
  tableRow.appendChild(favoriteCell);

  
  taskTable.appendChild(tableRow);


  taskInput.value = "";
});
