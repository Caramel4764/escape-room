let date = new Date();

let player = {
  "selectedItem": 'none',
  "selectedItemDom" : 'none',
  "currRoom": "not initalized",
  "inventory": [],
  'flashlight': {
    'acquired': false,
    'domRef': 'none',
    'color': 'rgba(0, 0, 0, 1)',
  },
  'mouseX': 0,
  'mouseY': 0,
}
export {player}