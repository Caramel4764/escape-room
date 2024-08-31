import { player } from "./player.js";
import { handleMapToggle } from "../functions/map/handleMapToggle.js";
let furnitures = [
  {
    name: "goggle",
    room: 'attic',
    isItem: true,
    isEquipped: false,
    src: "./assets/object/goggle.png",
    useFunction: function() {
      if (player.isDreamWorld == false) {
        player.isDreamWorld = true;
      } else {
        player.isDreamWorld = false;
      }
      if (player.isMapOpened == true) {
        handleMapToggle();
      }
    },
    desc: "You grab the goggle. It feels weightless",
    dims: {
      x: "70px",
      y: "295px",
      width: "50px",
      z: 6,
    },
  },
  {
    name: "redGem",
    room: 'heart',
    isItem: false,
    src: "./assets/object/redGem.png",
    desc: "The gem is where it needs to be. No matter how hard you pull, it won't budge",
    dims: {
      x: "300px",
      y: "300px",
      width: "100px",
      z: 7,
    },
  },
  {
    name: "blueGem",
    room: 'heart',
    isItem: false,
    src: "./assets/object/blueGem.png",
    desc: "The gem is where it needs to be. No matter how hard you pull, it won't budge",
    dims: {
      x: "710px",
      y: "300px",
      width: "100px",
      z: 7,
    },
  },
  {
    name: "fire1",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "240px",
      y: "380px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "fire2",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "320px",
      y: "350px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "fire3",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "400px",
      y: "380px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "fire4",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "480px",
      y: "350px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "fire5",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "570px",
      y: "400px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "fire6",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "650px",
      y: "350px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "fire7",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "730px",
      y: "390px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "fire8",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "820px",
      y: "360px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "fire9",
    room: 'heart',
    isItem: false,
    src: "../../assets/furniture/heart/fire.gif",
    desc: "It burns steadily",
    dims: {
      x: "900px",
      y: "380px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: 'purpleGem',
    isItem: true,
    src: './assets/misc/icons/crystal-icon.png',
    desc: "There it is! You've gotten what you've came for. It's time to leave now.",
    dims: {
      x: "450px",
      y: "60px",
      width: "200px",
      z: "3",
    }
  },
];

export {furnitures}