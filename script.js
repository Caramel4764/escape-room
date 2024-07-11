let woodFloorDiv = document.querySelector('#wood-floor-div')
let wallDiv = document.querySelector('#wall-div');
let floor = document.createElement('img');
let wall = document.createElement('img')

let rooms = {
  "dims": {
    x: 1000,
    y: 600
  },
  "entrance": {
    'wall': './assets/wall/wood-wall.jpg',
    "floor": './assets/floor/wood-floor.png',
    'entities': [
      {
        "name": 'exitDoor',
        'src': './assets/wall/exit-door.png',
        "desc": "The door which you came in",
        'dims': {
          'x': "400px",
          'y': "82px",
          "width": "200px",
          'z': 3,
        }
      },
      {
        "name": 'exitDoor',
        'src': './assets/wall/exit-door.png',
        "desc": "The door which you came in",
        'dims': {
          'x': "100px",
          'y': "82px",
          "width": "200px",
          'z': 3,
        }
      }
    ]
  },
}
function newRoom(room) {
  floor.src = currRoom.floor;
  floor.setAttribute('id', 'wood-floor');
  woodFloorDiv.appendChild(floor);
  wall.src = currRoom.wall;
  wallDiv.append(wall);
  currRoom.entities.map((entity)=>{
    let entityImg = document.createElement("img");
    entityImg.src=entity.src;
    entityImg.style.top=entity.dims.y;
    entityImg.style.left=entity.dims.x;
  })
}

let currRoom = rooms.entrance;
newRoom(currRoom);


