import { player } from "../../data/player.js";
import { displayInspect } from "../inspect/displayInspectMenu.js";
import { removeItem } from "../item/removeItem.js";
let correctOrder = [6, 1, 8, 2, 7, 9, 5, 4, 3];
function updateTorch() {
  let isWrong = false;
  if (player.purpleGemPuzzle.fireOrder.length >= 9) {
    for (let i = 0; i < player.purpleGemPuzzle.fireOrder.length; i++) {
      if (player.purpleGemPuzzle.fireOrder[i] != correctOrder[i]) {
        isWrong = true;
        console.log(player.purpleGemPuzzle.fireOrder)
        displayInspect('As soon as you light the last torch, they all blow out by themselves. Must be an order to lighting them', 100)
      }
    }
    if (!isWrong) {
      player.purpleGemPuzzle.isFireSolved = true;
      removeItem('match');
      displayInspect('You hear a loud click', 100)
    }
  }
}

export {updateTorch}