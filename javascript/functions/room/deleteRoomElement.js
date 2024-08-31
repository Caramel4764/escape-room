import { rooms } from "../../data/rooms.js"
import { locations } from "../../data/locations.js"

function deleteRoomElement (elementName) {
  locations.forEach((room) => {
    room.childNodes.forEach((entity) => {
      if (entity.id == elementName) {
        entity.remove();
      }
    })
  })
}

export {deleteRoomElement}