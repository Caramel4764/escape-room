import {inspectMenuInfo} from '../data/inspectInfoMenu.js'
const gameMask = document.querySelector('#screen-mask');
const inspectMenu = document.querySelector('#inspect-menu')

function toggleInspectMenu() {
  if (inspectMenuInfo.opened) {
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