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
];

export {furnitures}