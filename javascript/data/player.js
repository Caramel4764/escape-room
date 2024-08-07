let date = new Date();

let player = {
  "selectedItem": 'none',
  "selectedItemDom" : 'none',
  'isDreamWorld': false,
  "currRoom": "not initalized",
  "inventory": [],
  'flashlight': {
    'acquired': false,
    'domRef': 'none',
    'color': 'rgba(0, 0, 0, 1)',
  },
  shedPuzzle: {
    'isSolved': false,
  },
  'mouseX': 0,
  'mouseY': 0,
}
export {player}