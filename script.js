const localStorageName = "task-list";

function createTask() {
  let input = document.getElementById("input-add-task");

  if (!input.value) {
    alert("Por favor digite algo");
  } else {
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    values.push({
      task: input.value,
    });
    localStorage.setItem(localStorageName, JSON.stringify(values));
    showTasks();
  }
}

function showTasks() {
  let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
  let list = document.getElementById("tasks-list");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML = `<li>${values[i]["task"]}</li>`;
  }
}
