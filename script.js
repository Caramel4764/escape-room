import {rooms} from './javascript/data/rooms.js';
import {createRoomElement} from './javascript/functions/room/createRoomElement.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/room/goRoom.js';
import {toggleMap} from './javascript/functions/map/toggleMap.js';
import {createMapIcons} from './javascript/functions/map/createMapIcons.js';
import { mountFlashlight } from './javascript/functions/mountFlashlight.js';
let computerScreen = document.getElementById('computer-content');
let computerPasswordBtn = document.getElementById('password-btn');
let computerInput= document.getElementById('password-input');

computerPasswordBtn.addEventListener('click', function() {
  if (computerInput.value == '123') {
    computerScreen.textContent='correct';
  }
})
mapIcon.addEventListener('click', function() {
  toggleMap();
})
for (let i = 1; i < Object.keys(rooms).length; i++) {
  player.currRoom = rooms[Object.keys(rooms)[i]];
  createRoomElement(player.currRoom);
}
goRoom('bedroom');
createMapIcons();
mountFlashlight();