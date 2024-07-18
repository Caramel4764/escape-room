import {rooms} from './javascript/data/rooms.js';
import {displayRoom} from './javascript/functions/displayRoom.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/goRoom.js';
import {toggleMap} from './javascript/functions/toggleMap.js';
import {locations} from './javascript/data/locations.js';
import {createMapIcons} from './javascript/functions/displayRoom.js';
let fireplaceBtn = document.querySelector('#fireplace');
let entranceBtn = document.querySelector('#entrance');
let loungeBtn = document.querySelector('#lounge');
let courtyardBtn = document.querySelector('#courtyard');
let mapBtn = document.querySelector('#mapIcon');


mapIcon.addEventListener('click', function() {
  toggleMap();
})
/*entranceBtn.addEventListener('click', function() {
  goRoom('entrance');
  toggleMap();
})
loungeBtn.addEventListener('click', function() {
  goRoom('lounge');
  toggleMap();
})
fireplaceBtn.addEventListener('click', function() {
  goRoom('fireplace');
  toggleMap();
})
courtyardBtn.addEventListener('click', function() {
  goRoom('courtyard');
  toggleMap();
})*/
player.currRoom = rooms.lounge;
displayRoom(player.currRoom);
player.currRoom = rooms.entrance;
displayRoom(player.currRoom);
player.currRoom = rooms.fireplace;
displayRoom(player.currRoom);
player.currRoom = rooms.courtyard;
displayRoom(player.currRoom);
goRoom('courtyard');

createMapIcons();