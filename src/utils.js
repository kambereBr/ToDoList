const localData = window.localStorage;

function Task(description, completed, index) {
  this.description = description;
  this.completed = completed;
  this.index = index;
}

const updateLocalStorage = (data) => {
  data.forEach((itemTask, index) => {
    itemTask.index = index + 1;
  });

  localData.setItem('taskData', JSON.stringify(data));
};

const addTask = (tasks, description) => {
  const newTask = new Task(description, false, tasks.length + 1);
  tasks.push(newTask);
  updateLocalStorage(tasks);
};

const deleteTask = (tasks, taskIndex) => {
  if (tasks.length === 1) {
    tasks = [];
  } else {
    tasks.splice(taskIndex - 1, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
  }
  updateLocalStorage(tasks);
};

const filterTask = (tasks) => tasks.completed === false;

const clearAllCompleted = (tasks) => {
  if (tasks.length === 1) {
    tasks = [];
  } else {
    tasks = tasks.filter(filterTask);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
  }
  updateLocalStorage(tasks);
};

const editTaskDescription = (tasks, taskIndex, description) => {
  tasks[taskIndex - 1].description = description;
  updateLocalStorage(tasks);
};

const editTastkStatus = (tasks, taskIndex, status) => {
  tasks[taskIndex - 1].completed = status;
  updateLocalStorage(tasks);
};

export {
  addTask,
  deleteTask,
  editTaskDescription,
  editTastkStatus,
  localData,
  clearAllCompleted,
};