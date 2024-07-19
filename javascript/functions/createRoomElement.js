import {toggleInspectMenu} from './toggleInspectMenu.js';
import { displayInspect } from "./displayInspectMenu.js";
import {inspectMenuInfo} from '../data/inspectInfoMenu.js'
import {addItem} from './addItem.js'
import {player} from "../data/player.js"
import {resetSelectedItem} from "./resetSelectedItem.js"
import {locations} from '../data/locations.js';
const setting = document.querySelector('#room');
const inspectImg = document.querySelector('#inspect-image');
const inspectText = document.querySelector('#inspect-text');

function showImg (entity, entityImg) {
  if (entity.puzzle && entity.puzzle.isSolved&&entity.puzzle.solveImg) {
    entityImg.src=entity.puzzle.solveImg;
  } else {
    entityImg.src=entity.src;
  }
}
function createRoomElement (currRoom) {
  let roomContainer = document.createElement('div');
  roomContainer.classList.add('room-container');
  roomContainer.setAttribute('id', currRoom.name);
  setting.appendChild(roomContainer);
  let floor = document.createElement('img')
  floor.src = currRoom.floor;
  floor.setAttribute('id', 'wood-floor');
  let woodFloorDiv = document.createElement('div');
  woodFloorDiv.setAttribute('id', 'wood-floor-div');
  woodFloorDiv.appendChild(floor);
  roomContainer.appendChild(woodFloorDiv);
  let wall = document.createElement('img')
  wall.src = currRoom.wall;
  wall.setAttribute('id', 'wall');
  let wallDiv = document.createElement('div');
  wallDiv.setAttribute('id', 'wall-div');
  wallDiv.append(wall);
  roomContainer.appendChild(wallDiv);
  //gives interactivity
  currRoom.entities.map((entity)=>{
    let entityImg = document.createElement("img");
    showImg(entity, entityImg);
    entityImg.style.top=entity.dims.y;
    entityImg.style.left=entity.dims.x;
    entityImg.style.width=entity.dims.width;
    entityImg.style.zIndex=entity.dims.z;
    entityImg.addEventListener('click', () => {
      if (entity.puzzle && entity.puzzle.isSolved) {
        displayInspect(entity.puzzle.afterDesc, 100);
      } else {
      displayInspect(entity.desc, 100);
      }
      showImg(entity, inspectImg);
      toggleInspectMenu();
      //if item, add to inventory
      if (entity.isItem) {
        addItem(entity);
        roomContainer.removeChild(entityImg);
      }
      //solved
      if (entity.puzzle && entity.puzzle.type=='item' && player.selectedItem.name == entity.puzzle.itemNeeded) {
        displayInspect(entity.puzzle.solveDescription, 100);
        entity.puzzle.isSolved=true;
        if (entity.puzzle.solveFunction) {
          entity.puzzle.solveFunction();
          showImg(entity, entityImg);
        }
        for (let i = 0; i < player.inventory.length; i++) {
          if (player.inventory[i].name == entity.puzzle.itemNeeded) {
            player.inventory.splice(i, 1);
            inventory.removeChild(inventory.children[i]);
            resetSelectedItem();
          }
        }
      } else if (entity.puzzle && entity.puzzle.type=='item' && player.selectedItem.name != 'none' && player.selectedItem.name && player.selectedItem.name!=entity.puzzle.itemNeeded) {
        displayInspect("Unfortunately, that doesn't go there", 100);
      }
      inspectText.innerHTML = inspectMenuInfo.chunkedText[0];
    })
    roomContainer.appendChild(entityImg);
  })
  locations.push(roomContainer)
}
export {createRoomElement}