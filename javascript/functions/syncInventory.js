import {player} from "../data/player.js"

let inventory = document.querySelector('#inventory')
import {inventoryInfo} from "../data/inventory.js"
function syncInventory () {
  inventoryInfo.map((singleItem, index)=>{
    inventory.children[index].style.backgroundColor='#ffe499';
    //&&inventory.children[index].id==singleItem.name)
    if (singleItem.selected==true) {
      inventory.children[index].style.backgroundColor='#BEA665';
      player.selectedItem = singleItem;
      player.selectedItemDom=inventory.children[index];
    }
  })
}

export {syncInventory};