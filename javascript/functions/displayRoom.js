
import {createRoomElement} from "./createRoomElement.js"

//this function creates the setting
function displayRoom(currRoom) {
  //update room dom
  createRoomElement(currRoom);
}

export {displayRoom}