import {player} from '../data/player.js';
import {locations} from "../data/locations.js";

function goRoom (currRoom) {
  player.currRoom = currRoom;
  locations.map((room, index) => {
    room.style.visibility = 'hidden';
    if (room.id == player.currRoom) {
      room.style.visibility = 'visible';
    }
  })
}

export {goRoom}