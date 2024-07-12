let woodFloorDiv = document.querySelector('#wood-floor-div')
let setting = document.querySelector('#room');
let wallDiv = document.querySelector('#wall-div');
let floor = document.createElement('img');
let wall = document.createElement('img')
let divider = document.createElement('img');
let inspectMenu = document.querySelector('#inspect-menu')
let inspectText = document.querySelector('#inspect-text');
let gameMask = document.querySelector('#screen-mask');
gameMask.addEventListener('click', ()=>{
  gameMask.style.visibility='hidden';
  inspectMenu.style.visibility='hidden';
})
//280 char max
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
        'src': './assets/furniture/shelf.png',
        "desc": "It's a shelf",
        'dims': {
          'x': "650px",
          'y': "115px",
          "width": "300px",
          'z': "3",
        }
      },
      {
        "name": 'welcomeMat',
        'src': './assets/floor/carpet.png',
        "desc": "There's something underneath",
        'dims': {
          'x': "320px",
          'y': "400px",
          "width": "350px",
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
      {
        "name": 'shoeRack',
        'src': './assets/furniture/shoe-rack.webp',
        "desc": "All the shoes are brand new and look unworn. The sizes from left to right are 8, 10, 15",
        'dims': {
          'x': "-5px",
          'y': "190px",
          "width": "400px",
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
    entityImg.addEventListener('click', () => {
      inspectText.innerHTML=entity.desc;
      inspectMenu.style.visibility ='visible';
      gameMask.style.visibility='visible';
    })
    setting.appendChild(entityImg);
  })
}
let currRoom = rooms.entrance
newRoom(currRoom);


