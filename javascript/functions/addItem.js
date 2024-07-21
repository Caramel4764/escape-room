import {player} from '../data/player.js';
import { syncInventory } from './syncInventory.js';
import { enlargeItem } from './enlargeItem.js';
import { toggleItemSelection } from './toggleItemSelection.js';
import { checkItemCombination } from './checkItemCombination.js';
import { getItemInfo } from './getItemInfo.js';

let inventory = document.querySelector('#inventory');

function addItem (entity) {
  let newInventoryInfo = getItemInfo(entity);

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
      enlargeItem(newInventoryInfo);
      //inventory item matches library item?
      if (singleItem.name == newItemDiv.id) {
        toggleItemSelection(singleItem);
        checkItemCombination(singleItem);
      } else {
        singleItem.selected = false;
      }
    })
    syncInventory();
  })
}
export {addItem}
