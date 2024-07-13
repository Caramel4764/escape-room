import {currRoom} from '../../script.js';
import {inventoryInfo} from '../data/inventory.js';
let inventory = document.querySelector('#inventory')

function addItem (entity) {
  //add item in inventory object
  let newInventoryInfo = {
    name: entity.name,
    src: entity.src,
    desc: entity.desc,
    selected: false,
  }
  inventoryInfo.push(newInventoryInfo);
  //creates new item
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
