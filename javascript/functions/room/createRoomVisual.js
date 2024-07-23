const setting = document.querySelector('#room');

function createRoomVisual (roomName) {
  let roomContainer = document.createElement('div');
  let floor = document.createElement('img')
  let woodFloorDiv = document.createElement('div');
  let wall = document.createElement('img')
  let wallDiv = document.createElement('div');
  roomContainer.classList.add('room-container');
  roomContainer.setAttribute('id', roomName.name);
  setting.appendChild(roomContainer);
  floor.src = roomName.floor;
  floor.setAttribute('id', 'wood-floor');
  woodFloorDiv.setAttribute('id', 'wood-floor-div');
  woodFloorDiv.appendChild(floor);
  roomContainer.appendChild(woodFloorDiv);
  wall.src = roomName.wall;
  wall.setAttribute('id', 'wall');
  wallDiv.setAttribute('id', 'wall-div');
  wallDiv.append(wall);
  roomContainer.appendChild(wallDiv);
  return roomContainer;
}
export {createRoomVisual}