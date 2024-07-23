import {addItem} from "./addItem.js";

function grabObject (entity, roomContainer, entityImg) {
  if (entity.isItem) {
    addItem(entity);
    roomContainer.removeChild(entityImg);
  }
}
export {grabObject}