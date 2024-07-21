let itemLibrary = [
  {
    "name": 'filledGlass',
    'src': './assets/object/filled-glass.png',
  },
  {
    "name": 'coin',
    'src': './assets/object/coin.png',
  },
  {
    "name": 'plush',
    'src': './assets/object/plush.png',
    'combine': {
      'requiredItem':'scissor',
      'newItem': 'key'
    }
  },
  {
    "name": 'plushPaper',
    'openSrc': './assets/object/enlarged/plush-paper-big.png',
    'src': './assets/object/plush-paper.png',
  },
  {
    "name": 'passwordPaper',
    'openSrc': './assets/object/enlarged/password-paper-big.png',
    'src': './assets/object/password-paper.png',
  },
  {
    "name": 'umbrella',
    'src': './assets/object/umbrella.png',
  },
  {
    "name": 'flashLightItem',
    'src': './assets/object/flashlight.png',
    'combine': {
      'item':'battery',
      'newItem': 'flashlightWBattery'
    }
  },
  {
    "name": 'battery',
    'src': './assets/object/battery.png',
    'combine': {
      'requiredItem':'flashLightItem',
      'newItem': 'flashlightWBattery'
    }
  },
  {
    "name": 'scissor',
    'src': './assets/object/scissor.png',
    'combine': {
      'requiredItem':'plush',
      'newItem': 'key'
    }
  },
  {
    "name": 'flashlightWBattery',
    'src': './assets/object/combo/flashlightWBattery.png',
  },
]

export {itemLibrary}