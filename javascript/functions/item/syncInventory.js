import {player} from "../../data/player.js";
import {handleMapToggle} from "../map/handleMapToggle.js";

let inventory = document.querySelector('#inventory')
//item selection
function syncInventory () {
  player.inventory.map((singleItem, index)=>{
      inventory.children[index].style.backgroundColor='#ffe499';
    if (singleItem.selected==true) {
      inventory.children[index].style.backgroundColor='#BEA665';
      player.selectedItem = singleItem;
      player.selectedItemDom=inventory.children[index];
    }
    if (singleItem.isEquipped==true) {
      inventory.children[index].style.backgroundColor='#9999FF';
    }
  })
}

export {syncInventory};