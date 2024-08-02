import {itemLibrary} from '../../data/itemLibrary.js';

//return the needed properties of an inputted object or searches a string to find an object
function getItemInfo (entity) {
  let newInventoryInfo = {};
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
        newInventoryInfo.name = entity;
        newInventoryInfo.src = itemLibrary[i].src;
        newInventoryInfo.desc = itemLibrary[i].desc;
        newInventoryInfo.selected = false;
        if (itemLibrary[i].openSrc) {
          newInventoryInfo.openSrc = itemLibrary[i].openSrc;
        }
        if (itemLibrary[i].combine) {
          newInventoryInfo.combine = itemLibrary[i].combine;
        }
      }
    }
  }
  return newInventoryInfo;
}

export {getItemInfo}