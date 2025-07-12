document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  const taskContent = document.createElement("span");
  taskContent.className = "task-text";
  taskContent.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  let isEditing = false;

  editBtn.onclick = () => {
    if (!isEditing) {
      taskInput.value = taskContent.textContent;
      taskInput.focus();
      editBtn.textContent = "Update";
      isEditing = true;
    } else {
      const updatedText = taskInput.value.trim();
      if (updatedText !== "") {
        taskContent.textContent = updatedText;
        editBtn.textContent = "Edit";
        isEditing = false;
        taskInput.value = "";
      } else {
        alert("Updated task cannot be empty.");
      }
    }
  };

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => {
    taskContent.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    taskItem.remove();
  };

  taskItem.append(taskContent, editBtn, completeBtn, deleteBtn);
  document.getElementById("taskList").appendChild(taskItem);

  taskInput.value = "";
}
