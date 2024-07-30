let date = new Date();

let time = {
  'hour': {
    'max': 23,
    'min': 0,
    'convertTo': 'none',
    'value':date.getHours(),
  },
  'minute': {
    'max': 59,
    'min': 0,
    'convertTo': 'hour',
    'value':date.getMinutes(),
  },
  'second': {
    'max': 59,
    'min': 0,
    'convertTo': 'minute',
    'value':date.getSeconds(),
  },
}

export {time}