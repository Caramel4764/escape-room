let woodFloorDiv = document.querySelector('#wood-floor-div')
let setting = document.querySelector('#room');
let wallDiv = document.querySelector('#wall-div');
let floor = document.createElement('img');
let wall = document.createElement('img')
let divider = document.createElement('img');
let inspectMenu = document.querySelector('#inspect-menu')
let inspectText = document.querySelector('#inspect-text');
let gameMask = document.querySelector('#screen-mask');
let inspectImg = document.querySelector('#inspect-image');
let chunkedText = [];
let textCounter = 1;
gameMask.addEventListener('click', ()=>{
  if (chunkedText.length > 1) {
      textCounter++;
      inspectText.innerHTML = chunkedText[textCounter];
      if (textCounter >= chunkedText.length) {
        textCounter = 1;
        gameMask.style.visibility='hidden';
        inspectMenu.style.visibility='hidden';
      }
  } else {
    gameMask.style.visibility='hidden';
    inspectMenu.style.visibility='hidden';
  }
})
//100 char max
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
        "name": 'shelf',
        'src': './assets/furniture/shelf.png',
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        'dims': {
          'x': "640px",
          'y': "90px",
          "width": "350px",
          'z': "3",
        }
      },
      {
        "name": 'welcomeMat',
        'src': './assets/floor/carpet.png',
        "desc": "You feel a bump near the corner.There's something underneath",
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
        'src': './assets/furniture/shoe-rack.png',
        "desc": "All the shoes are brand new and look unworn. The sizes from left to right are 8, 10, 15",
        'dims': {
          'x': "40px",
          'y': "380px",
          "width": "280px",
          'z': 3,
        }
      },
    ]
  },
}
function displayInspect(text) {
  chunkedText = [];
  let snipTime = Math.floor(text.length/100)+1;
  if (snipTime == 1) {
    return chunkedText.push(text);
  }
  for(let i = 0; i<snipTime;i++) {
    if (i==0) {
      chunkedText.push(text.slice(0, 100))
    } else {
      chunkedText.push(text.slice(1+(i*100), 100+100*i))
    }
  }
  return chunkedText;
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
      displayInspect(entity.desc);
      inspectText.innerHTML= chunkedText[0];
      inspectImg.src=entity.src;
      inspectMenu.style.visibility ='visible';
      gameMask.style.visibility='visible';
    })
    setting.appendChild(entityImg);
  })
}
let currRoom = rooms.entrance
newRoom(currRoom);


