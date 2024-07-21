
import {createRoomElement} from "./createRoomElement.js"
import {locations} from '../../data/locations.js'
import {rooms} from '../../data/rooms.js'
import { goRoom } from "./goRoom.js";
import {toggleMap} from "../toggleMap.js";
let flashlight = document.querySelector('#flashlight');

//this function creates the setting
function displayRoom(currRoom) {
  //update room dom
  createRoomElement(currRoom);
}
function createMapIcons() {
  locations.map((location)=>{
    let mapIconDiv = document.createElement('div');
    mapIconDiv.setAttribute('class', 'map-icon-div');

    let mapIcon = document.createElement('img');
    mapIcon.setAttribute('id', location.id);
    mapIcon.setAttribute('class', 'map-icon-div-img');
    mapIcon.style.zIndex=100;
    for (let i = 1; i < Object.keys(rooms).length; i++) {
      let currRoom = rooms[Object.keys(rooms)[i]];
      if (location.id == Object.keys(rooms)[i]) {
        mapIconDiv.style.left = currRoom.icon.x;
        mapIcon.src = currRoom.icon.src;
        mapIconDiv.style.top = currRoom.icon.y;
        mapIconDiv.addEventListener('click', ()=>{
          goRoom(currRoom.name);
          if (currRoom.isDark) {
            flashlight.style.visibility = 'visible';
          } else {
            flashlight.style.visibility = 'hidden';
          }
          toggleMap();
        })
      }
    }
    document.querySelector('#map-icon-div').appendChild(mapIconDiv);
    mapIconDiv.appendChild(mapIcon);
  })
}
export {displayRoom, createMapIcons}