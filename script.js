showTask();

let userInput = document.getElementById("userInput");
let addTask = document.getElementById("addTask");
let saveTask = document.getElementById("saveTask");
let saveHiddenIndexTask = document.getElementById("saveHiddenIndexTask");
let deletAllTask = document.getElementById("deletAllTask");

addTask.addEventListener("click", function (e) {
  let task = localStorage.getItem("task");
  if (task == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(task);
  }
  taskObj.push(userInput.value);
  localStorage.setItem("task", JSON.stringify(taskObj));
  userInput.value = "";
  showTask();
  console.log(taskObj);
});

// showTask Function Todo List added in html body

function showTask() {
  let task = localStorage.getItem("task");
  if (task == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(task);
  }
  let taskListHtml = "";
  taskObj.forEach(function (element, index) {
    taskListHtml += `<div class="input-group flex-nowrap my-4">
        <div style="background-color:#151825;" type="text" class="form-control text-light border-2">${element}</div>
        <button style="background-color:#151825;" id="${index}" onClick ="editTask(this.id)" class="input-group-text border-2 text-primary">EDIT</button>
        <button style="background-color:#151825;" id="${index}" onClick ="deleteTask(this.id)" class="input-group-text border-2 text-danger">DELETE</button>
        </div>`;
  });

  let innerElemTaskList = document.getElementById("taskList");
  if (taskObj.length != 0) {
    innerElemTaskList.innerHTML = taskListHtml;
  } else {
    innerElemTaskList.innerHTML = `Nothing to show! Use "Add a Task" section above to add text.`;
  }
}

// deleteTask Function in Todo List

function deleteTask(index) {
  let task = localStorage.getItem("task");
  if (task == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(task);
  }
  taskObj.splice(index, 1);
  localStorage.setItem("task", JSON.stringify(taskObj));
  showTask();
}

// edietTask Function in Todo List

function editTask(index) {
  let task = localStorage.getItem("task");
  saveHiddenIndexTask.value = index;
  if (task == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(task);
  }
  userInput.value = taskObj[index];
  addTask.style.display = "none";
  saveTask.style.display = "block";
}

// saveUserTask  in Todo List  addEvent Listener

  saveTask.addEventListener("click", function () {
    let task = localStorage.getItem("task");
    if (task == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(task);
    }
    let storeHiddenIndexValue = saveHiddenIndexTask.value;
    taskObj[storeHiddenIndexValue] = userInput.value;
    localStorage.setItem("task", JSON.stringify(taskObj));
    addTask.style.display = "block";
    saveTask.style.display = "none";
    userInput.value = "";
    showTask();
  });



//   saveUserTask  in Todo List  addEvent Listener

  deletAllTask.addEventListener("click", function () {
    let task = localStorage.getItem("task");
    if (task == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(task);
      taskObj = [];
    }
    localStorage.setItem("task", JSON.stringify(taskObj));
    showTask();
  });

