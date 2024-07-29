let date = new Date();

let player = {
  "selectedItem": 'none',
  "selectedItemDom" : 'none',
  "currRoom": "not initalized",
  "inventory": [],
  'time': {
    'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds(),
  }
}
export {player}