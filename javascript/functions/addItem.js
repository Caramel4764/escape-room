import {currRoom} from '../../script.js';
const inventory = document.querySelector('#inventory')

function addItem (entity) {
  let newItemDiv = document.createElement('div')
  let newItem = document.createElement('img')
  newItem.src=entity.src;
  newItemDiv.appendChild(newItem);
  newItemDiv.classList.add('item');
  inventory.appendChild(newItemDiv);
  newItemDiv.addEventListener('click', ()=>{
    currRoom.entities.map((entity1)=>{
    //entity1.selected = false;
    //entity1.classList.remove("selectedItem");
    })
    entity.selected = true;
    newItemDiv.classList.add('selectedItem');
    console.log(inventory.children.length)
  })
}
export {addItem}
