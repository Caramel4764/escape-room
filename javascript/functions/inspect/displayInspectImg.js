import {inspectMenuInfo} from "../../data/inspectInfoMenu.js";
const inspectImg = document.querySelector('#inspect-image');

function displayInspectImg (inspectImgString) {
  inspectImg.src=inspectImgString;
}

export {displayInspectImg}