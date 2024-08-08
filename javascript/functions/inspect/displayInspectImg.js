import {inspectMenuInfo} from "../../data/inspectInfoMenu.js";
const inspectImg = document.querySelector('#inspect-image');

function displayInspectImg (inspectImgString) {
  if (typeof inspectImgString=='object') {
    inspectImg.src=inspectImgString.src;
  } else {
    inspectImg.src=inspectImgString;
  }
}

export {displayInspectImg}