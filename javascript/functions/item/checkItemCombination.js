import {player} from "../../data/player.js"
import { addItem } from "./addItem.js";
import { syncInventory } from "./syncInventory.js";
import { removeItem } from "./removeItem.js";
import { findInventoryItemWithLib } from "./findInventoryItemWithLib.js";
import { itemLibrary } from "../../data/itemLibrary.js";
import { displayInspect } from "../inspect/displayInspectMenu.js";
import { toggleInspectMenu } from "../inspect/toggleInspectMenu.js";
function checkItemCombination (item) {
  if (item.combine) {
    if (player.selectedItem == 'none') {
      syncInventory();
    }
    if (player.selectedItem.name == item.combine.requiredItem) {
      for (let i = 0; i < itemLibrary.length; i++) {
        if (itemLibrary[i].name == item.name) {
          console.log(itemLibrary[i].name)
          if (itemLibrary[i].combine.desc) {
            console.log('1trigger')
            addItem(itemLibrary[i].combine.newItem);
            displayInspect(itemLibrary[i].combine.desc, 100);
          } else if (itemLibrary[i].combine.requiredItem) {
            console.log('2trigger');
            for (let j = 0; j < itemLibrary.length; j++) {
              if (itemLibrary[j].name == itemLibrary[i].combine.requiredItem) {
                if (itemLibrary[j].combine.desc) {
                  addItem(itemLibrary[j].combine.newItem);
                  displayInspect(itemLibrary[j].combine.desc, 100);
                }
              }
            }
          }
          toggleInspectMenu();
        }
      }
      removeItem(item.combine.requiredItem);
      removeItem(item.name);
    }
    syncInventory();
  }
}

export {checkItemCombination}