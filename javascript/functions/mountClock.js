import { createPopup } from "./createPopup.js";
import { player } from "../data/player.js";
function limitFunctionInput(limitInfo) {
  let {value, min, max, change} = limitInfo;
  if (change < 0) {
    if (value<=min) {
      value=max;
    } else {
      value--;
    }
    console.log('subract')
  }
  if (change > 0) {
    if (value>=max) {
      value=min;
    } else {
      value++;
    }
    console.log('add')
  }
  return value;
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
  hourCounter.textContent = player.time[timeUnit];
  hourCounter.classList.add("time-input-counter");
  hourInput.appendChild(hourCounter);
  let hourDown = document.createElement("button");
  hourDown.textContent = "-";
  hourDown.addEventListener("click", function () {
    if (timeUnit=='hour') {
      player.time.hour = limitFunctionInput({'value':player.time[timeUnit], 'min':0, 'max':23, 'change':-1});
    }
    hourCounter.textContent=player.time[timeUnit]
  })
  hourUp.addEventListener("click", function () {
    if (timeUnit=='hour') {
      player.time.hour = limitFunctionInput({'value':player.time[timeUnit], 'min':0, 'max':23, 'change':1});
    }
    hourCounter.textContent=player.time[timeUnit]
  })
  hourInput.appendChild(hourDown);
  timeInputFullTimeDiv.appendChild(timeInputDiv);
}

function mountClock() {
  let menuDiv = createPopup();
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
}

export { mountClock }