import {player} from "../../data/player.js";

function findItemWithLib (newItemDiv) {
  let targetItem = 'none';
  player.inventory.map((singleItem)=> {
    //inventory item matches library item?
    if (singleItem.name == newItemDiv.id) {
      targetItem = singleItem;
    } else {
      singleItem.selected = false;
    }
  })
  return targetItem;
}
export {findItemWithLib}