import {resetSelectedItem} from './resetSelectedItem.js';

function toggleItemSelection (item) {
  console.log(item)
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