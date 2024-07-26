import {toggleInspectMenu} from '../inspect/toggleInspectMenu.js';
import {inspectMenuInfo} from '../../data/inspectInfoMenu.js'
import {locations} from '../../data/locations.js';
import {itemLibrary} from '../../data/itemLibrary.js';
import { displayPuzzleInspect } from '../inspect/displayPuzzleInspect.js';
import { grabObject } from '../item/grabObject.js';
import { handlePuzzle } from '../handlePuzzle.js';
import { createRoomVisual } from './createRoomVisual.js';

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
  let roomContainer = createRoomVisual(currRoom);
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
      if (entity.puzzle && entity.puzzle.type=='interact') {
        toggleInspectMenu();
      } else {
        toggleInspectMenu();
        //toggleInspectMenu
      }
      //if item, add to inventory
      grabObject(entity, roomContainer, entityImg)
      //solved
      if (entity.puzzle) {
        handlePuzzle(entity, entityImg)
      }
      inspectText.textContent = inspectMenuInfo.chunkedText[0];
      toggleInspectMenu();
    })
    roomContainer.appendChild(entityImg);
  })
  locations.push(roomContainer)
}
export {createRoomElement, showSolvedImg}