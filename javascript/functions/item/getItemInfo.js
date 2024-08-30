import {itemLibrary} from '../../data/itemLibrary.js';
import { furnitures } from '../../data/furniture.js';
//return the needed properties of an inputted object or searches a string to find an object
function getItemInfo (entity) {
  let newInventoryInfo = {};
  let foundIndex = undefined;
  if (typeof entity == 'object') {
    newInventoryInfo = {
      name: entity.name,
      src: entity.src,
      desc: entity.desc,
      selected: false,
      openSrc: entity.openSrc,
      useFunction: entity.useFunction,
    }
  } else {
    for (let i = 0; i < itemLibrary.length; i++) {
      if (itemLibrary[i].name==entity) {
        //console.log(newInventoryInfo)
        //console.log(itemLibrary[i].openSrc)
        newInventoryInfo.name = entity;
        newInventoryInfo.src = itemLibrary[i].src;
        newInventoryInfo.desc = itemLibrary[i].desc;
        newInventoryInfo.selected = false;
        foundIndex = i;
        if (itemLibrary[i].openSrc) {
          console.log(itemLibrary[i])
          newInventoryInfo.openSrc = itemLibrary[i].openSrc;
        }
        if (itemLibrary[i].combine) {
          newInventoryInfo.combine = itemLibrary[i].combine;
        }
        if (itemLibrary[i].useFunction) {
          newInventoryInfo.useFunction = furnitures[i].useFunction;
        }
      }
    }
    for (let i = 0; i < furnitures.length; i++) {
      if (furnitures[i].name==entity) {
        newInventoryInfo.name = entity;
        newInventoryInfo.src = furnitures[i].src;
        newInventoryInfo.desc = furnitures[i].desc;
        newInventoryInfo.selected = false;
        if (foundIndex) {
          newInventoryInfo.openSrc = itemLibrary[foundIndex].openSrc;
        }
        if (itemLibrary[i].combine) {
          newInventoryInfo.combine = itemLibrary[i].combine;
        }
        if (furnitures[i].useFunction) {
          newInventoryInfo.useFunction = furnitures[i].useFunction;
        }
      }
    }
  }
  return newInventoryInfo;
}

export {getItemInfo}