import {player} from "../../data/player.js";

function resetSelectedItem () {
  player.selectedItem = 'none'
  player.selectedItemDom = 'none';
}
export {resetSelectedItem}