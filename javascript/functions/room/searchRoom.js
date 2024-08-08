import { rooms } from "../../data/rooms.js"

function searchRoom(room, entity) {
  for (let i = 1; i < rooms[room].entities.length; i++) {
    if (rooms[room].entities[i].name == entity) {
      return rooms[room].entities[i];
    }
  }
}

export {searchRoom}