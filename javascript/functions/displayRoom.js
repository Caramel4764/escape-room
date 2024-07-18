
import {createRoomElement} from "./createRoomElement.js"
import {locations} from '../data/locations.js'
import {rooms} from '../data/rooms.js'
import { goRoom } from "./goRoom.js";

//this function creates the setting
function displayRoom(currRoom) {
  //update room dom
  createRoomElement(currRoom);
}
function createMapIcons() {
  locations.map((location)=>{
    let mapIcon = document.createElement('img');
    mapIcon.setAttribute('id', location.id);
    mapIcon.setAttribute('class', 'mapIcon');
    mapIcon.style.zIndex=100;
    document.querySelector('#map-icon-div').appendChild(mapIcon);
    for (let i = 1; i < Object.keys(rooms).length; i++) {
      let currRoom = rooms[Object.keys(rooms)[i]];
      if (location.id == Object.keys(rooms)[i]) {
        mapIcon.style.x = currRoom.icon.x;
        mapIcon.src = currRoom.icon.src;
        mapIcon.style.y = currRoom.icon.y;
        mapIcon.style.width = '100px';
        mapIcon.addEventListener('click', ()=>{
          console.log('click')
          //goRoom(Object.keys(rooms)[i]);
          //toggleMap();
        })
        //Object.keys(rooms)[i]
      }
    }
  })
}
export {displayRoom, createMapIcons}