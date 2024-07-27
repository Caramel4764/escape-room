import {inspectMenuInfo} from "../../data/inspectInfoMenu.js";
const inspectImg = document.querySelector('#inspect-image');

function displayInspectImg (inspecgImg) {
  inspectImg.src=inspecgImg;
}

export {displayInspectImg}