import {
  updateLocalStorage,
} from './utils.js';

const editTastkStatus = (tasks, taskIndex, status) => {
  tasks[taskIndex - 1].completed = status;
  updateLocalStorage(tasks);
};

export default editTastkStatus;