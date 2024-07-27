import { addItem } from "../functions/item/addItem.js";
import { displayInspect } from "../functions/inspect/displayInspectMenu.js";
import { toggleInspectMenu } from "../functions/inspect/toggleInspectMenu.js";
import { toggle } from "../functions/toggle.js";
let computerDiv = document.querySelector('#computer-screen')
let computerScreen = document.getElementById('computer-content');
let computerScreenDiv = document.getElementById('computer-screen-div');

let rooms = {
  "dims": {
    x: 1000,
    y: 600
  },
  "entrance": {
    'name': 'entrance',
    'isDark': false,
    'icon': {
      "src":'./assets/misc/icons/exit-icon.jpg',
      'x': "0px",
      'y': "100px",
    },
    'wall': './assets/wall/wood-wall.jpg',
    "floor": './assets/floor/wood-floor.png',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'shelf',
        'src': './assets/furniture/entrance/shelf.png',
        "desc": "Smells like freshly cut pine wood.",
        'dims': {
          'x': "640px",
          'y': "50px",
          "width": "350px",
          'z': "3",
        }
      },
      {
        "name": 'welcomeMat',
        'src': './assets/floor/carpet.png',
        "desc": "You feel a bump near the corner.There's something underneath",
        'dims': {
          'x': "343px",
          'y': "450px",
          "width": "315px",
          'z': "3",
        }
      },
      {
        "name": 'exitDoor',
        'src': './assets/wall/exit-door.png',
        "desc": "The door which you came in from",
        'dims': {
          'x': "400px",
          'y': "54px",
          "width": "200px",
          'z': 3,
        }
      },
      {
        "name": 'shoeRack',
        'src': './assets/furniture/entrance/shoe-rack.png',
        "desc": "All the shoes are brand new and look unworn. The sizes from left to right are 8, 10, 15",
        'dims': {
          'x': "40px",
          'y': "370px",
          "width": "280px",
          'z': 3,
        },
      },
      {
        "name": 'lockBox',
        'src': './assets/furniture/entrance/box.png',
        "desc": "Surprise, surprise. It's locked. There's this hidden rule that if there isn't a locked container in plain sight, it's not a real escape room.",
        'dims': {
          'x': "700px",
          'y': "307px",
          "width": "100px",
          'z': 3,
        },
        "puzzle": {
          "type": 'item',
          'isSolved': false,
          "solveDescription": "The key fits perfectly into the lock and you open the box",
          'afterDesc': "There's no more stuff in here. Look elsewhere",
          "itemNeeded": 'key2',
          "solveFunction": () => {
            addItem('blueLightBulb');
          },
        },
      },
      {
        "name": 'key',
        'isItem': true,
        'src': './assets/object/key.png',
        "desc": "You've found a key!",
        'dims': {
          'x': "590px",
          'y': "510px",
          "width": "30px",
          'z': 3,
        },
      },
    ]
  },
  "lounge": {
    'name': 'lounge',
    'isDark': false,
    'icon': {
      "src":'./assets/misc/icons/lounge-icon.png',
      'x': "-160px",
      'y': "220px",
    },
    'wall': './assets/wall/gray-wall.webp',
    "floor": './assets/floor/carpet-floor.jpg',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'loungeChair',
        'src': './assets/furniture/lounge/lounge-chair.png',
        "desc": "Cushy",
        'dims': {
          'x': "660px",
          'y': "200px",
          "width": "350px",
          'z': "3",
        }
      },
      {
        "name": 'table',
        'src': './assets/furniture/lounge/table.png',
        "desc": "It's covered in dust. The drawer is locked.",
        'dims': {
          'x': "80px",
          'y': "290px",
          "width": "300px",
          'z': "3",
        },
        "puzzle": {
          "type": 'item',
          'isSolved': false,
          "solveDescription": "The key fits perfectly into the lock and you open the box",
          'afterDesc': "The drawer is already unlocked.",
          "itemNeeded": 'key',
          "solveFunction": () => {
            addItem('battery');
          },
        },
      },
      {
        "name": 'window',
        'src': './assets/wall/window.png',
        "desc": "The rain seems to have picked up",
        'dims': {
          'x': "380px",
          'y': "40px",
          "width": "300px",
          'z': "2",
        }
      },
      {
        "name": 'vase',
        'src': './assets/furniture/lounge/vase.png',
        "desc": "There is not a single drop of water left inside",
        'dims': {
          'x': "115px",
          'y': "150px",
          "width": "160px",
          'z': "5",
        }
      },
      {
        "name": 'deadRose',
        'src': './assets/furniture/lounge/dead-rose.png',
        "desc": "It's completely dried up",
        'dims': {
          'x': "150px",
          'y': "84px",
          "width": "80px",
          'z': "4",
        }
      },
      {
        "name": 'umbrellaStand',
        'src': './assets/furniture/lounge/umbrella-stand.png',
        "desc": "There's a bunch of umbrellas here",
        'dims': {
          'x': "470px",
          'y': "220px",
          "width": "160px",
          'z': "4",
        },
        "puzzle": {
          "type": 'inspect',
          'isSolved': false,
          "solveDescription": "Dummy text",
          'afterDesc': "You already got an umbrella.",
          "solveFunction": () => {
            addItem('umbrella');
          },
        },
      },
      {
        "name": 'scissor',
        'isItem': true,
        'src': './assets/object/scissor.png',
        "desc": "You grab the scissor",
        'dims': {
          'x': "240px",
          'y': "260px",
          "width": "100px",
          'z': 3,
        },
        'combine': {
          'requiredItem':'plush',
          'newItem': 'key2',
        }
      },
    ]
  },
  "fireplace": {
    'name': 'fireplace',
    'isDark': false,
    'icon': {
      "src":'./assets/misc/icons/fireplace-icon.png',
      'x': "0px",
      'y': "300px",
    },
    'wall': './assets/wall/green-wall.png',
    "floor": './assets/floor/fireplace-carpet-floor.jpg',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'chimney',
        'src': './assets/furniture/fireplace/chimney.png',
        "desc": "A fat white-bearded man dressed in red is rumored to enter houses through these.",
        'dims': {
          'x': "150px",
          'y': "0px",
          "width": "192px",
          'z': "3",
        }
      },
      {
        "name": 'fireplace',
        'src': './assets/furniture/fireplace/fireplace.png',
        "desc": "Sooty",
        'dims': {
          'x': "60px",
          'y': "230px",
          "width": "380px",
          'z': "3",
        }
      },
      {
        "name": 'picture1',
        'src': './assets/wall/artwork/anxiety.png',
        "desc": 'This piece is titled "Anxiety". The captions below says: "Only you and you alone can conquer yourself"',
        'dims': {
          'x': "410px",
          'y': "10px",
          "width": "140px",
          'z': "3",
        }
      },
      {
        "name": 'picture2',
        'src': './assets/wall/artwork/monarch.png',
        "desc": 'This piece is titled "Monarch". The captions below says: "A piece of art dedicated to his majesty himself"',
        'dims': {
          'x': "620px",
          'y': "20px",
          "width": "200px",
          'z': "3",
        }
      },
      {
        "name": 'picture3',
        'src': './assets/wall/artwork/arcade.png',
        "desc": 'This piece is titled "Arcade". It features two familar friends.',
        'dims': {
          'x': "450px",
          'y': "200px",
          "width": "160px",
          'z': "3",
        }
      },
      {
        "name": 'elevatedShelf',
        'src': './assets/furniture/fireplace/elevated-shelf.png',
        "desc": "What an elevated Design!",
        'dims': {
          'x': "630px",
          'y': "150px",
          "width": "350px",
          'z': "3",
        }
      },
      {
        "name": 'emptyGlass',
        'isItem': true,
        'src': './assets/object/empty-glass.png',
        "desc": "You've obtained an empty glass!",
        'dims': {
          'x': "790px",
          'y': "200px",
          "width": "50px",
          'z': 3,
        },
      },
    ]
  },
  "courtyard": {
    'name': 'courtyard',
    'isDark': false,
    'icon': {
      "src":'./assets/misc/icons/courtyard-icon.png',
      'x': "160px",
      'y': "200px",
    },
    'wall': './assets/wall/courtyard-wall.jpg',
    "floor": './assets/floor/tile-floor.png',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'frogStatue',
        'src': './assets/furniture/courtyard/frog-statue.png',
        "desc": "It's a statue of a frog. There's something gleaming inside its throat but your hands are too big to reach inside",
        'dims': {
          'x': "600px",
          'y': "420px",
          "width": "150px",
          'z': "4",
        },
        "puzzle": {
          "type": 'item',
          'isSolved': false,
          "solveDescription": "You pour the water into the frog's mouth and the water raises the object inside. You grab the quarter inside. Coin Obtained!",
          'afterDesc': "It's a frog statue",
          "itemNeeded": 'filledGlass',
          "solveFunction": () => {
            addItem('coin');
          },
        },
      },
      {
        "name": 'bush1',
        'src': './assets/furniture/courtyard/long-bush.png',
        "desc": "It's a bushy bush",
        'dims': {
          'x': "-30px",
          'y': "310px",
          "width": "600px",
          'z': "3",
        },
      },
      {
        "name": 'bush2',
        'src': './assets/furniture/courtyard//long-bush.png',
        "desc": "It's a bushy bush",
        'dims': {
          'x': "500px",
          'y': "310px",
          "width": "600px",
          'z': "3",
        }
      },
      {
        "name": 'gnome',
        'src': './assets/furniture/courtyard//gnome.webp',
        "desc": "Okay, tell me that isn't creepy looking",
        'dims': {
          'x': "260px",
          'y': "340px",
          "width": "80px",
          'z': "3",
        }
      },
      {
        "name": 'blueFlower',
        'src': './assets/furniture/courtyard//blue-flower.png',
        "desc": "Very healthy looking",
        'dims': {
          'x': "-75px",
          'y': "442px",
          "width": "320px",
          'z': "3",
        }
      },
      {
        "name": 'pinkFlower',
        'src': './assets/furniture/courtyard//pink-flower.png',
        "desc": "It's some pretty flowers",
        'dims': {
          'x': "780px",
          'y': "440px",
          "width": "370px",
          'z': "3",
        }
      },
      {
        "name": 'fountain',
        'src': './assets/furniture/courtyard//fountain.png',
        "desc": "There's a bunch of dead flies in the fountain. Gross.",
        'dims': {
          'x': "340px",
          'y': "120px",
          "width": "300px",
          'z': "3",
        },
        "puzzle": {
          "type": 'item',
          'isSolved': false,
          "solveDescription": "You fill up your cup with the fountain.",
          'afterDesc': "It's still gross",
          "itemNeeded": 'emptyGlass',
          "solveFunction": () => {
            addItem('filledGlass');
          },
        },
      },
    ]
  },
  "attic": {
    'name': 'attic',
    'isDark': true,
    'icon': {
      "src":'./assets/misc/icons/attic-icon.png',
      'x': "-200px",
      'y': "80px",
    },
    'wall': './assets/wall/wood-wall.jpg',
    "floor": './assets/floor/attic-floor.jpg',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'hangingLight',
        'src': './assets/wall/hanging-light.png',
        "desc": "The bulb is completely burned out.",
        'dims': {
          'x': "500px",
          'y': "0px",
          "width": "50px",
          'z': "5",
        },
        "puzzle": {
          "type": 'item',
          'isSolved': false,
          "solveDescription": "You replace the burned out lightbulb with a new one. Try turning on the switch now",
          'afterDesc': "It's a new light bulb.",
          "itemNeeded": 'blueLightBulb',
          'solveImg': './assets/wall/blue-hanging-light.png',
          "solveFunction": () => {
            displayInspect('You replace the burned out lightbulb with a new one. The demo ends here as of now but feel free to look around.', 100);
          },
        },
      },
      {
        "name": 'stool',
        'src': './assets/furniture/attic/stool.png',
        "desc": "Stool",
        'dims': {
          'x': "800px",
          'y': "300px",
          "width": "170px",
          'z': "3",
        }
      },
      {
        "name": 'packingBox',
        'src': './assets/furniture/attic//packing-box.png',
        "desc": "The box is filled with folders, books, and papers. With a quick skim, none of them seem particularly useful",
        'dims': {
          'x': "20px",
          'y': "220px",
          "width": "400px",
          'z': "3",
        }
      },
      {
        "name": 'singlePackingBox',
        'src': './assets/furniture/attic//single-packing-box.png',
        "desc": "There's a slipped of paper inside the box.",
        'dims': {
          'x': "660px",
          'y': "420px",
          "width": "140px",
          'z': "3",
        },
        "puzzle": {
          "type": 'inspect',
          'isSolved': false,
          "solveDescription": "There's a slip of paper sticking out.",
          'afterDesc': "There's nothing else of interest now",
          "solveFunction": () => {
            addItem('passwordPaper');
          },
        },
      },
      {
        "name": 'craneMachine',
        'src': './assets/furniture/attic//crane-machine.png',
        "desc": "Gambling: Children's edition.",
        'dims': {
          'x': "400px",
          'y': "120px",
          "width": "270px",
          'z': "3",
        },
        "puzzle": {
          "type": 'item',
          'isSolved': false,
          "solveDescription": "Congrats! Against all odds and due to plot armor, you've obtained a plush",
          'afterDesc': "No more. That's enough",
          "itemNeeded": 'coin',
          "solveFunction": () => {
            addItem('plush');
          },
        },
      },
      {
        "name": 'picture-frame-5',
        'src': './assets/wall/artwork/pizzaria.JPG',
        "desc": 'This work is titled "Pizzeria". The caption below says: "Terrible things come in small packages."',
        'dims': {
          'x': "680px",
          'y': "20px",
          "width": "300px",
          'z': "3",
        }
      },
      {
        "name": 'light-switch',
        'src': './assets/wall/light-switch.png',
        "desc": 'Flicking this does nothing.',
        'dims': {
          'x': "30px",
          'y': "220px",
          "width": "40px",
          'z': "3",
        }
      },
    ]
  },
  "bedroom": {
    'name': 'bedroom',
    'isDark': false,
    'icon': {
      "src":'./assets/misc/icons/bedroom-icon.PNG',
      'x': "0px",
      'y': "200px",
    },
    'wall': './assets/wall/bedroom-wall.png',
    "floor": './assets/floor/bedroom-floor.png',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'bed',
        'src': './assets/furniture/bedroom/bed.png',
        "desc": "The sheets and pillows are folded and placed neatly",
        'dims': {
          'x': "300px",
          'y': "300px",
          "width": "400px",
          'z': "3",
        }
      },
      {
        "name": 'nightstand',
        'src': './assets/furniture/bedroom/nightstand.png',
        "desc": "There's a bunch of socks, clothing, and dust inside",
        'dims': {
          'x': "80px",
          'y': "360px",
          "width": "200px",
          'z': "3",
        }
      },
      {
        "name": 'lamp',
        'src': './assets/furniture/bedroom/night-light.png',
        "desc": "It's a lamp",
        'dims': {
          'x': "130px",
          'y': "210px",
          "width": "100px",
          'z': "3",
        }
      },
      {
        "name": 'desk',
        'src': './assets/furniture/bedroom/desk.png',
        "desc": "This is a desk. The chair is missing for unknown reasons which absolutely has nothing to do with blocking the computer",
        'dims': {
          'x': "720px",
          'y': "370px",
          "width": "230px",
          'z': "3",
        }
      },
      {
        "name": 'mouse',
        'src': './assets/furniture/bedroom/mouse.png',
        "desc": "It's a mouse",
        'dims': {
          'x': "885px",
          'y': "355px",
          "width": "30px",
          'z': "3",
        }
      },
      {
        "name": 'computer',
        'src': './assets/furniture/bedroom/computer.png',
        "desc": "It's a really old computer",
        'dims': {
          'x': "770px",
          'y': "255px",
          "width": "110px",
          'z': "3",
        },
        "puzzle": {
          "type": 'interact',
          'isSolved':false,
          "solveDescription": "You power up the old computer.",
          "solveFunction": () => {
            toggle(computerDiv);
            toggle(computerScreen);
            toggle(computerScreenDiv);
          },
        },
      },
      {
        "name": 'elkHead',
        'src': './assets/wall/elk-head.png',
        "desc": "It's the head of an elk.",
        'dims': {
          'x': "400px",
          'y': "20px",
          "width": "200px",
          'z': "3",
        }
      },
    ]
  },
  //insert new rooms here
}

export {rooms};

/*
"entrance": {
    'name': 'fireplace',
    'isDark': false,
    'icon': {
      "src":'./assets/misc/icons/exit-icon.jpg',
      'x': "0px",
      'y': "100px",
    },
    'wall': './assets/wall/wood-wall.jpg',
    "floor": './assets/floor/wood-floor.png',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'shelf',
        'src': './assets/furniture/shelf.png',
        "desc": "Replace",
        'dims': {
          'x': "640px",
          'y': "90px",
          "width": "350px",
          'z': "3",
        }
      },
    ]
  },
*/