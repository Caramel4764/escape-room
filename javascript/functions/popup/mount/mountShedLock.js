import { createPopup } from "../createPopup.js";

let combo = [0,0,0,0]
function mountShedLock() {
  let { popup, popupClose } = createPopup("shedLock");
  popup.style.visibility = "visible";
  popupClose.style.visibility = "visible";
  let shedLockImage = document.createElement("img");
  shedLockImage.src = "./assets/furniture/courtyard/combo-lock.png";
  shedLockImage.setAttribute("id", "shed-lock-image");
  shedLockImage.style.width="250px";
  popup.appendChild(shedLockImage);
  let comboInputDiv = document.createElement("Div");
  comboInputDiv.setAttribute("id", "combo-input-div");
  popup.appendChild(comboInputDiv);
  for (let i = 0; i < 4; i++) {
    let singleComboDiv = document.createElement("div");
    comboInputDiv.appendChild(singleComboDiv);

    let comboInputDown = document.createElement("button");
    comboInputDown.textContent = "-";
    singleComboDiv.appendChild(comboInputDown);

    let comboInput = document.createElement("p");
    comboInput.textContent = combo[i];
    comboInput.setAttribute("id", `combo-input-${i}`);
    comboInput.setAttribute("class", `combo-input`);

    let comboInputUp = document.createElement("button");
    comboInputUp.textContent = "+";
    singleComboDiv.appendChild(comboInputUp);

    singleComboDiv.appendChild(comboInput);
  }
}

export { mountShedLock }