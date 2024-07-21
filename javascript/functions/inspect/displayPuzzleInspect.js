import {displayInspect} from './displayInspectMenu.js';

function displayPuzzleInspect (entity) {
  if (entity.puzzle && entity.puzzle.isSolved) {
    displayInspect(entity.puzzle.afterDesc, 100);
  } else {
  displayInspect(entity.desc, 100);
  }
}

export {displayPuzzleInspect}