import {rooms} from './javascript/data/rooms.js';
import {inspectMenuInfo} from './javascript/data/inspectInfoMenu.js';
import {toggleInspectMenu} from './javascript/functions/toggleInspectMenu.js';
import {displayInspect} from './javascript/functions/displayInspectMenu.js';
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


