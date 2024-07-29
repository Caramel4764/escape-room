import { createPopup } from "./createPopup.js";

let clockDiv = document.createElement("div");

function createTimeInput() {
  let timeInputDiv = document.createElement("div");
  timeInputDiv.classList.add("time-input-div");
  let hourInput = document.createElement("div");
  hourInput.classList.add("time-input");
  hourInput.style.position="relative";
  hourInput.style.display="flex";
  timeInputDiv.appendChild(hourInput);

  let hourUp = document.createElement("button");
  hourUp.textContent = "+";
  hourInput.appendChild(hourUp);
  let hourCounter = document.createElement("p");
  hourCounter.textContent = "12";
  hourCounter.classList.add("time-input-counter");
  hourInput.appendChild(hourCounter);
  let hourDown = document.createElement("button");
  hourDown.textContent = "-";
  hourInput.appendChild(hourDown);
  return timeInputDiv;
}

function mountClock() {
  let menuDiv = createPopup();
  clockDiv.setAttribute("id","clock-div");
  let clockImg = document.createElement("img");
  clockImg.src = "./assets/furniture/fireplace/grandfather-clock.png";
  clockDiv.appendChild(clockImg);
  menuDiv.appendChild(clockImg);
  
  clockDiv.appendChild(createTimeInput());
  clockDiv.appendChild(createTimeInput());
  clockDiv.appendChild(createTimeInput());





  menuDiv.appendChild(clockDiv);
}

export { mountClock }