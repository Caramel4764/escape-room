import {player} from "../../data/player.js"
import { addItem } from "./addItem.js";
import { syncInventory } from "./syncInventory.js";
import { removeItem } from "./removeItem.js";
import { findInventoryItemWithLib } from "./findInventoryItemWithLib.js";
import { itemLibrary } from "../../data/itemLibrary.js";

function checkItemCombination (item) {
  if (item.combine) {
    if (player.selectedItem == 'none') {
      syncInventory();
    }
    if (player.selectedItem.name == item.combine) {
      for (let i = 0; i < itemLibrary.length; i++) {
        if (itemLibrary[i].name == item.name) {
          addItem(itemLibrary[i].newItem);
        }
      }
      removeItem(item.combine);
      removeItem(item.name);
      //
    }
    syncInventory();
  }
}

export {checkItemCombination}