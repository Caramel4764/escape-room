import {player} from "../../data/player.js"
import { addItem } from "./addItem.js";
import { syncInventory } from "./syncInventory.js";
import { removeItem } from "./removeItem.js";
import { findInventoryItemWithLib } from "./findInventoryItemWithLib.js";
import { itemLibrary } from "../../data/itemLibrary.js";
import { displayInspect } from "../inspect/displayInspectMenu.js";
import { toggleInspectMenu } from "../inspect/toggleInspectMenu.js";
import { displayInspectImg } from "../inspect/displayInspectImg.js";

function checkItemCombination (item) {
  if (item.combine) {
    if (player.selectedItem == 'none') {
      syncInventory();
    }
    if (player.selectedItem.name == item.combine.requiredItem) {
      for (let i = 0; i < itemLibrary.length; i++) {
        if (itemLibrary[i].name == item.name) {
          if (itemLibrary[i].combine.desc) {
            addItem(itemLibrary[i].combine.newItem);
            displayInspect(itemLibrary[i].combine.desc, 100);
            for (let t = 0; t < itemLibrary.length; t++) {
              if (itemLibrary[t].name == itemLibrary[i].combine.newItem) {
                displayInspectImg(itemLibrary[t].src);
              }
            }
          } else if (itemLibrary[i].combine.requiredItem) {
            for (let j = 0; j < itemLibrary.length; j++) {
              if (itemLibrary[j].name == itemLibrary[i].combine.requiredItem) {
                if (itemLibrary[j].combine.desc) {
                  for (let t = 0; t < itemLibrary.length; t++) {
                    if (itemLibrary[t].name == itemLibrary[j].combine.newItem) {
                      displayInspectImg(itemLibrary[t].src);
                    }
                  }
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