import {player} from '../data/player.js';
import { syncInventory } from './syncInventory.js';
import {rooms} from '../data/rooms.js';
import { itemLibrary } from '../data/itemLibrary.js';
import { resetSelectedItem } from './resetSelectedItem.js';
let inventory = document.querySelector('#inventory');
let openItemImage = document.querySelector('#open-item-image');
let openItemDiv = document.querySelector('#open-item-div');

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
        console.log(itemLibrary[i].src)

        newInventoryInfo.src = itemLibrary[i].src;
        newInventoryInfo.desc = itemLibrary[i].desc;
        newInventoryInfo.selected = false;
        if (itemLibrary[i].openSrc) {
          newInventoryInfo.openSrc = itemLibrary[i].openSrc;
        }
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
      //target
      if (newInventoryInfo.openSrc) {
        openItemImage.src = newInventoryInfo.openSrc;
        if (openItemDiv.style.visibility == 'visible') {
          openItemDiv.style.visibility = 'hidden';
        } else {
          openItemDiv.style.visibility = 'visible';
        }
      }
      if (singleItem.name==newItemDiv.id) {
        if (singleItem.selected == true) {
          singleItem.selected = false;
          resetSelectedItem();
        } else {
          singleItem.selected = true;
        }
      } else {
        singleItem.selected = false;
      }
    })
    syncInventory();
  })
}
export {addItem}
