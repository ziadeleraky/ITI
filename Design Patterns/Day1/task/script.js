var dataTime = new Date();

// add task to the list
function addTask(task) {
  const taskElement = `
          <div class="task2">
            <div class="task">${task}</div>
            <button class="done">Done</button>
            <button class="delete">Delete</button>
            <br>
          </div>
        `;
  $(".tasksBox").append(taskElement);
}

// function to render tasks from cookies
const renderTasks = (taskList) => {
  // iterate over the list of tasks
  taskList.forEach((task) => {
    if (task.split("=")[1]) {
      // check if the task is not deleted
      if (!task.includes("deleted")) {
        addTask(task.split("=")[1]);
      }
    }
  });
};

// function to load tasks from cookies
const loadTasks = () => {
  const cookies = document.cookie.split("; ");
  renderTasks(cookies);
};

// load tasks from cookies
loadTasks();

// function to add task to cookies
function setCookie(taskInputValue) {
  dataTime.setMonth(dataTime.getMonth() + 1);
  document.cookie = `${taskInputValue} = ${taskInputValue}  ; expires=${dataTime}`;
}

// function to remove task from cookies
function removeCookie(taskInputValue) {
  document.cookie = `${taskInputValue} = ${taskInputValue} deleted  ; expires=1/1/2001`;
}

// add task to the list
$("#btnAdd").on("click", function () {
  if (!!$("#taskInput").val()) {
    // add task to the list
    addTask($("#taskInput").val());
    // add task to the cookies
    setCookie($("#taskInput").val());
  } else {
    console.error("Empty value");
  }
});

$(document).on("click", ".delete", function () {
  // remove task from the cookies
  removeCookie($(this).siblings("div").text());
  // remove task from the list
  $(this).parent(".task2").remove();
});

// toggle class to mark task as done
$(document).on("click", ".done", function () {
  $(this).parent(".task2").toggleClass("TaskDone");
});
