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
          'x': "343px",
          'y': "475px",
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
        },
      },
      {
        "name": 'lockBox',
        'src': './assets/furniture/box.png',
        "desc": "Surprise, surprise. It's locked. There's this hidden rule that if there isn't a locked container in plain sight, it's not a real escape room.",
        'dims': {
          'x': "700px",
          'y': "340px",
          "width": "120px",
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
          'x': "600px",
          'y': "540px",
          "width": "30px",
          'z': 3,
        },
      },
      {
        "name": 'key2',
        'isItem': true,
        'src': './assets/object/key2.png',
        "desc": "It's a key",
        'dims': {
          'x': "800px",
          'y': "540px",
          "width": "50px",
          'z': 3,
        },
      },
    ]
  },


  "lounge": {
    'name': 'lounge',
    'wall': './assets/wall/wood-wall.jpg',
    "floor": './assets/floor/wood-floor.png',
    'divider': "./assets/floor/floor-divider.png",
    'entities': [
      {
        "name": 'loungeChair',
        'src': './assets/furniture/lounge-chair.png',
        "desc": "Cushy",
        'dims': {
          'x': "660px",
          'y': "130px",
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
          'y': "260px",
          "width": "300px",
          'z': "3",
        }
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
          'y': "120px",
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
          'y': "64px",
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
        "puzzle": {
          "type": 'item',
          "solveDescription": "The key fits perfectly into the lock and you open the box",
          "itemNeeded": 'key',
        },
      },
    ]
  }
  //insert new rooms here
}

export {rooms};

/*
"entrance": {
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