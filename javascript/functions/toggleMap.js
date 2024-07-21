let map = document.querySelector('#map-div');
import {addItem} from './addItem.js';
function toggleMap () {
  if (map.style.visibility == 'visible') {
    map.style.visibility = 'hidden';
    //testing
    addItem('flashLightItem')
    addItem('battery')
  } else {
    map.style.visibility = 'visible';
  }
}
export {toggleMap};