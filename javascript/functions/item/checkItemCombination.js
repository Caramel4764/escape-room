import {player} from "../../data/player.js"
import { syncInventory } from "./syncInventory.js";

function checkItemCombination (item) {
  if (item.combine) {
    if (player.selectedItem == 'none') {
      syncInventory();
    }
    if (player.selectedItem.name == item.combine) {
      console.log('trigger')
      removeItem(item.combine);
      removeItem(item.name);

    }
    syncInventory();
  }
}

export {checkItemCombination}