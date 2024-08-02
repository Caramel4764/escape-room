import {locations} from '../../data/locations.js'
import {rooms} from '../../data/rooms.js'
import { goRoom } from "../room/goRoom.js";
import {toggleMap} from "./toggleMap.js";
let flashlight = document.querySelector('#flashlight');

//this function creates the setting
function createMapIcons() {
  let mapIconDiv;
  let mapIcon;
  let currRoom;
  locations.map((location)=>{
    for (let i = 1; i < Object.keys(rooms).length; i++) {
      if (location.id == Object.keys(rooms)[i]) {
          currRoom = rooms[Object.keys(rooms)[i]];
              console.log(currRoom)

        //if (!currRoom.isDream) {
          mapIconDiv = document.createElement('div');
          mapIconDiv.setAttribute('class', 'map-icon-div');
          mapIcon = document.createElement('img');
          mapIcon.setAttribute('id', location.id);
          mapIcon.setAttribute('class', 'map-icon-div-img');
          mapIcon.style.zIndex=100;
          mapIconDiv.style.left = currRoom.icon.x;
          mapIcon.src = currRoom.icon.src;
          mapIconDiv.style.top = currRoom.icon.y;
          mapIconDiv.addEventListener('click', ()=>{
            goRoom(currRoom.name);
            if (currRoom.isDark) {                flashlight.style.visibility = 'visible';
            } else {
            flashlight.style.visibility = 'hidden';
            }
            toggleMap();
          })
        //}
      }
    }
    //console.log(currRoom)
    //console.log(currRoom.isDream)
    if (currRoom.isDream) {
      document.querySelector('#dream-map-icon-div').appendChild(mapIconDiv);
      console.log('here')
    } else {
      document.querySelector('#map-icon-div').appendChild(mapIconDiv);
    }
    mapIconDiv.appendChild(mapIcon);
  })
}
export {createMapIcons}