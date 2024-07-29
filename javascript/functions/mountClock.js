import { createPopup } from "./createPopup.js";

function mountClock() {
  let menuDiv = createPopup();
  let clockImg = document.createElement("img");
  clockImg.src = "./assets/furniture/fireplace/grandfather-clock.png";
  menuDiv.appendChild(clockImg);
}

export { mountClock }