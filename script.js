import {rooms} from './javascript/data/rooms.js';
import {displayRoom} from './javascript/functions/displayRoom.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/goRoom.js';
import {toggleMap} from './javascript/functions/toggleMap.js';
import {createMapIcons} from './javascript/functions/displayRoom.js';
import {addItem} from './javascript/functions/addItem.js';
let flashlight = document.querySelector('#flashlight');

flashlight.addEventListener('mousemove', function(e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  console.log(mouseX)
  
  //background-image: radial-gradient(circle 5em at 50% 50%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  flashlight.style.backgroundImage = `radial-gradient(circle 5em at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`;
  //flashlight.style.top = mouseY + 'px';
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