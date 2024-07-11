let woodFloorDiv = document.querySelector('#wood-floor-div')


let rooms = {
  "entrance": {
    'wall': './assets/wall/wood-wall.jpg',
    'door' : {
      "inspect": "It's a wooden door",
      'src': './assets/wall/exit.door.png'
    },
    "floor": './assets/floor/wood-floor.png'
  }
}
let currRoom = rooms.entrance
let floor = document.createElement('img')
floor.src=currRoom.floor;
floor.setAttribute('id', 'wood-floor')
woodFloorDiv.appendChild(floor);

