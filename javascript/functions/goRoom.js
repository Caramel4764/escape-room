import {player} from '../data/player.js';
import {createdRoom} from "../data/createdRoom.js";

function goRoom (currRoom) {
  player.currRoom = currRoom;
  createdRoom.map((room, index) => {
    room.style.visibility = 'hidden';
    if (room.id == player.currRoom) {
      room.style.visibility = 'visible';
    }
  })
}

export {goRoom}