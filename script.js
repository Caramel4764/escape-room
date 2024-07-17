import {rooms} from './javascript/data/rooms.js';
import {displayRoom} from './javascript/functions/displayRoom.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/goRoom.js';
let fireplaceBtn = document.querySelector('#fireplace-btn');
let entranceBtn = document.querySelector('#entrance-btn');
let loungeBtn = document.querySelector('#lounge-btn');
entranceBtn.addEventListener('click', function() {
  goRoom('entrance');
})
loungeBtn.addEventListener('click', function() {
  goRoom('lounge');
})
fireplaceBtn.addEventListener('click', function() {
  goRoom('fireplace');
})
player.currRoom = rooms.lounge;
displayRoom(player.currRoom);
player.currRoom = rooms.entrance;
displayRoom(player.currRoom);
player.currRoom = rooms.fireplace;
displayRoom(player.currRoom);
player.currRoom = rooms.courthouse;
displayRoom(player.currRoom);
goRoom('courthouse');