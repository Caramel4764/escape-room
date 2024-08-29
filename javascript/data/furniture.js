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
    useFunction: function() {
    },
    desc: "The gem is where it needs to be. No matter how hard you pull, it won't budge",
    dims: {
      x: "300px",
      y: "300px",
      width: "100px",
      z: 8,
    },
  },
  {
    name: "blueGem",
    room: 'heart',
    isItem: false,
    src: "./assets/object/blueGem.png",
    useFunction: function() {
    },
    desc: "The gem is where it needs to be. No matter how hard you pull, it won't budge",
    dims: {
      x: "710px",
      y: "300px",
      width: "100px",
      z: 8,
    },
  },
];

export {furnitures}