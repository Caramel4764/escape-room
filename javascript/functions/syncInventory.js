import {player} from "../data/player.js"
import {inventoryInfo} from "../data/inventory.js"
let inventory = document.querySelector('#inventory')

function syncInventory () {
  inventoryInfo.map((singleItem, index)=>{
    inventory.children[index].style.backgroundColor='#ffe499';
    if (singleItem.selected==true) {
      inventory.children[index].style.backgroundColor='#BEA665';
      player.selectedItem = singleItem;
      player.selectedItemDom=inventory.children[index];
    }
  })
}

export {syncInventory};