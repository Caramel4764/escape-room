import {inspectMenuInfo} from '../data/inspectInfoMenu.js'
import {displayInspect} from './displayInspectMenu.js';
import {toggleInspectMenu} from './toggleInspectMenu.js';
import {addItem} from './addItem.js'
import {player} from "../data/player.js"
import { syncInventory } from './syncInventory.js';
const floor = document.createElement('img');
const wall = document.createElement('img')
const divider = document.createElement('img');
const woodFloorDiv = document.querySelector('#wood-floor-div')
const setting = document.querySelector('#room');
const wallDiv = document.querySelector('#wall-div');
const inspectText = document.querySelector('#inspect-text');
const inspectImg = document.querySelector('#inspect-image');
import {inventoryInfo} from '../data/inventory.js';

//this function creates the setting
function displayRoom(currRoom) {
  floor.src = currRoom.floor;
  floor.style.y='200px';
  floor.setAttribute('id', 'wood-floor');
  woodFloorDiv.appendChild(floor);
  wall.src = currRoom.wall;
  wallDiv.append(wall);
  divider.src = currRoom.divider;
  divider.style.zIndex = '10';
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
        //console.log(entityImg)
        setting.removeChild(entityImg);
      }
      if (entity.isItemNeeded==true && player.selectedItem.name==entity.itemNeeded) {
        displayInspect(entity.solveDescription, 100);
        //setting.removeChild(player.selectedItemDom);
        //inventory.removeChild(inventory.children[0]);
        //remove from listgit
        if (inventory.children[0] == 't') {
          inventoryInfo(inventory.children[0])
        }

      } else if (entity.isItemNeeded==true && player.selectedItem.name!='none' && player.selectedItem.name!=entity.itemNeeded) {
        displayInspect("Unfortunately, that doesn't go there", 100);
      }
      inspectText.innerHTML = inspectMenuInfo.chunkedText[0];
    })
    setting.appendChild(entityImg);
  })
}

export {displayRoom}