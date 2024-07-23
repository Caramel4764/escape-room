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
      'requiredItem':'battery',
    }
  },
  {
    "name": 'battery',
    'src': './assets/object/battery.png',
    'combine': {
      'requiredItem':'flashLightItem',
      'newItem': 'flashlightWBattery',
      'desc': "After you slot the batteries into the flashlight and flick the switch, a bright beam comes out. This should help with dark rooms."
    }
  },
  {
    "name": 'flashlightWBattery',
    'src': './assets/object/combo/flashlightWBattery.png',
  },
  {
    "name": 'plush',
    'src': './assets/object/plush.png',
    'combine': {
      'requiredItem':'scissor',
      'newItem': 'key2',
      'desc': "You use the scissor to cut open the plush. Digging inside the stuffing, you find a hidden key."
    }
  },
  {
    "name": 'key2',
    'src': './assets/object/combo/key2.png',
  },
]

export {itemLibrary}