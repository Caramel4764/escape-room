import {rooms} from './javascript/data/rooms.js';
import {displayRoom} from './javascript/functions/displayRoom.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/goRoom.js';
import {toggleMap} from './javascript/functions/toggleMap.js';
import {createMapIcons} from './javascript/functions/displayRoom.js';
import {addItem} from './javascript/functions/addItem.js';
let flashlight = document.querySelector('#flashlight');
let room = document.querySelector('#room');
room.addEventListener('mousemove', function(e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  flashlight.style.backgroundImage = `radial-gradient(circle 5em at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`;

})
mapIcon.addEventListener('click', function() {
  toggleMap();
})
player.currRoom = rooms.lounge;
displayRoom(player.currRoom);
player.currRoom = rooms.entrance;
displayRoom(player.currRoom);
player.currRoom = rooms.fireplace;
displayRoom(player.currRoom);
player.currRoom = rooms.courtyard;
displayRoom(player.currRoom);
player.currRoom = rooms.attic;
displayRoom(player.currRoom);
goRoom('attic');

createMapIcons();