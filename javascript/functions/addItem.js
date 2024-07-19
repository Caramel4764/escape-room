import {player} from '../data/player.js';
import { syncInventory } from './syncInventory.js';
import {rooms} from '../data/rooms.js';
import { itemLibrary } from '../data/itemLibrary.js';

let inventory = document.querySelector('#inventory')
function addItem (entity) {
  let newInventoryInfo = {};
  if (typeof entity == 'object') {
    newInventoryInfo = {
      name: entity.name,
      src: entity.src,
      desc: entity.desc,
      selected: false,
    }
  } else {
    for (let i = 0; i < itemLibrary.length; i++) {
      if (itemLibrary[i].name==entity) {
        newInventoryInfo.name = entity;
        newInventoryInfo.src = itemLibrary[i].src;
        newInventoryInfo.desc = itemLibrary[i].desc;
        newInventoryInfo.selected = false;
      }
    }
  }
  player.inventory.push(newInventoryInfo);
  let newItemDiv = document.createElement('div')
  let newItem = document.createElement('img')
  newItem.src=newInventoryInfo.src;
  newItemDiv.appendChild(newItem);
  newItemDiv.setAttribute('id', newInventoryInfo.name)
  newItemDiv.classList.add('item');
  inventory.appendChild(newItemDiv);
  newItemDiv.addEventListener('click', ()=>{
    player.inventory.map((singleItem)=> {
      singleItem.selected = false;
      //target
      if (singleItem.name==newItemDiv.id) {
        singleItem.selected = true;
      }
    })
    syncInventory();
  })
}
export {addItem}
