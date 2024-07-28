let map = document.querySelector('#map-div');
import {addItem} from '../item/addItem.js';
import { removeItem } from '../item/removeItem.js';

function toggleMap () {
  if (map.style.visibility == 'visible') {
    map.style.visibility = 'hidden';
  } else {
    map.style.visibility = 'visible';
  addItem('blueLightBulb')
  }
}
export {toggleMap};