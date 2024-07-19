import {player} from '../data/player.js';
import { syncInventory } from './syncInventory.js';
import {rooms} from '../data/rooms.js';

let inventory = document.querySelector('#inventory')
function addItem (entity) {
  //add item in inventory object
  if (typeof entity == object) {
    let newInventoryInfo = {
    name: entity.name,
    src: entity.src,
    desc: entity.desc,
    selected: false,
    }
  } else {
    rooms.map((room)=>{
      Object.keys(rooms).map((room)=>{
        room.entities.map((prop)=>{
          if (prop.name==entity) {
            let newInventoryInfo = prop;
          }
        })
      })
    })
  }
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
