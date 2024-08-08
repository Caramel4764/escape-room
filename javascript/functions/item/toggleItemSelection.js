import {resetSelectedItem} from './resetSelectedItem.js';
import { handleMapToggle } from '../map/handleMapToggle.js';

function toggleItemSelection (item) {
  if (item.name!='goggle') {
    if (item.selected == true) {
      item.selected = false;
      resetSelectedItem();
    } else {
      item.selected = true;
    }
  } else {
    if (item.isEquipped == true) {
      item.isEquipped = false;
    } else {
      item.isEquipped = true;
    }
  }
}

export {toggleItemSelection}