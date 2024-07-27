import { inspectMenuInfo } from "../data/inspectInfoMenu.js";
//inspectMenuInfo.entityImg
function showSolvedImg (entity, entityImg) {
  if (entityImg) {
  } else {
    entityImg=inspectMenuInfo.entityImg;
  }
  if (entity.puzzle && entity.puzzle.isSolved&&entity.puzzle.solveImg) {
    entityImg.src=entity.puzzle.solveImg;
  } else {
    entityImg.src=entity.src;
  }
}

export {showSolvedImg}