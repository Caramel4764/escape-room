function showSolvedImg (entity, entityImg) {
  console.log(entityImg)
  if (entity.puzzle && entity.puzzle.isSolved&&entity.puzzle.solveImg) {
    entityImg.src=entity.puzzle.solveImg;
  } else {
    entityImg.src=entity.src;
  }
}

export {showSolvedImg}