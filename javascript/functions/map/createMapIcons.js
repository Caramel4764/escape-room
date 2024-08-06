import {locations} from '../../data/locations.js'
import {rooms} from '../../data/rooms.js'
import { goRoom } from "../room/goRoom.js";
import { handleMapToggle } from './handleMapToggle.js';
let map = document.querySelector('#map-div');
let dreamMap = document.querySelector("#dream-map");
let dreamMapIcon = document.querySelector("#dream-map-icon-div");
let flashlight = document.querySelector('#flashlight');

function createMapIcons() {
  locations.map((location)=>{
    let mapIconDiv = document.createElement('div');
    mapIconDiv.setAttribute('class', 'map-icon-div');
    let mapIcon = document.createElement('img');
    mapIcon.style.visibility = 'inherit';
    mapIconDiv.style.visibility = 'inherit';
    mapIcon.setAttribute('id', location.id);
    mapIcon.setAttribute('class', 'map-icon-div-img');
    mapIcon.style.zIndex=100;
    for (let i = 1; i < Object.keys(rooms).length; i++) {
      if (location.id == Object.keys(rooms)[i]) {
        let currRoom = rooms[Object.keys(rooms)[i]];
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
          handleMapToggle();
        })
        if (currRoom.isDream) {
          document.querySelector('#dream-map-icon-div').appendChild(mapIconDiv);
        } else {
          document.querySelector('#map-icon-div').appendChild(mapIconDiv);
        }
        mapIconDiv.appendChild(mapIcon);
      }
    }
  })
}
export {createMapIcons}