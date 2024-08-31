import { player } from "../../data/player.js";
import { createSingleRoomObject } from "../room/createSingleRoomObject.js";
function spawnGem() {
  if (player.purpleGemPuzzle.gemPlaced >= 2 && player.purpleGemPuzzle.isFireSolved && player.purpleGemPuzzle.isPowerOn) {
    createSingleRoomObject("purpleGem");
  }
}

export { spawnGem }