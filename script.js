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
let computerScreenDiv = document.getElementById('computer-screen-div');
let computerScreenImage = document.getElementById('computer-screen-image');
let fileMenu = document.createElement('div');
let computerScreenImageDiv = document.getElementById('computer-screen-image-div');

computerScreen.style.visibility = 'hidden';
computerScreenDiv.style.visibility = 'hidden';
computerDiv.style.visibility = 'hidden';

computerPasswordBtn.addEventListener('click', function() {
  if (computerInput.value == 'Password123!') {
    let windowName = document.createElement('p');
    windowName.setAttribute('id', 'window-name');
    let desktop = document.createElement('div');
    desktop.setAttribute('id', 'desktop');
    computerScreen.textContent='';
    let fileContent = document.createElement('div');
    let fileCloseBtn = document.createElement('p');
    fileCloseBtn.textContent = 'X';
    fileCloseBtn.setAttribute('id', 'file-close-btn');
    fileMenu.setAttribute('id', 'file-menu');
    fileMenu.style.visibility = 'hidden';
    fileMenu.appendChild(fileContent);
    fileCloseBtn.addEventListener('click', function() {
      toggle(fileMenu);
    })
    fileContent.classList.add('screenMenu');
    fileContent.setAttribute('id', 'file-content');
    let centerFileMenuDiv = document.createElement('div');
    centerFileMenuDiv.classList.add('centerDiv');
    centerFileMenuDiv.setAttribute('id', 'centerFileMenuDiv');
    desktop.appendChild(centerFileMenuDiv);
    centerFileMenuDiv.appendChild(fileMenu);
    laptopFiles.forEach(fileInfo => {
      createDesktopIcon({'parent':desktop, 'windowName':windowName,'fileMenu':fileMenu,'fileContentDiv':fileContent,'type':fileInfo.type, x:fileInfo.x, y:fileInfo.y, 'text':fileInfo.fileName, 'fileContent':fileInfo.fileContent});
    })
    computerScreen.appendChild(desktop);
    let fileHeader = document.createElement('div');
    fileHeader.setAttribute('id', 'file-header');
    fileHeader.appendChild(fileCloseBtn);
    fileMenu.appendChild(fileHeader)
    fileHeader.appendChild(windowName);
  }
})
computerScreenDiv.addEventListener('click', function() {
  console.log(event.target.id)
  if (event.target.id == 'computer-screen-div' || event.target.id=='computer-screen-image-div') {
    computerDiv.style.visibility = 'hidden';
    fileMenu.style.visibility = 'hidden';
    computerScreen.style.visibility = 'hidden';
    computerScreenDiv.style.visibility = 'hidden';
  }
})

mapIcon.addEventListener('click', function() {
  toggleMap();
})
for (let i = 1; i < Object.keys(rooms).length; i++) {
  player.currRoom = rooms[Object.keys(rooms)[i]];
  createRoomElement(player.currRoom);
}
goRoom('attic');
createMapIcons();
mountFlashlight();