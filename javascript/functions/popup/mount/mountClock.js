import { createPopup } from "../createPopup.js";
import { time } from "../../../data/time.js";
let timeUnitDom = [];

function updateClockTens(unit) {
  if (unit == "none") {
    console.log('exit')
    return
  }
  let convertToUnit;
  let tensMax = Math.floor((time[unit].max-1) / 10) * 10;
  for (let i = 0; i < timeUnitDom.length; i++) {
    if (unit != "none") {
      if (timeUnitDom[i].id == time[unit].convertTo) {
        convertToUnit = timeUnitDom[i];
      }
    }
    if (timeUnitDom[i].id == unit) {
      if (time[unit].value > time[unit].max) {
        
        time[unit].value = time[unit].value%10;
        if (time[unit].value == 4) {
          time[unit].value = 0;
        }
        if (time[unit].convertTo != "none") {
          time[time[unit].convertTo].value++;
          convertToUnit.textContent = time[time[unit].convertTo].value;
        }
      }
      if (time[unit].value < time[unit].min) {
        time[unit].value = tensMax+((time[unit].value+10)%10);
        if (time[unit].convertTo != "none") {
          time[time[unit].convertTo].value--;
          convertToUnit.textContent = time[time[unit].convertTo].value;
        }
        updateClock(time[unit].convertTo);
      }
      if (time[unit].convertTo != "none") {
        updateClock(time[unit].convertTo);
      }
      if (time[unit].value < 10) {
        timeUnitDom[i].textContent = "0" + time[unit].value;
      } else {
        timeUnitDom[i].textContent = time[unit].value;
      }
    }
  }
}

function updateClock(unit) {
  let convertToUnit;
  for (let i = 0; i < timeUnitDom.length; i++) {
    if (unit != "none") {
      if (timeUnitDom[i].id == time[unit].convertTo) {
        convertToUnit = timeUnitDom[i];
      }
    }
    if (timeUnitDom[i].id == unit) {
      if (time[unit].value > time[unit].max) {

        time[unit].value = time[unit].min;
        if (time[unit].convertTo != "none") {
          time[time[unit].convertTo].value++;

          convertToUnit.textContent = time[time[unit].convertTo].value;
        }
      }
      if (time[unit].value < time[unit].min) {
        time[unit].value = time[unit].max;
        if (time[unit].convertTo != "none") {
          time[time[unit].convertTo].value--;
          console.log(time[time[unit].convertTo].value)
          //edge case for hour 0, minute 0, and second 0 while going down
          if (unit=='second' && time[time[unit].convertTo].value == -1) {
            time.hour.value=time.hour.max;
            console.log(time.hour.max)
          }
          if (time[time[unit].convertTo].value < 0) {
            time[time[unit].convertTo].value = time[time[unit].convertTo].max;
          }
          convertToUnit.textContent = time[time[unit].convertTo].value;
        }
        updateClock(time[unit].convertTo);
      }
      if (time[unit].convertTo != "none") {
        updateClock(time[unit].convertTo);
      }
      if (time[unit].value < 10) {
        timeUnitDom[i].textContent = "0" + time[unit].value;
      } else {
        timeUnitDom[i].textContent = time[unit].value;
      }
    }
  }
}

let clockDiv = document.createElement("div");
let timeInputFullTimeDiv = document.createElement("div");
timeInputFullTimeDiv.setAttribute("id", "timeInputFullTimeDiv");
function createTimeInput(timeUnit) {
  let timeInputDiv = document.createElement("div");
  timeInputDiv.classList.add("time-input-div");
  let hourInput = document.createElement("div");
  hourInput.classList.add("time-input");
  hourInput.style.display = "flex";
  timeInputDiv.appendChild(hourInput);

  let hourUpDiv = document.createElement("div");
  let hourUp = document.createElement("button");
  hourUp.textContent = "+";
  let hourUpTens = document.createElement("button");
  hourUpTens.textContent = "+";
  hourUpDiv.appendChild(hourUpTens);
  hourUpDiv.appendChild(hourUp);
  hourInput.appendChild(hourUpDiv);
  let hourCounter = document.createElement("p");

  if (time[timeUnit].value < 10) {
    hourCounter.textContent = "0" + time[timeUnit].value;
  } else {
    hourCounter.textContent = time[timeUnit].value;
  }

  hourCounter.classList.add("time-input-counter");
  hourCounter.setAttribute("id", `${timeUnit}`);
  hourInput.appendChild(hourCounter);
  let hourDown = document.createElement("button");
  hourDown.textContent = "-";

  let hourDownDiv = document.createElement("div");
  let hourDownTens = document.createElement("button");
  hourDownTens.textContent = "-";
  hourDownDiv.appendChild(hourDownTens);
  hourDownDiv.appendChild(hourDown);
  hourInput.appendChild(hourDownDiv);
  
  timeUnitDom.push(hourCounter);
  hourDown.addEventListener("click", function () {
    time[timeUnit].value--;
    updateClock(timeUnit);
  });
  hourDownTens.addEventListener("click", function () {
    time[timeUnit].value -= 10;
    updateClockTens(timeUnit);
  });
  hourUp.addEventListener("click", function () {
    time[timeUnit].value++;
    updateClock(timeUnit);
  });
  hourUpTens.addEventListener("click", function () {
    time[timeUnit].value += 10;
    updateClockTens(timeUnit);
  });
  timeInputFullTimeDiv.appendChild(timeInputDiv);
}

function mountClock() {
  let { popup, popupClose } = createPopup("clock");
  let menuDiv = popup;
  clockDiv.setAttribute("id", "clock-div");
  let clockImg = document.createElement("img");
  clockImg.src = "./assets/furniture/fireplace/grandfather-clock.png";
  clockDiv.appendChild(clockImg);
  menuDiv.appendChild(clockImg);
  createTimeInput("hour");
  createTimeInput("minute");
  createTimeInput("second");
  clockDiv.appendChild(timeInputFullTimeDiv);
  menuDiv.appendChild(clockDiv);

  setInterval(function () {
    time.second.value++;
    updateClock("second");
  }, 1000);
}

export { mountClock };
