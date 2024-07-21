function handlePuzzle (entity, entityImg) {
  if (entity.puzzle.type=='item' && player.selectedItem.name == entity.puzzle.itemNeeded) {
    solvePuzzle(entity);
    showSolvedImg(entity, entityImg);
    removeItem(entity);
  } else if (entity.puzzle.type=='item' && player.selectedItem.name != 'none' && player.selectedItem.name && player.selectedItem.name!=entity.puzzle.itemNeeded) {
    displayInspect("Unfortunately, that doesn't go there", 100);
  } else if (entity.puzzle.type=='inspect') {
    if (entity.puzzle.solveFunction && entity.puzzle.isSolved==false) {
      entity.puzzle.solveFunction();
      displayInspect(entity.desc, 100);
    } else {
      displayInspect(entity.puzzle.afterDesc, 100);
    }
    entity.puzzle.isSolved=true;
    showSolvedImg(entity, entityImg);
  }
}

export {handlePuzzle}