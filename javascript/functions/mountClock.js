import { createPopup } from "./createPopup.js";
import { player } from "../data/player.js";
let timeUnitCounter = [];
function limitFunctionInput(limitInfo) {
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
  hourCounter.setAttribute("id",`${timeUnit}`);
  timeUnitCounter.push(hourCounter);
  hourInput.appendChild(hourCounter);
  let hourDown = document.createElement("button");
  hourDown.textContent = "-";
  hourDown.addEventListener("click", function () {
    if (timeUnit=='hour') {
      let {value, isConvert} = limitFunctionInput({type:'hour', 'value':player.time[timeUnit], 'min':0, 'max':23, 'change':-1});
      player.time.hour = value;
    } else if (timeUnit=='minute') {
      let {value, isConvert} = limitFunctionInput({type:'minute', 'value':player.time[timeUnit], 'min':0, 'max':59, 'change':-1});
      player.time.minute = value;
    } else if (timeUnit=='second') {
      let {value, isConvert} = limitFunctionInput({type:'second', 'value':player.time[timeUnit], 'min':0, 'max':59, 'change':-1});
      player.time.second = value;
    }
    hourCounter.textContent=player.time[timeUnit]
  })
  hourUp.addEventListener("click", function () {
    if (timeUnit=='hour') {
      let {value, isConvert} = limitFunctionInput({type:'hour', 'value':player.time[timeUnit], 'min':0, 'max':23, 'change':1});
      player.time.minute = convertValue;
      player.time.hour = value;
    } else if (timeUnit=='minute') {
      let {value, isConvert} = limitFunctionInput({type:'minute', 'value':player.time[timeUnit], 'min':0, 'max':59, 'change':1});
      let convertValue = convert(player.time.minute, isConvert, 'hour');
      player.time.minute = convertValue;
      player.time.minute = value;
    } else if (timeUnit=='second') {
      let {value, isConvert} = limitFunctionInput({type:'hour', 'value':player.time[timeUnit], 'min':0, 'max':59, 'change':1});
      let convertValue = convert(player.time.minute, isConvert, 'minute');
      player.time.minute = convertValue;
      player.time.second = value;
    }
    hourCounter.textContent=player.time[timeUnit];
  })
  hourInput.appendChild(hourDown);
  timeInputFullTimeDiv.appendChild(timeInputDiv);
}

function mountClock() {
  let menuDiv = createPopup();
  menuDiv.style.visibility = "visible";
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