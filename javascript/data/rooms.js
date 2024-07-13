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
        "desc": "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brownAddingLongTextToTestFunction.. fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog1123. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.",
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
        "name": 'key',
        'isItem': true,
        'selected': false,
        'src': './assets/object/key.png',
        "desc": "It's a key",
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
        'selected': false,
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
}

export {rooms};