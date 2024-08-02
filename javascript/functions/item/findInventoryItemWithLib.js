import {player} from "../../data/player.js";

function findInventoryItemWithLib (searchQuery) {
  let targetItem = 'none';
  player.inventory.map((singleItem)=> {
    //inventory item matches library item?
    if (singleItem.name == searchQuery) {
      targetItem = singleItem;
      console.log(singleItem);
    } else {
      singleItem.selected = false;
    }
  })
  return targetItem;
}
export {findInventoryItemWithLib}