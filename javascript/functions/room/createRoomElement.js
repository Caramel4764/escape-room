import {toggleInspectMenu} from '../inspect/toggleInspectMenu.js';
import {inspectMenuInfo} from '../../data/inspectInfoMenu.js'
import {locations} from '../../data/locations.js';
import {itemLibrary} from '../../data/itemLibrary.js';
import { displayPuzzleInspect } from '../inspect/displayPuzzleInspect.js';
import { grabObject } from '../item/grabObject.js';
import { handlePuzzle } from '../handlePuzzle.js';
import { createRoomVisual } from './createRoomVisual.js';
import { showSolvedImg } from '../showSolvedImg.js';
import { displayInspectImg } from '../inspect/displayInspectImg.js';
const inspectImg = document.querySelector('#inspect-image');
const inspectText = document.querySelector('#inspect-text');

function createRoomElement (currRoom) {
  //inspectMenuInfo.entityImg=inspectImg;
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
      //if item, add to inventory
      grabObject(entity, roomContainer, entityImg)
      //solved
      if (entity.puzzle) {
        handlePuzzle(entity, entityImg)
        if (entity.puzzle.isSolved == true) {
          if (entity.puzzle.solveImg) {
          entityImg.src=entity.puzzle.solveImg;
          displayInspectImg(entity.puzzle.solveImg);
          }
        }
      }

      inspectText.textContent = inspectMenuInfo.chunkedText[0];
    })
    //change here
    
    //inspectMenuInfo.entityImg = entityImg;
    //entityImg
    roomContainer.appendChild(entityImg);
  })
  locations.push(roomContainer)
}
export {createRoomElement, showSolvedImg}