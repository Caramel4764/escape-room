import {currRoom} from '../../script.js';
import {inventoryInfo} from '../data/inventory.js';
let inventory = document.querySelector('#inventory')

function addItem (entity) {
  //add item in inventory object
  let newInventoryInfo = {
    name: entity.name,
    src: entity.src,
    desc: entity.desc,
    selected: false,
  }
  inventoryInfo.push(newInventoryInfo);
  //creates new item

    //select = true;
    //draw

    //currRoom.entities.map((entity1)=>{
    //entity1.selected = false;
    //entity1.classList.remove("selectedItem");
    //})


}
export {addItem}
