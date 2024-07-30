import { createPopup } from "./createPopup.js";
import { player } from "../data/player.js";
import { time } from "../data/time.js";
let timeUnitDom = [];

/*function limitFunctionInput(limitInfo) {
  let {type, value, min, max, change} = limitInfo;
  let isConvert = false;
  if (change < 0) {
    if (value<=min) {
      value=max;
      isConvert = true;
    } else {
      player.time[type]--;

    }
  }
  if (change > 0) {
    if (value>=max) {
      value=min;
      isConvert = true;
    } else {
      player.time[type]++;
    }
  }
  if (value < 10) {
    value = parseInt("0"+value);
  }
  return {value, isConvert};
}
function convert(convertUnit, isConvert, convertUnitType) {
  console.log(convertUnit)
  if (isConvert) {
    player.time[convertUnitType]++;
    for (let i = 0; i < timeUnitCounter.length; i++) {
      if (timeUnitCounter[i].id == convertUnitType) {
        timeUnitCounter[i].textContent = player.time[convertUnitType];
      }
    }
  }
  return convertUnit;
}*/
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
  hourCounter.textContent = time[timeUnit].value;
  hourCounter.classList.add("time-input-counter");
  hourCounter.setAttribute("id",`${timeUnit}`);
  hourInput.appendChild(hourCounter);
  let hourDown = document.createElement("button");
  hourDown.textContent = "-";
  timeUnitDom.push(hourCounter);
  hourDown.addEventListener("click", function () {
    time[timeUnit].value--;
    updateClock(timeUnit);
    //hourCounter.textContent = time[timeUnit].value;

  })
  hourUp.addEventListener("click", function () {
    time[timeUnit].value++;
    //hourCounter.textContent = time[timeUnit].value;
    updateClock(timeUnit);
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