import './styles/style.scss';
import iconRefresh from './assets/icons8_available_updates_20px_1.png';
import iconEnter from './assets/icons8_enter_key_20px.png';
import iconMore from './assets/icons8_menu_vertical_20px.png';

const imageRefresh = document.getElementById('refresh-img');
imageRefresh.src = iconRefresh;

const imageEnter = document.getElementById('enter-img');
imageEnter.src = iconEnter;

const itemsArray = [
  {
    description: 'Double tap to edit',
    completed: true,
    index: 1,
  },
  {
    description: "Drag'n drop to reorder your list",
    completed: true,
    index: 2,
  },
  {
    description: 'Manage all your list in one place',
    completed: true,
    index: 3,
  },
];
const listContainer = document.querySelector('.list-body-container');

function renderList(itemsArray) {
  const itemsArraySorted = itemsArray.sort((a, b) => a.index - b.index);
  itemsArraySorted.forEach((item) => {
    listContainer.innerHTML += ` <li class="todo-item">
          <div class="checkbox-container">
            <div class="checkbox-bbtn-class">
              <input type="checkbox" class="add-field" id="${item.index}"  />
            </div>
            <div>
              <span class="item-description">${item.description}</span>
            </div>
          </div>
          <img src="${iconMore}" id="more-img" class="more-img-class" alt="more icon" />
        </li><hr/>`;
  });
}

renderList(itemsArray);
