import {displayInspect} from './displayInspectMenu.js';

function displayPuzzleInspect (entity) {
  if (entity.puzzle && entity.puzzle.type!='interact' && entity.puzzle.isSolved) {
    displayInspect(entity.puzzle.afterDesc, 100);
  } else if (!entity.puzzle || entity.puzzle && entity.puzzle.type!='interact') {
  displayInspect(entity.desc, 100);
  }
}

export {displayPuzzleInspect}