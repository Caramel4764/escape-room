import { player } from "./player.js";

let furnitures = [
  {
    name: "goggle",
    room: 'attic',
    isItem: true,
    src: "./assets/object/goggle.png",
    useFunction: function() {
      if (player.isDreamWorld == false) {
        player.isDreamWorld = true;
      } else {
        player.isDreamWorld = false;
      }
      console.log(player.isDreamWorld);
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