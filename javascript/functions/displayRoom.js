
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
    for (let i = 1; i < Object.keys(rooms).length; i++) {
      if (location.id == Object.keys(rooms)[i]) {
        console.log(location)
        location.addEventListener('click', ()=>{
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