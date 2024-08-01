import {displayInspect} from './inspect/displayInspectMenu.js';
import { displayInspectImg } from './inspect/displayInspectImg.js';

function solvePuzzle (entity, entityImg) {
  displayInspect(entity.puzzle.solveDescription, 100);
  entity.puzzle.isSolved=true;
  if (entity.puzzle.solveFunction) {
    entity.puzzle.solveFunction();
    displayInspectImg(entityImg);
  }
}

export {solvePuzzle}