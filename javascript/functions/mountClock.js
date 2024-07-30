import { createPopup } from "./createPopup.js";
import { player } from "../data/player.js";
import { time } from "../data/time.js";
import { toggle } from "./toggle.js";
import { gameMenus } from "../data/gameMenus.js";
let timeUnitDom = [];

function updateClock(unit) {
  let convertToUnit;
  for (let i = 0; i < timeUnitDom.length; i++) {
    if (unit != 'none') {
      if (timeUnitDom[i].id == time[unit].convertTo) {
        convertToUnit=timeUnitDom[i];
      }
    }
    if (timeUnitDom[i].id == unit) {
      if (time[unit].value > time[unit].max) {
        time[unit].value = time[unit].min;
        if (time[unit].convertTo != 'none') {
          time[time[unit].convertTo].value++;
          convertToUnit.textContent = time[time[unit].convertTo].value;
        }
      }
      if (time[unit].value < time[unit].min) {
        time[unit].value = time[unit].max;
        if (time[unit].convertTo != 'none') {
          time[time[unit].convertTo].value--;
        convertToUnit.textContent = time[time[unit].convertTo].value;
        }
        updateClock(time[unit].convertTo);
      }
      if (time[unit].convertTo != 'none') {
        updateClock(time[unit].convertTo);
      }
      if (time[unit].value < 10) {
        timeUnitDom[i].textContent = '0'+time[unit].value;
      } else {
        timeUnitDom[i].textContent = time[unit].value;
      } 
    }
  }
}
let clockDiv = document.createElement("div");
let timeInputFullTimeDiv = document.createElement("div");
timeInputFullTimeDiv.setAttribute("id","timeInputFullTimeDiv");
function createTimeInput(timeUnit) {
  let timeInputDiv = document.createElement("div");
  timeInputDiv.classList.add("time-input-div");
  let hourInput = document.createElement("div");
  hourInput.classList.add("time-input");
  hourInput.style.display="flex";
  timeInputDiv.appendChild(hourInput);
  let hourUp = document.createElement("button");
  hourUp.textContent = "+";
  hourInput.appendChild(hourUp);
  let hourCounter = document.createElement("p");

  if (time[timeUnit].value < 10) {
    hourCounter.textContent = '0'+time[timeUnit].value;
  } else {
    hourCounter.textContent = time[timeUnit].value;
  }

  hourCounter.classList.add("time-input-counter");
  hourCounter.setAttribute("id",`${timeUnit}`);
  hourInput.appendChild(hourCounter);
  let hourDown = document.createElement("button");
  hourDown.textContent = "-";
  timeUnitDom.push(hourCounter);
  hourDown.addEventListener("click", function () {
    time[timeUnit].value--;
    updateClock(timeUnit);
  })
  hourUp.addEventListener("click", function () {
    time[timeUnit].value++;
    updateClock(timeUnit);
  })
  hourInput.appendChild(hourDown);
  timeInputFullTimeDiv.appendChild(timeInputDiv);
}

function mountClock() {
  let {popup, popupClose} = createPopup();
  let menuDiv = popup;
  clockDiv.setAttribute("id","clock-div");
  let clockImg = document.createElement("img");
  clockImg.src = "./assets/furniture/fireplace/grandfather-clock.png";
  clockDiv.appendChild(clockImg);
  menuDiv.appendChild(clockImg);
  createTimeInput('hour');
  createTimeInput('minute');
  createTimeInput('second');
  clockDiv.appendChild(timeInputFullTimeDiv);
  menuDiv.appendChild(clockDiv);
  let menuDivInfo = {
    'domElement': menuDiv,
    'name': 'clock',
    'open': function() {
      popupClose.style.visibility = "visible";
      menuDiv.style.visibility = "visible";
    },
  }
  gameMenus.push(menuDivInfo);
  setInterval(function() {
    time.second.value++;
    updateClock('second');
  }, 1000);
}


export { mountClock }