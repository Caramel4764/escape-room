import {inspectMenuInfo} from '../../data/inspectInfoMenu.js'
const gameMask = document.querySelector('#screen-mask');
const inspectMenu = document.querySelector('#inspect-menu')
const inspectText = document.querySelector('#inspect-text');

gameMask.addEventListener('click', ()=>{
  if (inspectMenuInfo.chunkedText.length > 1) {
      inspectText.innerHTML = inspectMenuInfo.chunkedText[inspectMenuInfo.textCounter];
      inspectMenuInfo.textCounter++;
      if (inspectMenuInfo.textCounter > inspectMenuInfo.chunkedText.length) {
        inspectMenuInfo.textCounter = 1;
        toggleInspectMenu('hidden');
      }
  } else {
    toggleInspectMenu('hidden');
  }
})

function toggleInspectMenu(direction) {
  if (direction) {
  } else {
    direction = 'show';
  }
  inspectText.textContent = inspectMenuInfo.chunkedText[0];
  if (direction == 'hidden') {
    gameMask.style.visibility='hidden';
    inspectMenu.style.visibility='hidden';
    inspectMenuInfo.opened = false;
  } else {
    gameMask.style.visibility='visible';
    inspectMenu.style.visibility='visible';
    inspectMenuInfo.opened = true;
  }
}

export {toggleInspectMenu}