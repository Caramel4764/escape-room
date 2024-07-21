import { player } from "../../data/player.js";
import { resetSelectedItem } from "./resetSelectedItem.js";
let inventory = document.querySelector('#inventory');

function removeItem (entity) {
  console.log(entity)
  for (let i = 0; i < player.inventory.length; i++) {
    if (player.inventory[i].name == entity.puzzle.itemNeeded) {
      player.inventory.splice(i, 1);
      inventory.removeChild(inventory.children[i]);
      resetSelectedItem();
    }
  }
}

export {removeItem}