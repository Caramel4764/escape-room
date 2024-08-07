import { player } from "../data/player.js";

function toggle(domElement, isOpened) {
  if (isOpened != undefined) {
    if (isOpened == true) {
      domElement.style.visibility = 'visible';
      //if (domElement.id == 'dream-map') {
         //console.log('1')
      //}
    } else {
      domElement.style.visibility = 'hidden';
      //if (domElement.id == 'dream-map') {
        //console.log('2');
        //player.isMapOpened = true;
      //}
    }
    return;
  }
  if (domElement.style.visibility == 'hidden') {
    domElement.style.visibility = 'visible';
    domElement.style.pointerEvents = 'auto';
    /*if (domElement.id == 'dream-map' || domElement.id == 'map-div') {
      console.log('3')
      player.isMapOpened = true;
    }*/
  } else {
    domElement.style.visibility = 'hidden';
    domElement.style.pointerEvents = 'none';
    //if (domElement.id == 'dream-map') {
      //console.log('4')
        //player.isMapOpened = false;

    //}
  }
}
export {toggle}