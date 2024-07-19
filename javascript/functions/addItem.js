import {player} from '../data/player.js';
import { syncInventory } from './syncInventory.js';
import {rooms} from '../data/rooms.js';

let inventory = document.querySelector('#inventory')
function addItem (entity) {
  //add item in inventory object
  let newInventoryInfo = {};
  if (typeof entity == 'object') {
    newInventoryInfo = {
    name: entity.name,
    src: entity.src,
    desc: entity.desc,
    selected: false,
    }
  } else {
      let roomArray = Object.keys(rooms);
      for (let i = 1; i < roomArray.length; i++) {
        //console.log(roomArray[i])
        rooms[roomArray[i]].entities.map((prop)=>{
          if (prop.name==entity) {
            newInventoryInfo = prop;
            console.log(newInventoryInfo.prop)
          }
        })
        /*room.entities.map((prop)=>{
          if (prop.name==entity) {
            newInventoryInfo = prop;
          }
        })*/
      }
  }
  //console.log(newInventoryInfo)
  player.inventory.push(newInventoryInfo);
  let newItemDiv = document.createElement('div')
  let newItem = document.createElement('img')
  newItem.src=entity.src;
  newItemDiv.appendChild(newItem);
  newItemDiv.setAttribute('id', entity.name)
  newItemDiv.classList.add('item');
  inventory.appendChild(newItemDiv);
  newItemDiv.addEventListener('click', ()=>{
    player.inventory.map((singleItem)=> {
      singleItem.selected = false;
      //target
      if (singleItem.name==newItemDiv.id) {
        singleItem.selected = true;
      }
    })
    syncInventory();
  })
}
export {addItem}
