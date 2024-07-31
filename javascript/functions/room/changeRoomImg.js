import { rooms } from "../../data/rooms.js"

function changeRoomImg(furnitureName, newSrc) {
  //console.log(rooms)
  for(let i = 1; i < Object.keys(rooms).length; i++) {
    for (let j = 0; j < rooms[Object.keys(rooms)[i]].entities.length; j++) {
      if (rooms[Object.keys(rooms)[i]].entities[j].name == furnitureName) {
        rooms[Object.keys(rooms)[i]].entities[j].domElement.src = newSrc;
      }
    }
    //if (rooms.) {
      
    //}
  }
}

export {changeRoomImg}