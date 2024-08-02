import { furnitures } from "../../data/furniture.js"
import { rooms } from "../../data/rooms.js"
import { displayInspectImg } from "../inspect/displayInspectImg.js";
import { displayPuzzleInspect } from "../inspect/displayPuzzleInspect.js";
import { itemLibrary } from "../../data/itemLibrary.js";
import { showSolvedImg } from "../showSolvedImg.js";
import { locations } from "../../data/locations.js";
import { grabObject } from "../item/grabObject.js";
import {inspectMenuInfo} from '../../data/inspectInfoMenu.js'

const inspectImg = document.querySelector('#inspect-image');
const inspectText = document.querySelector('#inspect-text');

let roomContainer;

function createSingleRoomObjectFunction (entityName) {
  furnitures.map((entity)=>{
    if (entity.name == entityName) {
      for (let i = 1; i < locations.length; i++) {
        if (entity.room == locations[i].id) {
          console.log('roomFound')
          roomContainer = locations[i];
        }
      }
      let entityImg = document.createElement("img");
      entityImg.setAttribute('id', entity.name);
      //rooms[entity.room].entities[index].domElement = entityImg;
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
      roomContainer.appendChild(entityImg);
    }
  })
}

function createSingleRoomObject (entityName, delay) {
  if (delay) {
    setTimeout(function(){
      createSingleRoomObjectFunction(entityName)
    }, delay)
  } else {
    createSingleRoomObjectFunction(entityName)
  }
}

export {createSingleRoomObject}