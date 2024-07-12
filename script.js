let woodFloorDiv = document.querySelector('#wood-floor-div')
let setting = document.querySelector('#room');
let wallDiv = document.querySelector('#wall-div');
let floor = document.createElement('img');
let wall = document.createElement('img')
let divider = document.createElement('img');
let inspectMenu = document.querySelector('#inspect-menu')
let inspectText = document.querySelector('#inspect-text');
let gameMask = document.querySelector('#screen-mask');
let inspectImg = document.querySelector('#inspect-image');
let chunkedText = [];
import {rooms} from './javascript/data/rooms.js';
console.log(rooms)
let textCounter = 1;
let prevTextSplitter;
let inspectMenuOpened = false;
function toggleInspectMenu() {
  if (inspectMenuOpened) {
    gameMask.style.visibility='visible';
    inspectMenu.style.visibility='visible';
    inspectMenuOpened = true;
  } else {
    gameMask.style.visibility='hidden';
    inspectMenu.style.visibility='hidden';
    inspectMenuOpened = false;
  }
}
gameMask.addEventListener('click', ()=>{
  if (chunkedText.length >= 1) {
    console.log(textCounter)
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

let textSplitter = 0;

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
      inspectMenu.style.visibility ='visible';
      gameMask.style.visibility='visible';
    })
    setting.appendChild(entityImg);
  })
}
let currRoom = rooms.entrance
newRoom(currRoom);


