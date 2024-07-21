import {player} from "../../data/player.js";

function findItemWithLib (searchQuery) {
  let targetItem = 'none';
  player.inventory.map((singleItem)=> {
    //inventory item matches library item?
    if (singleItem.name == searchQuery) {
      targetItem = singleItem;
    } else {
      singleItem.selected = false;
    }
  })
  return targetItem;
}
export {findItemWithLib}