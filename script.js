import {rooms} from './javascript/data/rooms.js';
import {inspectMenuInfo} from './javascript/data/inspectInfoMenu.js';
import {toggleInspectMenu} from './javascript/functions/toggleInspectMenu.js';
const woodFloorDiv = document.querySelector('#wood-floor-div')
const setting = document.querySelector('#room');
const wallDiv = document.querySelector('#wall-div');
const floor = document.createElement('img');
const wall = document.createElement('img')
const divider = document.createElement('img');
const inspectText = document.querySelector('#inspect-text');
const inspectImg = document.querySelector('#inspect-image');

const gameMask = document.querySelector('#screen-mask');
const inspectMenu = document.querySelector('#inspect-menu')


gameMask.addEventListener('click', ()=>{
  if (inspectMenuInfo.chunkedText.length >= 1) {
      inspectText.innerHTML = inspectMenuInfo.chunkedText[inspectMenuInfo.textCounter];
      inspectMenuInfo.textCounter++;
      if (inspectMenuInfo.textCounter >= inspectMenuInfo.chunkedText.length) {
        inspectMenuInfo.textCounter = 1;
        toggleInspectMenu();

      }
  } else {
    toggleInspectMenu();
  }
})
function displayInspect(text, limit) {
  inspectMenuInfo.chunkedText = [];
  inspectMenuInfo.textSplitter = 0;
  let snipTime = Math.floor(text.length/limit)+1;
  if (snipTime == 1) {
    return inspectMenuInfo.chunkedText.push(text);
  }
  for(let i = 0; i<snipTime;i++) {
    if (i==0) {
      inspectMenuInfo.textSplitter = limit;
      while (text[inspectMenuInfo.textSplitter] != " " && text[inspectMenuInfo.textSplitter] != "") {
        inspectMenuInfo.textSplitter++;
      }
      inspectMenuInfo.chunkedText.push(text.slice(0, inspectMenuInfo.textSplitter));
    } else {
      inspectMenuInfo.prevTextSplitter = inspectMenuInfo.textSplitter;
      inspectMenuInfo.textSplitter = inspectMenuInfo.prevTextSplitter + limit;
      while (text[inspectMenuInfo.textSplitter] != " " && inspectMenuInfo.textSplitter < text.length) {
        inspectMenuInfo.textSplitter++;
        if (inspectMenuInfo.textSplitter == text.length-1) {
          return inspectMenuInfo.chunkedText.push(text.slice(inspectMenuInfo.prevTextSplitter, inspectMenuInfo.textSplitter));
        }
      }
      inspectMenuInfo.chunkedText.push(text.slice(inspectMenuInfo.prevTextSplitter, inspectMenuInfo.textSplitter))
    }

  }
  return inspectMenuInfo.chunkedText;
}
function newRoom(room) {
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
      inspectText.innerHTML= inspectMenuInfo.chunkedText[0];
      inspectImg.src=entity.src;
      toggleInspectMenu();
    })
    setting.appendChild(entityImg);
  })
}
let currRoom = rooms.entrance
newRoom(currRoom);


