import { itemLibrary } from "../../data/itemLibrary.js";

function searchItem (itemName) {
  for (let i = 0; i < itemLibrary.length; i++) {
    if (itemLibrary[i].name == itemName) {
      return itemLibrary[i];
    }
  }
}

export {searchItem}