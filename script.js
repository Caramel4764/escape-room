import {rooms} from './javascript/data/rooms.js';
const woodFloorDiv = document.querySelector('#wood-floor-div')
const setting = document.querySelector('#room');
const wallDiv = document.querySelector('#wall-div');
const floor = document.createElement('img');
const wall = document.createElement('img')
const divider = document.createElement('img');
const inspectMenu = document.querySelector('#inspect-menu')
const inspectText = document.querySelector('#inspect-text');
const gameMask = document.querySelector('#screen-mask');
const inspectImg = document.querySelector('#inspect-image');

let chunkedText = [];
let textCounter = 1;
let textSplitter = 0;
let prevTextSplitter;
let inspectMenuOpened = false;

let inspectMenuInfo = {
  opened: false,
  chunkedText: [],
  textCounter: 1,
  textSplitter: 0,
  prevTextSplitter: 0,
}
function toggleInspectMenu() {
  if (inspectMenuOpened) {
    gameMask.style.visibility='hidden';
    inspectMenu.style.visibility='hidden';
    inspectMenuOpened = false;
  } else {
    gameMask.style.visibility='visible';
    inspectMenu.style.visibility='visible';
    inspectMenuOpened = true;
  }
}
gameMask.addEventListener('click', ()=>{
  if (chunkedText.length >= 1) {
      inspectText.innerHTML = chunkedText[textCounter];
      textCounter++;
      if (textCounter >= chunkedText.length) {
        textCounter = 1;
        toggleInspectMenu();

      }
  } else {
    toggleInspectMenu();
  }
})
function displayInspect(text, limit) {
  chunkedText = [];
  textSplitter = 0;
  let snipTime = Math.floor(text.length/limit)+1;
  if (snipTime == 1) {
    return chunkedText.push(text);
  }
  for(let i = 0; i<snipTime;i++) {
    if (i==0) {
      textSplitter = limit;
      while (text[textSplitter] != " " && text[textSplitter] != "") {
        textSplitter++;
      }
      chunkedText.push(text.slice(0, textSplitter));
    } else {
      prevTextSplitter = textSplitter;
      textSplitter = prevTextSplitter + limit;
      while (text[textSplitter] != " " && textSplitter < text.length) {
        textSplitter++;
        if (textSplitter == text.length-1) {
          return chunkedText.push(text.slice(prevTextSplitter, textSplitter));
        }
      }
      chunkedText.push(text.slice(prevTextSplitter, textSplitter))
    }

  }
  return chunkedText;
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
      inspectText.innerHTML= chunkedText[0];
      inspectImg.src=entity.src;
      toggleInspectMenu();
    })
    setting.appendChild(entityImg);
  })
}
let currRoom = rooms.entrance
newRoom(currRoom);


