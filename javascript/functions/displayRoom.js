import {inspectMenuInfo} from '../data/inspectInfoMenu.js'
import {displayInspect} from './displayInspectMenu.js';
import {toggleInspectMenu} from './toggleInspectMenu.js';
import {addItem} from './addItem.js'
import {inventoryInfo} from '../data/inventory.js';
import {player} from "../data/player.js"
import {resetSelectedItem} from "./resetSelectedItem.js"
import { syncInventory } from './syncInventory.js';
const setting = document.querySelector('#room');
const inspectText = document.querySelector('#inspect-text');
const inspectImg = document.querySelector('#inspect-image');

//this function creates the setting
function displayRoom(currRoom) {
  let floor = document.createElement('img')
  floor.src = currRoom.floor;
  floor.setAttribute('id', 'wood-floor');
  let woodFloorDiv = document.createElement('div');
  woodFloorDiv.setAttribute('id', 'wood-floor-div');
  woodFloorDiv.appendChild(floor);
  setting.appendChild(woodFloorDiv);
  let divider = document.createElement('img');
  divider.src = currRoom.divider;
  divider.setAttribute('id', 'wood-floor-divider')
  divider.style.zIndex = '10';
  let wall = document.createElement('img')
  wall.src = currRoom.wall;
  wall.setAttribute('id', 'wall');
  let wallDiv = document.createElement('div');
  wallDiv.setAttribute('id', 'wall-div');
  wallDiv.append(wall);
  setting.appendChild(wallDiv);
  woodFloorDiv.append(divider);
  
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