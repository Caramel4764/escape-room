
import {createRoomElement} from "./createRoomElement.js"
const setting = document.querySelector('#room');
let roomContainer = document.querySelector('#room-container');
//this function creates the setting
function displayRoom(currRoom) {
  //update room dom
  createRoomElement(currRoom);
}

export {displayRoom}