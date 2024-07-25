import {rooms} from './javascript/data/rooms.js';
import {createRoomElement} from './javascript/functions/room/createRoomElement.js';
import {player} from './javascript/data/player.js';
import {goRoom} from './javascript/functions/room/goRoom.js';
import {toggleMap} from './javascript/functions/map/toggleMap.js';
import {toggle} from './javascript/functions/toggle.js';
import {createMapIcons} from './javascript/functions/map/createMapIcons.js';
import { mountFlashlight } from './javascript/functions/mountFlashlight.js';
import { createDesktopIcon } from './javascript/functions/createDesktopIcon.js';
import { laptopFiles } from './javascript/data/laptopFiles.js'; 
let computerScreen = document.getElementById('computer-content');
let computerPasswordBtn = document.getElementById('password-btn');
let computerDiv = document.querySelector('#computer-screen')
let computerInput= document.getElementById('password-input');
let exitArrow = document.getElementById('exit-arrow');
//let fileMenu = document.getElementById('file-menu');
function display(fileMenu){
  toggle(fileMenu);
}
//computerPasswordBtn.addEventListener('click', function() {
  //if (computerInput.value == '123') {
    let desktop = document.createElement('div');
    desktop.setAttribute('id', 'desktop');
    computerScreen.textContent='';
    let fileMenu = document.createElement('div');
    fileMenu.setAttribute('id', 'file-menu');
    fileMenu.style.visibility = 'hidden';

    fileMenu.classList.add('screenMenu');
    let centerFileMenuDiv = document.createElement('div');
    centerFileMenuDiv.appendChild(fileMenu);
    centerFileMenuDiv.classList.add('centerDiv');
    centerFileMenuDiv.setAttribute('id', 'centerFileMenuDiv');
    desktop.appendChild(centerFileMenuDiv);
    laptopFiles.forEach(fileInfo => {
      createDesktopIcon({'parent':desktop, 'fileDom':fileMenu,'type':fileInfo.type, x:fileInfo.x, y:fileInfo.y, 'text':fileInfo.fileName, 'fileContent':fileInfo.fileContent});
    })
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