const setting = document.querySelector('#room');

function createRoomElement (currRoom) {
  let roomContainer = document.createElement('div');
  roomContainer.setAttribute('id', 'room-container');
  setting.appendChild(roomContainer);
  let floor = document.createElement('img')
  floor.src = currRoom.floor;
  floor.setAttribute('id', 'wood-floor');
  let woodFloorDiv = document.createElement('div');
  woodFloorDiv.setAttribute('id', 'wood-floor-div');
  woodFloorDiv.appendChild(floor);
  roomContainer.appendChild(woodFloorDiv);
  let divider = document.createElement('img');
  divider.src = currRoom.divider;
  divider.setAttribute('id', 'wood-floor-divider')
  divider.style.zIndex = '10';
  let wall = document.createElement('img')
  wall.src = currRoom.wall;
  wall.setAttribute('id', 'wall');
  let wallDiv = document.createElement('div');
  wallDiv.setAttribute('id', 'wall-div');
  wallDiv.append(wall);
  roomContainer.appendChild(wallDiv);
  woodFloorDiv.append(divider);
}
export {createRoomElement}