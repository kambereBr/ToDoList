import './styles/style.scss';
import iconRefresh from './assets/icons8_available_updates_20px_1.png';
import iconEnter from './assets/icons8_enter_key_20px.png';
import iconMore from './assets/icons8_menu_vertical_20px.png';
import iconDelete from './assets/icons8_trash_20px.png';
import {
  addTask,
  deleteTask,
  editTaskDescription,
  localData,
  editTastkStatus,
  clearAllCompleted,
} from './utils.js';

const imageRefresh = document.getElementById('refresh-img');
imageRefresh.src = iconRefresh;

const imageEnter = document.getElementById('enter-img');
imageEnter.src = iconEnter;

const addField = document.getElementById('add-field');
const clearBtn = document.getElementById('clear-all-btn');

const listContainer = document.querySelector('.list-body-container');
let myData = [];

function cleanSelected() {
  const todoItem = document.querySelectorAll('.item-description');
  todoItem.forEach((items) => {
    const element = document.getElementById(items.id);
    const container = document.getElementById(`item-${items.id}`);
    const moreImg = document.getElementById(`more-img-${items.id}`);

    element.disabled = true;
    container.style.background = 'none';
    element.style.background = '#ffff';
    element.style.outline = '#ffff';
    moreImg.src = iconMore;
  });
}

function renderList() {
  if (localData.getItem('taskData')) {
    myData = JSON.parse(localData.getItem('taskData'));
    const itemsArraySorted = myData.sort((a, b) => a.index - b.index);

    listContainer.replaceChildren();
    itemsArraySorted.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('todo-item');
      li.id = `item-${item.index}`;

      const divChkCont = document.createElement('div');
      divChkCont.classList.add('checkbox-container');

      const divChkBtn = document.createElement('div');
      divChkBtn.classList.add('checkbox-bbtn-class');

      const inputCheck = document.createElement('input');
      inputCheck.classList.add('add-field');
      inputCheck.type = 'checkbox';
      inputCheck.id = `chk-${item.index}`;
      inputCheck.checked = item.completed;

      const divDescr = document.createElement('div');
      divDescr.classList.add('item-description-container');

      const inputDescript = document.createElement('input');
      inputDescript.type = 'text';
      inputDescript.id = item.index;
      inputDescript.value = item.description;
      inputDescript.classList.add('item-description');
      inputDescript.disabled = true;

      const imgBtn = document.createElement('img');
      imgBtn.id = `more-img-${item.index}`;
      imgBtn.alt = 'more icon';
      imgBtn.src = iconMore;
      imgBtn.classList.add('more-img-class');

      const hr = document.createElement('hr');

      // Events listeners
      li.addEventListener('click', () => {
        cleanSelected();
        li.style.background = '#f7ef8c';
        inputDescript.disabled = false;
        inputDescript.focus();
        inputDescript.style.outline = '#f7ef8c';
        inputDescript.style.background = '#f7ef8c';
        imgBtn.src = iconDelete;
      });

      imgBtn.addEventListener('click', () => {
        deleteTask(myData, item.index);
        renderList();
      });

      inputDescript.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && inputDescript !== '') {
          // update data
          editTaskDescription(myData, inputDescript.id, inputDescript.value);
          renderList();
        }
      });

      inputCheck.addEventListener('change', () => {
        const completed = !!inputCheck.checked;
        editTastkStatus(myData, item.index, completed);
      });

      divChkBtn.appendChild(inputCheck);
      divChkCont.appendChild(divChkBtn);
      divDescr.appendChild(inputDescript);
      divChkCont.appendChild(divDescr);
      li.appendChild(divChkCont);
      li.appendChild(imgBtn);
      listContainer.append(li);
      listContainer.appendChild(hr);
    });
  }
}
renderList();

// 1. add item
addField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && addField.value !== '') {
    event.preventDefault();
    addTask(myData, addField.value);
    addField.value = '';
    renderList();
  }
});

// clear all completed tasks
clearBtn.addEventListener('click', () => {
  if (window.confirm('Do you want to clear all completed tasks ?') === true) {
    clearAllCompleted(myData);
    renderList();
  }
});
