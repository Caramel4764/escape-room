import {resetSelectedItem} from './resetSelectedItem.js';

function toggleItemSelection (item) {
  if (item.selected == true) {
    item.selected = false;
    resetSelectedItem();
  } else {
    item.selected = true;
  }
}

export {toggleItemSelection}