import {displayInspect} from './displayInspectMenu.js';
import {showSolvedImg} from './createRoomElement.js';

function solvePuzzle (entity, entityImg) {
  displayInspect(entity.puzzle.solveDescription, 100);
  entity.puzzle.isSolved=true;
  if (entity.puzzle.solveFunction) {
    entity.puzzle.solveFunction();
    showSolvedImg(entity, entityImg);
  }
}

export {solvePuzzle}