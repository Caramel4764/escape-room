import { player } from "../data/player";

function removeItem (item) {
  for (let i = 0; i < player.inventory.length; i++) {
    if (player.inventory[i].name == item.puzzle.itemNeeded) {
      player.inventory.splice(i, 1);
      player.inventory.removeChild(player.inventory.children[i]);
      resetSelectedItem();
    }
  }
}

export {removeItem}