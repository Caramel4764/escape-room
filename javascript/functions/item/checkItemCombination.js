import {player} from "../../data/player.js"
import { addItem } from "./addItem.js";
import { syncInventory } from "./syncInventory.js";
import { removeItem } from "./removeItem.js";
import { findItemWithLib } from "./findItemWithLib.js";

function checkItemCombination (item) {
  //console.log(item)
  if (item.combine) {
    if (player.selectedItem == 'none') {
      syncInventory();
    }
    if (player.selectedItem.name == item.combine) {
      let test = findItemWithLib(item.newItem);
      addItem(item.newItem);
      console.log(test)

      removeItem(item.combine);
      removeItem(item.name);
      //
    }
    syncInventory();
  }
}

export {checkItemCombination}