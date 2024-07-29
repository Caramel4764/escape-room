import {player} from "../data/player.js";
import {rooms} from "../data/rooms.js";
let room = document.querySelector('#room');
let roomBox = room.getBoundingClientRect();
let flashlight = document.querySelector('#flashlight');

function mountFlashlight() {
  flashlight.style.visibility = 'hidden';

  if (!rooms[player.currRoom].isDark) {
  } else {
    //change this to turn on flashlight
    flashlight.style.visibility = 'hidden';
  }
  let mouseX;
  let mouseY;
  room.addEventListener('mousemove', function(e) {
    if (rooms[player.currRoom].isDark) {
      mouseX = e.clientX-roomBox.x;
      mouseY = e.clientY-roomBox.y;
      flashlight.style.backgroundImage = `radial-gradient(circle 5em at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1))`;
    }
  })
}

export {mountFlashlight}