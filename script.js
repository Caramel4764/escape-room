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
//let fileContent = document.getElementById('file-menu');
function display(fileContent){
  toggle(fileContent);
}
//computerPasswordBtn.addEventListener('click', function() {
  //if (computerInput.value == '123') {
    let desktop = document.createElement('div');
    desktop.setAttribute('id', 'desktop');
    computerScreen.textContent='';
    let fileContent = document.createElement('div');
    //fileContent.setAttribute('id', 'file-menu');
    let fileCloseBtn = document.createElement('p');
    fileCloseBtn.textContent = 'X';
    fileCloseBtn.setAttribute('id', 'file-close-btn');

    let fileMenu = document.createElement('div');
    fileMenu.setAttribute('id', 'file-menu');
    fileMenu.appendChild(fileContent);
    fileCloseBtn.addEventListener('click', function() {
      toggle(fileMenu);
    })
    fileContent.classList.add('screenMenu');
    let centerFileMenuDiv = document.createElement('div');
    centerFileMenuDiv.appendChild(fileContent);
    centerFileMenuDiv.classList.add('centerDiv');
    centerFileMenuDiv.setAttribute('id', 'centerFileMenuDiv');
    desktop.appendChild(centerFileMenuDiv);
    centerFileMenuDiv.appendChild(fileMenu);
    laptopFiles.forEach(fileInfo => {
      createDesktopIcon({'parent':desktop, 'fileMenu':fileMenu,'fileContent':fileContent,'type':fileInfo.type, x:fileInfo.x, y:fileInfo.y, 'text':fileInfo.fileName, 'fileContent':fileInfo.fileContent});
    })
    computerScreen.appendChild(desktop);
    let fileHeader = document.createElement('div');
    fileHeader.setAttribute('id', 'file-header');

    fileHeader.appendChild(fileCloseBtn);
    fileMenu.appendChild(fileHeader)
    fileMenu.style.visibility = 'hidden';


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