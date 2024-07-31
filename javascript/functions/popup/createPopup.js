import {gameMenus} from "../../data/gameMenus.js";
let interfaceDiv = document.querySelector("#interfaceDiv");

function createPopup(menuName) {
  let popupClose = document.createElement("div");
  let popup = document.createElement("div");
  popup.addEventListener("click", function () {
    event.stopPropagation()
  })
  popupClose.style.visibility = "hidden";
  popup.style.visibility = "hidden";
  popup.setAttribute("class", "popup");
  popupClose.setAttribute("class", "screenMenu");
  popupClose.setAttribute("id", "popupClose");
  popupClose.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  popupClose.addEventListener("click", function () {
    popupClose.style.visibility = "hidden";
    popup.style.visibility = "hidden";
  })
  popupClose.appendChild(popup);
  interfaceDiv.appendChild(popupClose);
  let menuDivInfo = {
    'domElement': popup,
    'name': menuName,
    'open': function() {
      popupClose.style.visibility = "visible";
      popup.style.visibility = "visible";
    },
  }
  gameMenus.push(menuDivInfo);
  return {popup, popupClose};
}

export {createPopup}