let map = document.querySelector('#map-div');
import {addItem} from '../item/addItem.js';
import { removeItem } from '../item/removeItem.js';

function toggleMap () {
  if (map.style.visibility == 'visible') {
    map.style.visibility = 'hidden';
    //testing
    /*addItem('flashLightItem')
    addItem('battery')
    addItem('plush')
    addItem('scissor')*/
  } else {
    map.style.visibility = 'visible';
  }
}
export {toggleMap};