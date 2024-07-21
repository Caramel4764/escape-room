import { player } from "../../data/player.js";
import { resetSelectedItem } from "./resetSelectedItem.js";
import { findItemWithLib } from "./findItemWithLib.js";
let inventory = document.querySelector('#inventory');

function removeItem (entity) {
  if (typeof entity != 'object') {
    for (let i = 0; i < player.inventory.length; i++) {
      if (player.inventory[i].name == entity) {
        player.inventory.splice(i, 1);
        inventory.removeChild(inventory.children[i]);
        resetSelectedItem();
      }
    }
  } else {
    for (let i = 0; i < player.inventory.length; i++) {
      if (player.inventory[i].name == entity.puzzle.itemNeeded) {
        player.inventory.splice(i, 1);
        inventory.removeChild(inventory.children[i]);
        resetSelectedItem();
      }
    }
  }
}

export {removeItem}