import { createPopup } from "../createPopup.js";
import { player } from "../../../data/player.js";
import { addItem } from "../../item/addItem.js";
import { displayInspect } from "../../inspect/displayInspectMenu.js";
import { searchRoom } from "../../room/searchRoom.js";
import {searchItem} from "../../item/searchItem.js";
let { popup, popupClose } = createPopup("shedLock");

let correctCombo = [8,1,0,5]
let combo = [0,0,0,0]
function checkCorrectCombo() {
  if (correctCombo[0] == combo[0] && correctCombo[1] == combo[1] && correctCombo[2] == combo[2] && correctCombo[3] == combo[3]) {
    player.shedPuzzle.isSolved = true;
    popup.style.visibility = "hidden";
    popupClose.style.visibility = "hidden";
    addItem("shovel");
    displayInspect(searchRoom("courtyard", "toolShed").puzzle.finishDescription, 100, searchItem("shovel").src)
  }
}

function mountShedLock() {
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
    singleComboDiv.style.display = "flex";
    singleComboDiv.style.justifyContent = "center";
    singleComboDiv.style.alignItems = "center";
    singleComboDiv.style.gap = "8px";
    comboInputDiv.appendChild(singleComboDiv);

    let comboInput = document.createElement("p");

    let comboInputDown = document.createElement("button");
    comboInputDown.setAttribute("class", 'combo-btn');
    comboInputDown.textContent = "-";
    singleComboDiv.appendChild(comboInputDown);
    comboInputDown.addEventListener("click", function () {
      if (combo[i] > 0) {
        combo[i]--;
      } else {
        combo[i]=9;
      }
      comboInput.textContent = combo[i];
      checkCorrectCombo();
    })

    comboInput.textContent = combo[i];
    comboInput.setAttribute("class", `combo-input`);
    singleComboDiv.appendChild(comboInput);

    let comboInputUp = document.createElement("button");
    comboInputUp.textContent = "+";
    comboInputUp.setAttribute("class", 'combo-btn');
    singleComboDiv.appendChild(comboInputUp);
    comboInputUp.addEventListener("click", function () {
      if (combo[i] < 9) {
        combo[i]++;
      } else {
        combo[i]=0;
      }
      comboInput.textContent = combo[i];
      checkCorrectCombo();
    })

  }
}

export { mountShedLock }