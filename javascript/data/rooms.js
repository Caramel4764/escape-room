let rooms = {
  "dims": {
    x: 1000,
    y: 600
  },
  "entrance": {
    'name': 'entrance',
    'wall': './assets/wall/wood-wall.jpg',
    "floor": './assets/floor/wood-floor.png',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'shelf',
        'src': './assets/furniture/shelf.png',
        "desc": "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
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
        "desc": "The door which you came in",
        'dims': {
          'x': "400px",
          'y': "54px",
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
          'y': "370px",
          "width": "280px",
          'z': 3,
        },
      },
      {
        "name": 'lockBox',
        'src': './assets/furniture/box.png',
        "desc": "Surprise, surprise. It's locked. There's this hidden rule that if there isn't a locked container in plain sight, it's not a real escape room.",
        'dims': {
          'x': "700px",
          'y': "307px",
          "width": "100px",
          'z': 3,
        },
        "puzzle": {
          "type": 'item',
          "solveDescription": "The key fits perfectly into the lock and you open the box",
          "itemNeeded": 'key2',
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
    'wall': './assets/wall/gray-wall.webp',
    "floor": './assets/floor/carpet-floor.jpg',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'loungeChair',
        'src': './assets/furniture/lounge-chair.png',
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
        'src': './assets/furniture/table.png',
        "desc": "It's covered in dust. The drawer is locked.",
        'dims': {
          'x': "80px",
          'y': "290px",
          "width": "300px",
          'z': "3",
        },
        "puzzle": {
          "type": 'item',
          "solveDescription": "The key fits perfectly into the lock and you open the box",
          "itemNeeded": 'key',
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
        'src': './assets/furniture/vase.png',
        "desc": "There is not a single drop of water left inside",
        'dims': {
          'x': "155px",
          'y': "150px",
          "width": "160px",
          'z': "5",
        }
      },
      {
        "name": 'deadRose',
        'src': './assets/furniture/dead-rose.png',
        "desc": "It's completely dried up",
        'dims': {
          'x': "190px",
          'y': "84px",
          "width": "80px",
          'z': "4",
        }
      },
      {
        "name": 'umbrellaStand',
        'src': './assets/furniture/umbrella-stand.png',
        "desc": "There's a bunch of umbrellas here",
        'dims': {
          'x': "470px",
          'y': "220px",
          "width": "160px",
          'z': "4",
        },
      },
      {
        "name": 'key2',
        'isItem': true,
        'src': './assets/object/key2.png',
        "desc": "It's a key",
        'dims': {
          'x': "830px",
          'y': "330px",
          "width": "50px",
          'z': 3,
        },
      },
    ]
  },
  "fireplace": {
    'name': 'fireplace',
    'wall': './assets/wall/green-wall.png',
    "floor": './assets/floor/fireplace-carpet-floor.jpg',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'chimney',
        'src': './assets/furniture/chimney.png',
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
        'src': './assets/furniture/fireplace.png',
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
        'src': './assets/wall/picture-frame-2.png',
        "desc": 'This piece is titled "Monarach". The captions below says: "Meow, meow, meow"',
        'dims': {
          'x': "620px",
          'y': "20px",
          "width": "120px",
          'z': "3",
        }
      },
      {
        "name": 'picture3',
        'src': './assets/wall/picture-frame-3.png',
        "desc": 'This piece is titled "Best Boi" with no context...You are suddenly filled with a strange urge to give it scraps.',
        'dims': {
          'x': "470px",
          'y': "200px",
          "width": "140px",
          'z': "3",
        }
      },
      {
        "name": 'elevatedShelf',
        'src': './assets/furniture/elevated-shelf.png',
        "desc": "What an elevated Design!",
        'dims': {
          'x': "630px",
          'y': "150px",
          "width": "350px",
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
    'wall': './assets/wall/wood-wall.jpg',
    "floor": './assets/floor/wood-floor.png',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'shelf',
        'src': './assets/furniture/shelf.png',
        "desc": "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
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