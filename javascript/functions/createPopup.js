let interfaceDiv = document.querySelector("#interfaceDiv");


function createPopup() {
  let popupClose = document.createElement("div");
  let popup = document.createElement("div");
  popup.addEventListener("click", function () {
    event.stopPropagation()
  })
  popup.setAttribute("class", "popup");
  popupClose.setAttribute("class", "screenMenu");
  popupClose.setAttribute("id", "popupClose");
  popupClose.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  popupClose.addEventListener("click", function () {
    popupClose.style.visibility = "hidden";
  })
  popupClose.appendChild(popup);
  interfaceDiv.appendChild(popupClose);
  return popup;
}

export {createPopup}