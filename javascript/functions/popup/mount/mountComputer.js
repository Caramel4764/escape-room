import { createDesktopIcon } from "../../computer/createDesktopIcon.js";
import { laptopFiles } from "../../../data/laptopFiles.js";
import { toggle } from "../../toggle.js";
import { createPopup } from "../createPopup.js";
import { gameMenus } from "../../../data/gameMenus.js";

function mountComputer() {
  let { popup, popupClose } = createPopup("computer");
  //popup.style.visibility = "visible";
  let computerScreenImage = document.createElement("img");
  computerScreenImage.src = "./assets/misc/computer/computer-screen.png";
  computerScreenImage.setAttribute("id", "computer-screen-image");
  popup.appendChild(computerScreenImage);
  let computerContent = document.createElement("div");
  computerContent.setAttribute("id", "computer-content");
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

  let incorrectPasswordDiv = document.createElement("div");
  incorrectPasswordDiv.setAttribute("id", "incorrect-password-div");
  incorrectPasswordDiv.classList.add("flex-centered");
  incorrectPasswordDiv.style.visibility = "hidden";
  let test = document.createElement("h1");
  test.textContent = "Incorrect Password";
  incorrectPasswordDiv.appendChild(test);
  let incorrectPasswordCloseBtn = document.createElement("p");
  incorrectPasswordCloseBtn.textContent = "X";
  incorrectPasswordCloseBtn.setAttribute("class", "file-close-btn");
  incorrectPasswordCloseBtn.setAttribute("class", "file-close-btn");
  incorrectPasswordDiv.appendChild(incorrectPasswordCloseBtn);
  incorrectPasswordCloseBtn.addEventListener("click", function () {
    incorrectPasswordDiv.style.visibility = "hidden";
  });

  computerContent.appendChild(incorrectPasswordDiv);

  passwordBtn.addEventListener("click", function () {
    //if (passwordInput.value == "Password123!") {
      let windowName = document.createElement("p");
      windowName.setAttribute("id", "window-name");
      let desktop = document.createElement("div");
      desktop.setAttribute("id", "desktop");
      computerContent.textContent = "";
      let fileContent = document.createElement("div");
      let fileCloseBtn = document.createElement("p");
      fileCloseBtn.textContent = "X";
      fileCloseBtn.setAttribute("class", "file-close-btn");
      let fileMenu = document.createElement("div");
      fileMenu.setAttribute("id", "file-menu");
      fileMenu.style.visibility = "hidden";
      fileMenu.appendChild(fileContent);
      fileCloseBtn.addEventListener("click", function () {
        toggle(fileMenu);
      });
      popupClose.addEventListener("click", function () {
        fileMenu.style.visibility = "hidden";
      })
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
    //} else {
      incorrectPasswordDiv.style.visibility = "visible";
    //}
  });
}

export { mountComputer };
