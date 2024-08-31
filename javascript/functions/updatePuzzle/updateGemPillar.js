import { player } from "../../data/player.js";
import { createSingleRoomObject } from "../room/createSingleRoomObject.js";
import { spawnGem } from "./spawnGem.js";
function updateGemPillar() {
  player.purpleGemPuzzle.gemPlaced++;
  spawnGem();
}

export {updateGemPillar}