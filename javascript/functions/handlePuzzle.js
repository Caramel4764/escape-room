import { player } from "../data/player.js";
import { solvePuzzle } from "./solvePuzzle.js";
import { removeItem } from "./item/removeItem.js";
import { displayInspect } from "./inspect/displayInspectMenu.js";

function handlePuzzle (entity, entityImg) {
  if (entity.puzzle.type=='item' && player.selectedItem.name == entity.puzzle.itemNeeded) {
    solvePuzzle(entity, entityImg);
    removeItem(entity);
  } else if (entity.puzzle.type=='item' && player.selectedItem.name != 'none' && player.selectedItem.name && player.selectedItem.name!=entity.puzzle.itemNeeded) {
    displayInspect("Unfortunately, that doesn't go there", 100);
  } else if (entity.puzzle.type=='inspect') {
    if (entity.puzzle.solveFunction && entity.puzzle.isSolved==false) {
      entity.puzzle.solveFunction();
    }
    entity.puzzle.isSolved=true;
    //showSolvedImg(entity);
  } else if (entity.puzzle.type=='interact') {
    if (entity.puzzle.isSolved==false) {
      entity.puzzle.isSolved=true;
      displayInspect(entity.puzzle.solveDescription, 100);
    }
    entity.puzzle.solveFunction();
  }
}

export {handlePuzzle}