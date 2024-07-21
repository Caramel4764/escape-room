import {toggleInspectMenu} from './toggleInspectMenu.js';
import { displayInspect } from "./displayInspectMenu.js";
import {inspectMenuInfo} from '../data/inspectInfoMenu.js'
import {addItem} from './item/addItem.js'
import {player} from "../data/player.js"
import {resetSelectedItem} from "./resetSelectedItem.js"
import {locations} from '../data/locations.js';
import {itemLibrary} from '../data/itemLibrary.js';
import { displayPuzzleInspect } from './displayPuzzleInspect.js';
import { grabObject } from './grabObject.js';
import { solvePuzzle } from './solvePuzzle.js';
const setting = document.querySelector('#room');
const inspectImg = document.querySelector('#inspect-image');
const inspectText = document.querySelector('#inspect-text');

function showSolvedImg (entity, entityImg) {
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
    showSolvedImg(entity, entityImg);
    entityImg.style.top=entity.dims.y;
    entityImg.style.left=entity.dims.x;
    entityImg.style.width=entity.dims.width;
    entityImg.style.zIndex=entity.dims.z;
    //if item, add to item library
    if (entity.isItem) {
      itemLibrary.push(entity);
    }
    entityImg.addEventListener('click', () => {
      displayPuzzleInspect(entity)
      showSolvedImg(entity, inspectImg);
      toggleInspectMenu();
      //if item, add to inventory
      grabObject(entity, roomContainer, entityImg)
      //solved
      if (entity.puzzle && entity.puzzle.type=='item' && player.selectedItem.name == entity.puzzle.itemNeeded) {
        solvePuzzle(entity);
        for (let i = 0; i < player.inventory.length; i++) {
          if (player.inventory[i].name == entity.puzzle.itemNeeded) {
            player.inventory.splice(i, 1);
            console.log(inventory)
            inventory.removeChild(inventory.children[i]);
            resetSelectedItem();
          }
        }
      } else if (entity.puzzle && entity.puzzle.type=='item' && player.selectedItem.name != 'none' && player.selectedItem.name && player.selectedItem.name!=entity.puzzle.itemNeeded) {
        displayInspect("Unfortunately, that doesn't go there", 100);
      } else if (entity.puzzle && entity.puzzle.type=='inspect') {
        if (entity.puzzle.solveFunction && entity.puzzle.isSolved==false) {
          entity.puzzle.solveFunction();
          displayInspect(entity.desc, 100);
        } else {
          displayInspect(entity.puzzle.afterDesc, 100);
        }
        entity.puzzle.isSolved=true;
        showSolvedImg(entity, entityImg);
      }
      inspectText.innerHTML = inspectMenuInfo.chunkedText[0];
    })
    roomContainer.appendChild(entityImg);
  })
  locations.push(roomContainer)
}
export {createRoomElement, showSolvedImg}