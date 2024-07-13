import {inspectMenuInfo} from '../data/inspectInfoMenu.js'
import {displayInspect} from './displayInspectMenu.js';
import {toggleInspectMenu} from './toggleInspectMenu.js';
import {addItem} from './addItem.js'
const floor = document.createElement('img');
const wall = document.createElement('img')
const divider = document.createElement('img');
const woodFloorDiv = document.querySelector('#wood-floor-div')
const setting = document.querySelector('#room');
const wallDiv = document.querySelector('#wall-div');
const inspectText = document.querySelector('#inspect-text');
const inspectImg = document.querySelector('#inspect-image');
import {inventoryInfo} from '../data/inventory.js';

function displayRoom(currRoom) {
  floor.src = currRoom.floor;
  floor.style.y='200px';
  floor.setAttribute('id', 'wood-floor');
  woodFloorDiv.appendChild(floor);
  wall.src = currRoom.wall;
  wallDiv.append(wall);
  divider.src = currRoom.divider;
  divider.style.zIndex = '10';
  woodFloorDiv.append(divider);
  currRoom.entities.map((entity)=>{
    let entityImg = document.createElement("img");
    entityImg.src=entity.src;
    entityImg.style.top=entity.dims.y;
    entityImg.style.left=entity.dims.x;
    entityImg.style.width=entity.dims.width;
    entityImg.style.zIndex=entity.dims.z;
    entityImg.addEventListener('click', () => {
      displayInspect(entity.desc, 100);
      inspectText.innerHTML = inspectMenuInfo.chunkedText[0];
      inspectImg.src = entity.src;
      toggleInspectMenu();
      //if item, add to inventory
      if (entity.isItem) {
        addItem(entity);
        let newItemDiv = document.createElement('div')
        let newItem = document.createElement('img')
        newItem.src=entity.src;
        newItemDiv.appendChild(newItem);
        console.log(entity.name)
        newItemDiv.setAttribute('id', entity.name)
        newItemDiv.classList.add('item');
        inventory.appendChild(newItemDiv);
        newItemDiv.addEventListener('click', ()=>{
          inventoryInfo.map((singleItem)=>{
            singleItem.selected = false;
            console.log(`single: ${singleItem.name}`)
            console.log(`newDiv: ${newItemDiv.id}`)

            if (singleItem.name==newItemDiv.id) {
              singleItem.selected = true;
            }
          })
          console.log(inventoryInfo)

          entity.selected = true;
          newItemDiv.classList.add('selectedItem');
        })
      }
    })
    setting.appendChild(entityImg);
  })
}

export {displayRoom}