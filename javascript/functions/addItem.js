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

  let newItemDiv = document.createElement('div')
  let newItem = document.createElement('img')
  newItem.src=entity.src;
  newItemDiv.appendChild(newItem);
  newItemDiv.setAttribute('id', entity.name)
  newItemDiv.classList.add('item');
  inventory.appendChild(newItemDiv);
  newItemDiv.addEventListener('click', ()=>{
    inventoryInfo.map((singleItem)=>{
      singleItem.selected = false;
      newItemDiv.style.backgroundColor='red'
      //target
      console.log(`single: ${singleItem.name} newDiv: ${newItemDiv.id}`);
      if (singleItem.name==newItemDiv.id) {
        singleItem.selected = true;
        newItemDiv.style.backgroundColor='green'
        console.log(newItemDiv.style.backgroundColor)
      }
    })
    console.log(inventoryInfo)
    //entity.selected = true;
    //.style.backgroundColor#ffe499
  })


}
export {addItem}
