import { createDesktopIcon } from "./createDesktopIcon.js";
import { laptopFiles } from "../../data/laptopFiles.js";
import { toggle } from "../toggle.js";
import { createPopup } from "../createPopup.js";

/*
structure ref:
      <div id="computer-content">
        <div id="login-menu">
          <label>Enter Password:</label>
          <input id="password-input">
          <br>
          <div id="password-btn-div">
            <p id="password-btn">Submit</p>
          </div>
        </div>
      </div>
*/

/*let computerContent = document.getElementById("computer-content");
let computerPasswordBtn = document.getElementById("password-btn");
let computerDiv = document.querySelector("#computer-screen");
let computerInput = document.getElementById("password-input");
let computerScreenDiv = document.getElementById("computer-screen-div");
let computerScreenImage = document.getElementById("computer-screen-image");
let fileMenu = document.createElement("div");*/

function mountComputer() {
  let {popup, popupClose} = createPopup();
  popup.style.visibility = "visible";
  let computerScreenImage = document.createElement("img");
  computerScreenImage.src = "./assets/misc/computer/computer-screen.png";
  computerScreenImage.setAttribute("id", "computer-screen-image");
  popup.appendChild(computerScreenImage);
  let computerContent = document.createElement("div");
  computerContent.setAttribute('id', "computer-content");
  popup.appendChild(computerContent);
  let loginMenu = document.createElement("div");
  loginMenu.setAttribute("id", "login-menu");
  computerContent.appendChild(loginMenu);
  let passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Enter Password:";
  loginMenu.appendChild(passwordLabel);
  let passwordInput = document.createElement("input");
  passwordInput.setAttribute("id", "password-input");
  loginMenu.appendChild(passwordInput);
  let passwordBr = document.createElement("br");
  loginMenu.appendChild(passwordBr);
  let passwordBtnDiv = document.createElement("div");
  passwordBtnDiv.setAttribute("id", "password-btn-div");
  loginMenu.appendChild(passwordBtnDiv);
  let passwordBtn = document.createElement("p");
  passwordBtn.textContent = "Submit";
  passwordBtn.setAttribute("id", "password-btn");
  passwordBtnDiv.appendChild(passwordBtn);

  passwordBtn.addEventListener("click", function () {
    if (passwordInput.value == "123") {
      let windowName = document.createElement("p");
      windowName.setAttribute("id", "window-name");
      let desktop = document.createElement("div");
      desktop.setAttribute("id", "desktop");
      computerContent.textContent = "";
      let fileContent = document.createElement("div");
      let fileCloseBtn = document.createElement("p");
      fileCloseBtn.textContent = "X";
      fileCloseBtn.setAttribute("id", "file-close-btn");
      let fileMenu = document.createElement("div");
      fileMenu.setAttribute("id", "file-menu");
      fileMenu.style.visibility = "hidden";
      fileMenu.appendChild(fileContent);
      fileCloseBtn.addEventListener("click", function () {
        toggle(fileMenu);
      });
      fileContent.classList.add("screenMenu");
      fileContent.setAttribute("id", "file-content");
      let centerFileMenuDiv = document.createElement("div");
      centerFileMenuDiv.classList.add("centerDiv");
      centerFileMenuDiv.setAttribute("id", "centerFileMenuDiv");
      desktop.appendChild(centerFileMenuDiv);
      centerFileMenuDiv.appendChild(fileMenu);
      laptopFiles.forEach((fileInfo) => {
        createDesktopIcon({
          parent: desktop,
          windowName: windowName,
          fileMenu: fileMenu,
          fileContentDiv: fileContent,
          type: fileInfo.type,
          x: fileInfo.x,
          y: fileInfo.y,
          text: fileInfo.fileName,
          fileContent: fileInfo.fileContent,
        });
      });
      computerContent.appendChild(desktop);
      let fileHeader = document.createElement("div");
      fileHeader.setAttribute("id", "file-header");
      fileHeader.appendChild(fileCloseBtn);
      fileMenu.appendChild(fileHeader);
      fileHeader.appendChild(windowName);
    }
  });


  /*popup.addEventListener("click", function () {
    console.log(event.target.id);
    if (
      event.target.id == "computer-screen-div" ||
      event.target.id == "computer-screen-image-div"
    ) {
      computerDiv.style.visibility = "hidden";
      fileMenu.style.visibility = "hidden";
      computerContent.style.visibility = "hidden";
      popup.style.visibility = "hidden";
    }
  });*/
}

export { mountComputer };
