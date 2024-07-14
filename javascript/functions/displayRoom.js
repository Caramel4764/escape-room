import {inspectMenuInfo} from '../data/inspectInfoMenu.js'
import {displayInspect} from './displayInspectMenu.js';
import {toggleInspectMenu} from './toggleInspectMenu.js';
import {addItem} from './addItem.js'
import {inventoryInfo} from '../data/inventory.js';
import {player} from "../data/player.js"
import {createRoomElement} from "./createRoomElement.js"
import {resetSelectedItem} from "./resetSelectedItem.js"
import { syncInventory } from './syncInventory.js';
const setting = document.querySelector('#room');
const inspectText = document.querySelector('#inspect-text');
const inspectImg = document.querySelector('#inspect-image');

//this function creates the setting
function displayRoom(currRoom) {
  //update room dom
  createRoomElement(currRoom);
  //gives interactivity
  currRoom.entities.map((entity)=>{
    let entityImg = document.createElement("img");
    entityImg.src=entity.src;
    entityImg.style.top=entity.dims.y;
    entityImg.style.left=entity.dims.x;
    entityImg.style.width=entity.dims.width;
    entityImg.style.zIndex=entity.dims.z;
    entityImg.addEventListener('click', () => {
      displayInspect(entity.desc, 100);
      inspectImg.src = entity.src;
      toggleInspectMenu();
      //if item, add to inventory
      if (entity.isItem) {
        addItem(entity);
        setting.removeChild(entityImg);
      }
      if (entity.puzzle && entity.puzzle.type=='item' && player.selectedItem.name == entity.puzzle.itemNeeded) {
        displayInspect(entity.puzzle.solveDescription, 100);
        for (let i = 0; i < inventoryInfo.length; i++) {
          if (inventoryInfo[i].name == entity.puzzle.itemNeeded) {
            inventoryInfo.splice(i, 1);
            inventory.removeChild(inventory.children[i]);
            resetSelectedItem();
          }
        }
      } else if (entity.puzzle && entity.puzzle.type=='item' && player.selectedItem.name != 'none' && player.selectedItem.name && player.selectedItem.name!=entity.puzzle.itemNeeded) {
        displayInspect("Unfortunately, that doesn't go there", 100);
      }
      inspectText.innerHTML = inspectMenuInfo.chunkedText[0];
    })
    setting.appendChild(entityImg);
  })
}

export {displayRoom}