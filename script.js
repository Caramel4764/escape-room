import {rooms} from './javascript/data/rooms.js';
import {createRoomElement} from './javascript/functions/room/createRoomElement.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/room/goRoom.js';
import {toggleMap} from './javascript/functions/map/toggleMap.js';
import {toggle} from './javascript/functions/toggle.js';
import {createMapIcons} from './javascript/functions/map/createMapIcons.js';
import { mountFlashlight } from './javascript/functions/mountFlashlight.js';
import { createDesktopIcon } from './javascript/functions/createDesktopIcon.js';
let computerScreen = document.getElementById('computer-content');
let computerPasswordBtn = document.getElementById('password-btn');
let computerDiv = document.querySelector('#computer-screen')
let computerInput= document.getElementById('password-input');
let exitArrow = document.getElementById('exit-arrow');

//computerPasswordBtn.addEventListener('click', function() {
  //if (computerInput.value == '123') {
    let desktop = document.createElement('div');
    desktop.setAttribute('id', 'desktop');
    computerScreen.textContent='';
    createDesktopIcon({'parent':desktop, 'type':'file', x:0, y:0, 'text':'text.txt'});
    createDesktopIcon({'parent':desktop, 'type':'folder', x:1, y:2, 'text':'cat'});
    createDesktopIcon({'parent':desktop, 'type':'file', x:3, y:1, 'text':'testing.txt'});
    createDesktopIcon({'parent':desktop, 'type':'file', x:5, y:2, 'text':'family.txt'});


    computerScreen.appendChild(desktop)
  //}
//})
exitArrow.addEventListener('click', function() {
  toggle(computerDiv);
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