import {rooms} from './javascript/data/rooms.js';
import {displayRoom} from './javascript/functions/displayRoom.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/goRoom.js';
import {toggleMap} from './javascript/functions/toggleMap.js';
let fireplaceBtn = document.querySelector('#fireplace-btn');
let entranceBtn = document.querySelector('#entrance-btn');
let loungeBtn = document.querySelector('#lounge-btn');
let courtyardBtn = document.querySelector('#courtyard-btn');
let mapBtn = document.querySelector('#mapIcon');

mapIcon.addEventListener('click', function() {
  toggleMap();
})
entranceBtn.addEventListener('click', function() {
  goRoom('entrance');
})
loungeBtn.addEventListener('click', function() {
  goRoom('lounge');
})
fireplaceBtn.addEventListener('click', function() {
  goRoom('fireplace');
})
courtyardBtn.addEventListener('click', function() {
  goRoom('courtyard');
})
player.currRoom = rooms.lounge;
displayRoom(player.currRoom);
player.currRoom = rooms.entrance;
displayRoom(player.currRoom);
player.currRoom = rooms.fireplace;
displayRoom(player.currRoom);
player.currRoom = rooms.courtyard;
displayRoom(player.currRoom);
goRoom('courtyard');