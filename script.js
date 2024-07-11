let woodFloorDiv = document.querySelector('#wood-floor-div')
let setting = document.querySelector('#room');
let wallDiv = document.querySelector('#wall-div');
let floor = document.createElement('img');
let wall = document.createElement('img')
let divider = document.createElement('img');
let rooms = {
  "dims": {
    x: 1000,
    y: 600
  },
  "entrance": {
    'wall': './assets/wall/wood-wall.jpg',
    "floor": './assets/floor/wood-floor.png',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'hatHanger',
        'src': './assets/furniture/hat-stand.png',
        "desc": "It's a hat hanger",
        'dims': {
          'x': "600px",
          'y': "140px",
          "width": "400px",
          'z': "3",
        }
      },
      {
        "name": 'welcomeMat',
        'src': './assets/floor/carpet.png',
        "desc": "It's a hat hanger",
        'dims': {
          'x': "303px",
          'y': "480px",
          "width": "400px",
          'z': "3",
        }
      },
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
    ]
  },
}
function newRoom(room) {
  floor.src = currRoom.floor;
  floor.style.y='200px';
  floor.setAttribute('id', 'wood-floor');
  woodFloorDiv.appendChild(floor);
  wall.src = currRoom.wall;
  wallDiv.append(wall);
  divider.src = currRoom.divider;
  divider.style.zIndex = '10';
  woodFloorDiv.append(divider);
  currRoom.entities.map((entity)=>{
    let entityImg = document.createElement("img");
    entityImg.src=entity.src;
    entityImg.style.top=entity.dims.y;
    entityImg.style.left=entity.dims.x;
    entityImg.style.width=entity.dims.width;
    entityImg.style.zIndex=entity.dims.z;
    setting.appendChild(entityImg);
  })
}

let currRoom = rooms.entrance
newRoom(currRoom);


