import { player } from "../../data/player.js";
import { createSingleRoomObject } from "../room/createSingleRoomObject.js";

function updateGemPillar() {
  player.purpleGemPuzzle.gemPlaced++;
  if (player.purpleGemPuzzle.gemPlaced >= 2) {
    createSingleRoomObject("purpleGem");
  }
}

export {updateGemPillar}